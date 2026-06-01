// filepath: src/data/projects.ts

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

/**
 * Banco de dados mockado contendo dados realistas do portfólio,
 * destacando a atuação como Desenvolvedor .NET Sênior na Ambev Tech
 * e Desenvolvedor de Jogos Independentes (Unity / Unreal Engine).
 */
export const projectsData: Project[] = [
  {
    id: 'ambev-routing-engine',
    title: 'Ambev Tech Logistic Routing Engine',
    description: 'Sistema distribuído de alta escalabilidade para roteirização e otimização automatizada de entregas logísticas, processando milhões de pedidos diariamente de forma otimizada.',
    category: 'backend',
    technologies: ['C#', '.NET Core 8', 'Azure Service Bus', 'SQL Server', 'Entity Framework Core', 'Redis'],
    company: 'Ambev Tech',
    role: 'Senior .NET Developer',
    highlights: [
      'Desenvolveu arquitetura orientada a eventos com Azure Service Bus, desacoplando o pipeline de pedidos e o cálculo de rotas.',
      'Otimizou consultas complexas e índices do banco SQL Server via EF Core, reduzindo em 40% o tempo total de processamento de rotas.',
      'Implementou cache distribuído em Redis para persistência temporária de coordenadas de geolocalização.'
    ],
    repoUrl: 'https://github.com/portfolio/ambev-routing-engine'
  },
  {
    id: 'ambev-notification-gateway',
    title: 'Centralized Notification Gateway',
    description: 'Gateway centralizado responsável por despachar alertas via SMS, E-mail e Push Notifications para múltiplos clientes e sistemas da Ambev.',
    category: 'backend',
    technologies: ['C#', '.NET 7', 'RabbitMQ', 'Azure Event Grid', 'Entity Framework Core', 'SQL Server'],
    company: 'Ambev Tech',
    role: 'Senior .NET Developer',
    highlights: [
      'Arquitetou pipeline de processamento assíncrono com RabbitMQ, garantindo entrega confiável de mensagens via filas resilientes com DLQ (Dead Letter Queue).',
      'Integração transparente com APIs de parceiros de telefonia e serviços de e-mail externos com failover automático.',
      'Implementou monitoramento extensivo de latência e consumo de filas de processamento.'
    ],
    repoUrl: 'https://github.com/portfolio/notification-gateway'
  },
  {
    id: 'brew-and-battle',
    title: 'Brew and Battle',
    description: 'Jogo indie de estratégia e simulação desenvolvido na Unity onde o jogador gerencia uma taverna alquímica medieval e comanda batalhas de cartas.',
    category: 'gamedev',
    technologies: ['Unity', 'C#', 'UI Toolkit', 'Scriptable Objects', 'A* Pathfinding'],
    role: 'Indie Game Developer',
    highlights: [
      'Criou um sistema de gerenciamento de estado extensível em C# para controle dos turnos de batalha e rotina de clientes.',
      'Projetou e codificou a UI do jogo de forma desacoplada utilizando o moderno Unity UI Toolkit.',
      'Implementou movimentação inteligente de NPCs clientes e garçons usando A* Pathfinding customizado para a malha da taverna.'
    ],
    liveUrl: 'https://gabrielarcasa.itch.io/brew-and-battle'
  },
  {
    id: 'cardapio-padaria',
    title: 'Cardapio Padaria',
    description: 'Jogo 3D de ação em terceira pessoa do estilo hack and slash / roguelike, desenvolvido na Unreal Engine com foco em combate responsivo.',
    category: 'frontend',
    technologies: ['Vite', 'React', 'TypeScript', 'Tailwind CSS'],
    role: 'Full Stack Developer',
    highlights: [
      'Escreveu o motor principal de combate dinâmico em C++, mapeando buffers de input e detecção precisa de hitboxes por sockets de colisão.',
      'Desenvolveu a Inteligência Artificial dos inimigos e chefes usando Behavior Trees e Environment Query System (EQS).',
      'Criou efeitos visuais de magia e impacto altamente otimizados utilizando Unreal Niagara VFX.'
    ],
    liveUrl: 'https://cardapio-padaria.vercel.app/'
  }
];

/**
 * Retorna os projetos focados em Backend.
 */
export function getBackendProjects(): Project[] {
  return projectsData.filter(project => project.category === 'backend');
}

/**
 * Retorna os projetos focados em Frontend e Game Development.
 * Ambos fazem parte das interfaces com as quais o usuário final interage diretamente (camada cliente).
 */
export function getFrontendProjects(): Project[] {
  return projectsData.filter(project => project.category === 'frontend' || project.category === 'gamedev');
}

/**
 * Retorna todos os projetos cadastrados.
 */
export function getAllProjects(): Project[] {
  return projectsData;
}

/**
 * Busca um projeto específico com base no seu identificador.
 * @param id Identificador único do projeto.
 */
export function getProjectById(id: string): Project | undefined {
  return projectsData.find(project => project.id === id);
}
