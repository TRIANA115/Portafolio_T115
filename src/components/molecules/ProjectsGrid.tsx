import React from 'react';
import type { GitHubRepo } from '@/types/github';
import RepoCard from '../atoms/RepoCard';

interface ProjectsGridProps {
  repos: GitHubRepo[];
  loading: boolean;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ repos, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 animate-pulse"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-5 h-5 bg-gray-700 rounded"></div>
              <div className="h-6 bg-gray-700 rounded w-32"></div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="h-4 bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            </div>
            <div className="flex space-x-2 mb-4">
              <div className="h-6 bg-gray-700 rounded w-16"></div>
              <div className="h-6 bg-gray-700 rounded w-20"></div>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <div className="h-4 bg-gray-700 rounded w-16"></div>
                <div className="h-4 bg-gray-700 rounded w-8"></div>
              </div>
              <div className="h-4 bg-gray-700 rounded w-24"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (repos.length === 0) {
    return (
      <div className="text-center py-12">
        <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h3 className="text-xl font-semibold text-white mb-2">No se encontraron repositorios</h3>
        <p className="text-gray-400">No hay repositorios disponibles en este momento.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo, index) => (
        <RepoCard key={repo.id} repo={repo} index={index} />
      ))}
    </div>
  );
};

export default ProjectsGrid;