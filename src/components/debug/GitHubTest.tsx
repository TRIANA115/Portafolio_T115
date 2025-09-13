import React, { useState, useEffect } from 'react';
import { GitHubService } from '@/services/githubApi';

const GitHubTest: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const testAPI = async () => {
      try {
        console.log('🔍 Iniciando test de GitHub API...');
        
        // Test 1: Información del usuario
        console.log('📊 Obteniendo información del usuario...');
        const userInfo = await GitHubService.getUserInfo();
        console.log('✅ Usuario obtenido:', userInfo);

        // Test 2: Repositorios públicos
        console.log('📦 Obteniendo repositorios públicos...');
        const publicRepos = await GitHubService.getPublicRepos();
        console.log('✅ Repos públicos obtenidos:', publicRepos.length);

        // Test 3: Todos los repositorios
        console.log('🔐 Obteniendo todos los repositorios...');
        const allRepos = await GitHubService.getAllRepos();
        console.log('✅ Todos los repos obtenidos:', allRepos.length);

        setData({
          user: userInfo,
          publicRepos: publicRepos.length,
          allRepos: allRepos.length,
          repos: allRepos.slice(0, 5) // Solo los primeros 5 para debug
        });

      } catch (err) {
        console.error('❌ Error en test:', err);
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    testAPI();
  }, []);

  if (loading) {
    return (
      <div className="p-8 bg-gray-900 text-white">
        <h2 className="text-2xl mb-4">🔍 Probando GitHub API...</h2>
        <div className="animate-pulse">Cargando...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 bg-red-900 text-white">
        <h2 className="text-2xl mb-4">❌ Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-900 text-white">
      <h2 className="text-2xl mb-4">✅ GitHub API Test Results</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold">👤 Usuario:</h3>
          <p>Nombre: {data?.user?.name}</p>
          <p>Username: {data?.user?.login}</p>
          <p>Repos públicos: {data?.user?.public_repos}</p>
        </div>

        <div>
          <h3 className="text-lg font-bold">📊 Estadísticas:</h3>
          <p>Repos públicos obtenidos: {data?.publicRepos}</p>
          <p>Todos los repos obtenidos: {data?.allRepos}</p>
        </div>

        <div>
          <h3 className="text-lg font-bold">📦 Primeros 5 repositorios:</h3>
          <ul className="list-disc list-inside">
            {data?.repos?.map((repo: any) => (
              <li key={repo.id}>
                {repo.name} {repo.private ? '🔒' : '🌐'} - {repo.language || 'Sin lenguaje'}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GitHubTest;