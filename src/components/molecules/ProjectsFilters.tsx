import React from 'react';
import { motion } from 'framer-motion';

interface ProjectsFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  languages: string[];
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const ProjectsFilters: React.FC<ProjectsFiltersProps> = ({
  searchTerm,
  onSearchChange,
  selectedLanguage,
  onLanguageChange,
  languages,
  sortBy,
  onSortChange
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between"
    >
      {/* Barra de búsqueda */}
      <div className="relative flex-1 max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Buscar repositorios..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
      </div>

      <div className="flex space-x-4">
        {/* Filtro por lenguaje */}
        <select
          value={selectedLanguage}
          onChange={(e) => onLanguageChange(e.target.value)}
          className="px-4 py-2 border border-gray-600 rounded-lg bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        >
          <option value="">Todos los lenguajes</option>
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>

        {/* Ordenar por */}
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-2 border border-gray-600 rounded-lg bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        >
          <option value="updated">Más recientes</option>
          <option value="name">Nombre A-Z</option>
          <option value="stars">Más estrellas</option>
          <option value="forks">Más forks</option>
        </select>
      </div>
    </motion.div>
  );
};

export default ProjectsFilters;