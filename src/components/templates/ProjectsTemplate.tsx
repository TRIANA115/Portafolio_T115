import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '../organisms/Navbar';
import MovingBackground from '../MovingBackground';
import ProjectsHeader from '../molecules/ProjectsHeader';
import ProjectsFilters from '../molecules/ProjectsFilters';
import ProjectsGrid from '../molecules/ProjectsGrid';
import { GitHubService } from '@/services/githubApi';
import type { GitHubRepo, GitHubUser } from '@/types/github';

const ProjectsTemplate: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Estados para filtros
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [sortBy, setSortBy] = useState('updated');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        console.log('Iniciando carga de datos de GitHub...');
        
        const [userInfo, repositories] = await Promise.all([
          GitHubService.getUserInfo(),
          GitHubService.getAllRepos()
        ]);
        
        console.log('Usuario obtenido:', userInfo);
        console.log('Repositorios obtenidos:', repositories.length);
        
        setUser(userInfo);
        setRepos(repositories);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar los datos');
        console.error('Error fetching GitHub data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Obtener lenguajes únicos
  const languages = useMemo(() => {
    const uniqueLanguages = [...new Set(repos
      .map(repo => repo.language)
      .filter(Boolean)
    )] as string[];
    
    return uniqueLanguages.sort();
  }, [repos]);

  // Filtrar y ordenar repositorios
  const filteredAndSortedRepos = useMemo(() => {
    let filtered = repos;

    // Filtrar por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter(repo =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
        repo.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filtrar por lenguaje
    if (selectedLanguage) {
      filtered = filtered.filter(repo => repo.language === selectedLanguage);
    }

    // Ordenar
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'stars':
          return b.stargazers_count - a.stargazers_count;
        case 'forks':
          return b.forks_count - a.forks_count;
        case 'updated':
        default:
          return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      }
    });

    return filtered;
  }, [repos, searchTerm, selectedLanguage, sortBy]);

  if (error) {
    return (
      <MovingBackground>
        <div className="page-container">
          <Navbar />
          <main className="container mx-auto px-4 pt-32 pb-24 relative z-10">
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-2xl font-bold text-white mb-2">Error al cargar los proyectos</h2>
              <p className="text-gray-400 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Reintentar
              </button>
            </div>
          </main>
        </div>
      </MovingBackground>
    );
  }

  return (
    <MovingBackground>
      <div className="page-container">
        <Navbar />
        
        <main className="container mx-auto px-4 pt-32 pb-24 relative z-10">
          <ProjectsHeader 
            user={user} 
            repoCount={repos.length} 
            loading={loading} 
          />
          
          <ProjectsFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
            languages={languages}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
          
          <ProjectsGrid 
            repos={filteredAndSortedRepos} 
            loading={loading} 
          />
          
          {!loading && filteredAndSortedRepos.length > 0 && (
            <div className="text-center mt-12 text-gray-400">
              Mostrando {filteredAndSortedRepos.length} de {repos.length} repositorios
            </div>
          )}
        </main>
      </div>
    </MovingBackground>
  );
};

export default ProjectsTemplate;