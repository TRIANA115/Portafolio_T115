import React from 'react';
import { motion } from 'framer-motion';
import type { GitHubUser } from '@/types/github';

interface ProjectsHeaderProps {
  user: GitHubUser | null;
  repoCount: number;
  loading: boolean;
}

const ProjectsHeader: React.FC<ProjectsHeaderProps> = ({ user, repoCount, loading }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <div className="flex items-center justify-center mb-6">
        {user?.avatar_url && (
          <img
            src={user.avatar_url}
            alt={user.name || user.login}
            className="w-20 h-20 rounded-full border-2 border-blue-400/50 mr-4"
          />
        )}
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-white">Mis</span>{' '}
            <span className="text-blue-400">Proyectos</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Explora mi trabajo en GitHub
          </p>
        </div>
      </div>

      {user && (
        <div className="flex justify-center space-x-8 text-sm text-gray-400">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{loading ? '...' : repoCount}</div>
            <div>Repositorios</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{user.followers}</div>
            <div>Seguidores</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{user.following}</div>
            <div>Siguiendo</div>
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-center">
        <a
          href="https://github.com/TRIANA115"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors border border-gray-600 hover:border-gray-500"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
          </svg>
          <span>Ver en GitHub</span>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectsHeader;