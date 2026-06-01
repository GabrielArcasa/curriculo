/**
 * Categorias disponíveis de projetos no portfólio.
 */
export type ProjectCategory = 'backend' | 'frontend' | 'gamedev';

/**
 * Contrato de dados rigoroso que define a estrutura de um projeto.
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  company?: string;
  role?: string;
  highlights?: string[];
  imageUrl?: string;
}
