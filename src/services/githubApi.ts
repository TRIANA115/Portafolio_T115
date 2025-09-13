import type { GitHubRepo, GitHubUser } from '@/types/github';

const GITHUB_USERNAME = 'TRIANA115';
const GITHUB_API_BASE = 'https://api.github.com';
// Para acceder a repos privados, necesitas un token de acceso personal
// Puedes crearlo en: https://github.com/settings/tokens
// Solo necesita el scope 'repo' para leer repositorios privados
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || '';

export class GitHubService {
  private static async fetchWithAuth(url: string) {
    const headers: Record<string, string> = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Portfolio-App'
    };

    // Solo añadir el token si está disponible
    if (GITHUB_TOKEN) {
      headers['Authorization'] = `token ${GITHUB_TOKEN}`;
    }

    const response = await fetch(url, { headers });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return response.json();
  }

  static async getUserInfo(): Promise<GitHubUser> {
    return this.fetchWithAuth(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`);
  }

  static async getPublicRepos(): Promise<GitHubRepo[]> {
    const repos = await this.fetchWithAuth(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
    );
    
    return repos.filter((repo: GitHubRepo) => !repo.private);
  }

  static async getAllRepos(): Promise<GitHubRepo[]> {
    try {
      console.log('Token disponible:', !!GITHUB_TOKEN);
      
      if (GITHUB_TOKEN) {
        console.log('Obteniendo repos con token...');
        // Con token: obtener todos los repos (públicos y privados)
        const repos = await this.fetchWithAuth(
          `${GITHUB_API_BASE}/user/repos?sort=updated&per_page=100&type=all`
        );
        console.log('Repos obtenidos con token:', repos.length);
        return repos;
      } else {
        console.log('Obteniendo repos públicos...');
        // Sin token: solo repos públicos usando el endpoint público
        const repos = await this.getPublicRepos();
        console.log('Repos públicos obtenidos:', repos.length);
        return repos;
      }
    } catch (error) {
      // Si falla, intentar con repos públicos
      console.warn('Error al obtener repositorios, mostrando solo públicos:', error);
      return this.getPublicRepos();
    }
  }

  static getLanguageColor(language: string | null): string {
    const colors: Record<string, string> = {
      'JavaScript': '#f1e05a',
      'TypeScript': '#2b7489',
      'Python': '#3572A5',
      'Java': '#b07219',
      'C++': '#f34b7d',
      'C': '#555555',
      'HTML': '#e34c26',
      'CSS': '#1572B6',
      'PHP': '#4F5D95',
      'Ruby': '#701516',
      'Go': '#00ADD8',
      'Rust': '#dea584',
      'Swift': '#ffac45',
      'Kotlin': '#F18E33',
      'Dart': '#00B4AB',
      'Shell': '#89e051',
      'Vue': '#2c3e50',
      'React': '#61dafb'
    };

    return colors[language || ''] || '#6b7280';
  }
}