import type { Project } from "./projects";
import brewImg from "../assets/brew.png";
import baralhoImg from "../assets/baralho.png";
import finAppImg from "../assets/finApp.png";

export type Language = "pt" | "en";

export interface SkillItem {
  name: string;
  level: string;
}

export interface SkillGroup {
  category: string;
  icon: "backend" | "frontend" | "devops";
  description: string;
  items: SkillItem[];
}

export interface PortfolioContent {
  common: {
    brand: string;
    categoryLabels: Record<Project["category"], string>;
  };
  navigation: {
    home: string;
    frontend: string;
    backend: string;
  };
  header: {
    themeToggleLabel: string;
    languageToggleLabel: string;
    menuToggleLabel: string;
  };
  footer: {
    madeWith: string;
    author: string;
  };
  home: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    descriptionStart: string;
    descriptionStrongBackend: string;
    descriptionMiddle: string;
    descriptionStrongGame: string;
    descriptionEnd: string;
    backendCta: string;
    frontendCta: string;
    educationSenac: string;
    educationUniversity: string;
    codeName: string;
    codeComment: string;
    stackTitle: string;
    stackDescription: string;
    skills: SkillGroup[];
  };
  portfolio: {
    frontend: {
      eyebrow: string;
      title: string;
      description: string;
      sectionTitle: string;
      emptyTitle: string;
      emptyText: string;
    };
    backend: {
      eyebrow: string;
      title: string;
      description: string;
      sectionTitle: string;
      emptyTitle: string;
      emptyText: string;
    };
  };
  projectCard: {
    highlightsTitle: string;
    codeLink: string;
    demoLink: string;
  };
  projects: Project[];
}

export const contentByLanguage: Record<Language, PortfolioContent> = {
  pt: {
    common: {
      brand: "GabrielArcasa",
      categoryLabels: {
        backend: "Backend",
        frontend: "Frontend",
        gamedev: "Game Dev",
      },
    },
    navigation: {
      home: "Início",
      frontend: "Frontend & Jogos",
      backend: "Portfólio Backend",
    },
    header: {
      themeToggleLabel: "Alternar tema",
      languageToggleLabel: "Alternar idioma",
      menuToggleLabel: "Alternar menu de navegação",
    },
    footer: {
      madeWith: "Feito com orgulho por",
      author: "Gabriel Arcasa de Mendonça",
    },
    home: {
      badge: "7+ Anos de Experiência",
      titlePrefix: "Engenharia de Software .NET &",
      titleHighlight: "Arquiteturas Escaláveis",
      titleSuffix: "com Alma de Game Dev",
      descriptionStart: "Sou Engenheiro de Software na Ambev Tech, com sólida experiência no design de microsserviços e APIs corporativas utilizando",
      descriptionStrongBackend: ".NET, Azure, Docker, Kubernetes e Mensageria assíncrona",
      descriptionMiddle: "Concomitante à arquitetura de backend, aplico minha forte paixão por desenvolvimento de jogos digitais explorando",
      descriptionStrongGame: "Unity, Unreal Engine e programação em C# e C++",
      descriptionEnd: "unindo a robustez corporativa com técnicas avançadas de interatividade.",
      backendCta: "Ver Portfólio Backend",
      frontendCta: "Ver Jogos & Frontend",
      educationSenac: "Bacharelado em Ciência da Computação",
      educationUniversity: "Pós-Graduação em Desenvolvimento de Jogos Digitais",
      codeName: "Gabriel Arcasa",
      codeComment: "// Especialista em backend .NET e apaixonado por desenvolvimento de jogos",
      stackTitle: "Stack Tecnológica & Competências",
      stackDescription: "Mapeamento das principais tecnologias, bancos de dados e ferramentas aplicadas em ecossistemas de alta escala e design de jogos.",
      skills: [
        {
          category: "Backend & Core Architecture",
          icon: "backend",
          description: "Construção de sistemas altamente concorrentes, robustos, tolerantes a falhas e orientados a regras complexas de negócio.",
          items: [
            { name: ".NET / C#", level: "Especialista" },
            { name: "Microsserviços", level: "Avançado" },
            { name: "Arquitetura Limpa / DDD / SOLID", level: "Avançado" },
            { name: "APIs RESTful", level: "Avançado" },
            { name: "Delphi", level: "Avançado" },
            { name: "C++", level: "Intermediário" },
          ],
        },
        {
          category: "Cloud, DevOps & Messaging",
          icon: "devops",
          description: "Gerenciamento e sustentação de infraestruturas em nuvem modernas, barramentos de eventos e esteiras automatizadas de deploy.",
          items: [
            { name: "Azure (Event Bus / Cloud Ecossystem)", level: "Avançado" },
            { name: "RabbitMQ / Azure Service Bus", level: "Avançado" },
            { name: "Kubernetes / Rancher", level: "Avançado" },
            { name: "Docker", level: "Avançado" },
            { name: "PostgreSQL / MySQL / SQL Server", level: "Avançado" },
            { name: "MongoDB / NoSQL", level: "Avançado" },
            { name: "CI/CD (Jenkins / Pipes)", level: "Avançado" },
          ],
        },
        {
          category: "Game Dev & Frontend",
          icon: "frontend",
          description: "Criação de experiências interativas, mecânicas responsivas de jogos e interfaces reativas.",
          items: [
            { name: "Unity", level: "Avançado" },
            { name: "Unreal Engine", level: "Avançado" },
            { name: "Android SDK", level: "Intermediário" },
            { name: "React / TypeScript / JavaScript", level: "Intermediário" },
            { name: "Tailwind CSS", level: "Intermediário" },
          
          ],
        },
      ],
    },
    portfolio: {
      frontend: {
        eyebrow: "Interatividade & Experiência",
        title: "Portfólio Frontend & Game Dev",
        description: "Espaço dedicado a projetos interativos e desenvolvimento de jogos. Aqui você encontra o resultado da minha especialização em Game Dev, unindo conceitos avançados de computação gráfica e game design utilizando engines de ponta do mercado como Unity e Unreal.",
        sectionTitle: "Projetos de Jogos e Web",
        emptyTitle: "Nenhum projeto selecionado",
        emptyText: "Os projetos de jogos e aplicações web estão carregados logo abaixo.",
      },
      backend: {
        eyebrow: "Sistemas Distribuídos & Missão Crítica",
        title: "Portfólio Backend",
        description: "Demonstração de sistemas e arquiteturas de backend resilientes projetados por mim. Especialidade no desenvolvimento de microsserviços de alto throughput no ecossistema .NET, barramentos de mensageria assíncrona corporativos e modernizações de plataformas que movimentam milhões em valor de mercado.",
        sectionTitle: "Sistemas Corporativos e APIs",
        emptyTitle: "Nenhum sistema encontrado",
        emptyText: "Confira a listagem dos principais ecossistemas logo abaixo.",
      },
    },
    projectCard: {
      highlightsTitle: "Destaques e Conquistas de Engenharia",
      codeLink: "Código Privado / Enterprise",
      demoLink: "Acessar Plataforma",
    },
    projects: [
      {
        id: "ambev-digital-delivery",
        title: "Ambev Tech Digital Delivery Workflow",
        description: "Modernização completa de grande escala e digitalização ponta a ponta do fluxo de confirmação de entregas para motoristas nos centros de distribuição nacionais.",
        category: "backend",
        technologies: ["C#", ".NET Core", "Azure Service Bus", "Kubernetes", "Docker", "Rancher", "Android", "PostgreSQL"],
        company: "Ambev Tech",
        role: "Software Engineer II",
        highlights: [
          "Liderou os esforços de engenharia para extinguir fluxos baseados em papel, implementando rotinas de entrega em tempo real via soluções Android.",
          "Arquitetou integrações de alta confiabilidade mitigando falhas operacionais e melhorando expressivamente a rastreabilidade logística nacional.",
          "Contribuiu diretamente em iniciativas de modernização e automação que geraram uma economia equivalente a mais de US$ 40 milhões.",
        ],
        repoUrl: "",
      },
      {
        id: "hdn-lobbyist-intelligence",
        title: "Lobbyist Intelligence Dashboard",
        description: "Ferramenta analítica avançada desenvolvida para mapear, rastrear e gerenciar a atividade social e influência de representantes políticos de interesse corporativo.",
        category: "backend",
        technologies: ["C#", ".NET Core", "Microservices", "RabbitMQ", "MongoDB", "Azure", "Docker", "CI/CD"],
        company: "HDN Digital",
        role: "Senior Software Engineer",
        highlights: [
          "Construiu ferramentas de varredura e inteligência de dados integradas a redes sociais (como Twitter) para capturar o pulso público e engajamento político.",
          "Empoderou o time de relações públicas da Ambev fornecendo insights políticos acionáveis e recursos automatizados para agendamento e controle de reuniões.",
          "Gerenciou a entrega de software ponta a ponta, adaptando arquitetura técnica e integrações de microsserviços aos requisitos específicos do cliente.",
        ],
        repoUrl: "",
      },
      {
        id: "hdn-event-engagement",
        title: "Event Engagement Reward System",
        description: "Plataforma de fidelidade e pontuação gamificada criada para engajar equipes comerciais e monitorar a eficiência de vendas em eventos regionais.",
        category: "backend",
        technologies: ["C#", ".NET", "Microservices", "Azure Service Bus", "PostgreSQL", "Rancher", "CI/CD"],
        company: "HDN Digital",
        role: "Senior Software Engineer",
        highlights: [
          "Desenvolveu um motor de recompensas baseado em pontos associado a metas de faturamento, aumentando o engajamento operacional interno.",
          "Garantiu desacoplamento e estabilidade sob alto pico de acessos assíncronos implementando filas resilientes via Azure Service Bus.",
        ],
        repoUrl: "",
      },
      {
        id: "brew-and-battle",
        title: "Brew and Battle",
        description: "Jogo indie autoral de estratégia onde o jogador assume o papel de um alquimista lacaio de um chefão, e tem que produzir poções para auxilia-lo a derrotar os heróis invasores. Desenvolvido do zero utilizando Unity e C#, com foco em mecânicas e uma interface de usuário.",
        category: "gamedev",
        technologies: ["Unity", "C#", "Scriptable Objects", "Game Design"],
        role: "Indie Game Developer",
        imageUrl: brewImg,
        highlights: [
          "Feito em apenas 2 Semanas para uma GameJam",
          "Desenvolveu todas as mecanicas e sistema de poções.",
        ],
        liveUrl: "https://gabrielarcasa.itch.io/brew-and-battle",
      },
      {
        id: "gerador-aventura",
        title: "Gerador de Aventuras - T20",
        description: "Um gerador de aventuras baseado no Baralho de Aventuras do sistema Tormenta 20, criado para auxiliar mestres de RPG a criar narrativas e encontros de maneira rápida e dinâmica.",
        category: "frontend",
        technologies: ["React", "Tailwind CSS", "TypeScript","Vite"],
        role: "Full Stack Developer",
        imageUrl: baralhoImg,
        highlights: [
          "Narrativa Totalmente Aleatoria ou Personalizada a Escolha do Mestre",
          "MAIS DE 551 TRILHÕES de combinações possíveis de aventuras, encontros, NPCs e recompensas ( Sim eu Conferi , MUITAS vezes )",
          "Desenvolvimento de uma interface limpa e responsiva utilizando React e Tailwind CSS, garantindo acessibilidade e usabilidade em diversos dispositivos.",
        ],
        liveUrl: "https://gerador-aventura.vercel.app/",
      },
     {
        id: "financas-app",
        title: "FinApp Pro",
        description: "Aplicativo de uso exclusivo para controle financeiro pessoal, com funcionalidades de registro de despesas, receitas e visualização de gráficos de gastos.",
        category: "frontend",
        technologies: ["React", "Tailwind CSS", "TypeScript","Vite"],
        role: "Full Stack Developer",
        imageUrl: finAppImg ,
        highlights: [
          "Registro de transações financeiras com categorias personalizadas e filtros avançados para análise detalhada de gastos.",
          "Visualização de gráficos de gastos e relatórios financeiros para tomada de decisão informada.",
          "Desenvolvimento de uma interface intuitiva e responsiva utilizando React e Tailwind CSS, garantindo acessibilidade e usabilidade em diversos dispositivos.",
        ],
        liveUrl: "",
      },
      {
        id: "infinit-nfe-erp",
        title: "Módulo Fiscal NF-e & ERP de Larga Escala",
        description: "Implementação, evolução e refatoração de módulos essenciais de core financeiro, controle de estoque e faturamento para um sistema ERP de mercado.",
        category: "backend",
        technologies: ["C#", "MVC", "REST", "MySQL", "Jenkins"],
        company: "Infinit Soluções",
        role: "Mid Developer",
        highlights: [
          "Responsável pela arquitetura do gerador automatizado de Notas Fiscais Eletrônicas (NF-e), assegurando total compliance com as leis tributárias nacionais.",
          "Sustentou a estabilidade e inclusão de recursos operacionais diários críticos para mais de 200 clientes ativos de diversos segmentos comerciais.",
        ],
        repoUrl: "",
      },
    ],
  },
  en: {
    common: {
      brand: "GabrielArcasa",
      categoryLabels: {
        backend: "Backend",
        frontend: "Frontend",
        gamedev: "Game Dev",
      },
    },
    navigation: {
      home: "Home",
      frontend: "Frontend & Games",
      backend: "Backend Portfolio",
    },
    header: {
      themeToggleLabel: "Toggle theme",
      languageToggleLabel: "Toggle language",
      menuToggleLabel: "Toggle navigation menu",
    },
    footer: {
      madeWith: "Proudly built by",
      author: "Gabriel Arcasa de Mendonça",
    },
    home: {
      badge: "7+ Years of Experience",
      titlePrefix: ".NET Software Engineering &",
      titleHighlight: "Scalable Architectures",
      titleSuffix: "with a Game Dev Core",
      descriptionStart: "I am a Software Engineer at Ambev Tech, with strong experience designing microservices and enterprise APIs using",
      descriptionStrongBackend: ".NET, Azure, Docker, Kubernetes, and Asynchronous Messaging",
      descriptionMiddle: "Concurrently with backend architecture, I apply my true passion for digital game development by mastering",
      descriptionStrongGame: "Unity, Unreal Engine, and C# / C++ programming",
      descriptionEnd: "blending enterprise robustness with advanced interactive engineering practices.",
      backendCta: "View Backend Portfolio",
      frontendCta: "View Games & Frontend",
      educationSenac: "Bachelor of Computer Science",
      educationUniversity: "Postgraduate Degree in Digital Game Development",
      codeName: "Gabriel Arcasa",
      codeComment: "// Specialized in .NET backend, deeply passionate about game development",
      stackTitle: "Technology Stack & Core Skills",
      stackDescription: "A mapping of the key technologies, databases, and core patterns applied across high-scale software and interactive systems.",
      skills: [
        {
          category: "Backend & Core Architecture",
          icon: "backend",
          description: "Building highly concurrent, fault-tolerant enterprise ecosystems tailored to complex business requirements.",
          items: [
            { name: ".NET / C#", level: "Expert" },
            { name: "Microservices", level: "Advanced" },
            { name: "Clean Architecture / DDD / SOLID", level: "Advanced" },
            { name: "RESTful APIs", level: "Advanced" },
            { name: "Delphi", level: "Advanced" },
            { name: "C++", level: "Intermediate" },
          ],
        },
        {
          category: "Cloud, DevOps & Messaging",
          icon: "devops",
          description: "Managing modern cloud infrastructures, event-driven service buses, and fully automated deployment pipelines.",
          items: [
            { name: "Azure (Event Bus / Cloud Ecosystem)", level: "Advanced" },
            { name: "RabbitMQ / Azure Service Bus", level: "Advanced" },
            { name: "Kubernetes / Rancher", level: "Advanced" },
            { name: "Docker", level: "Advanced" },
            { name: "PostgreSQL / MySQL / SQL Server", level: "Advanced" },
            { name: "MongoDB / NoSQL", level: "Advanced" },
            { name: "CI/CD (Jenkins / Pipelines)", level: "Advanced" },
          ],
        },
        {
          category: "Game Dev & Frontend",
          icon: "frontend",
          description: "Designing interactive player experiences, responsive gameplay mechanics, and interactive user interfaces.",
          items: [
            { name: "Unity", level: "Advanced" },
            { name: "Unreal Engine", level: "Advanced" },
            { name: "Android SDK", level: "Intermediate" },
            { name: "React / TypeScript / JavaScript", level: "Intermediate" },
            { name: "Tailwind CSS", level: "Intermediate" },

          ],
        },
      ],
    },
    portfolio: {
      frontend: {
        eyebrow: "Interactivity & User Experience",
        title: "Frontend & Game Dev Portfolio",
        description: "A hub entirely focused on rich interfaces and game engineering. Combining computer graphics theory and game programming, this section highlights immersive experiences developed with industry-leading engines such as Unity (C#) and Unreal Engine (C++).",
        sectionTitle: "Game and Web Projects",
        emptyTitle: "No projects selected",
        emptyText: "Game and web applications are rendered down below.",
      },
      backend: {
        eyebrow: "Distributed Systems & Mission Critical",
        title: "Backend Portfolio",
        description: "A showcase of resilient architectures and backend pipelines. I specialize in developing high-throughput .NET microservices, enterprise messaging workflows, and major legacy system modernizations that drive massive operational values.",
        sectionTitle: "Enterprise Systems & APIs",
        emptyTitle: "No backend systems found",
        emptyText: "Browse through the main system ecosystems listed below.",
      },
    },
    projectCard: {
      highlightsTitle: "Engineering Achievements & Highlights",
      codeLink: "Private / Enterprise Repository",
      demoLink: "Open Application",
    },
    projects: [
      {
        id: "ambev-digital-delivery",
        title: "Ambev Tech Digital Delivery Workflow",
        description: "Full-scale legacy modernization and end-to-end digitization of the shipping and delivery confirmation workflow for drivers across national distribution centers.",
        category: "backend",
        technologies: ["C#", ".NET Core", "Azure Service Bus", "Kubernetes", "Docker", "Rancher", "Android", "PostgreSQL"],
        company: "Ambev Tech",
        role: "Software Engineer II",
        highlights: [
          "Led software engineering efforts to eliminate paper-based processes by developing real-time delivery confirmations via Android mobile tech.",
          "Designed highly traceable, decoupled distribution integration pipelines to improve warehouse security and dispatch speeds.",
          "Contributed directly to automation initiatives resulting in multi-million dollar operational cost savings (over $40M USD).",
        ],
        repoUrl: "",
      },
      {
        id: "hdn-lobbyist-intelligence",
        title: "Lobbyist Intelligence Dashboard",
        description: "Advanced analytics platform tailored to track, monitor, and manage the social media activities and public footprint of political representatives.",
        category: "backend",
        technologies: ["C#", ".NET Core", "Microservices", "RabbitMQ", "MongoDB", "Azure", "Docker", "CI/CD"],
        company: "HDN Digital",
        role: "Senior Software Engineer",
        highlights: [
          "Built data harvesting tools integrated with social platforms (e.g., Twitter) to trace public stance, narrative influence, and legislative activities.",
          "Empowered Ambev's public affairs team with high-value actionable political insights and an automated system for meeting workflows.",
          "Managed end-to-end software delivery, adapting underlying microservices architecture to strict corporate client criteria.",
        ],
        repoUrl: "",
      },
      {
        id: "hdn-event-engagement",
        title: "Event Engagement Reward System",
        description: "Gamified loyalty and points-based rewarding application designed to increase commercial sales force engagement during regional events.",
        category: "backend",
        technologies: ["C#", ".NET", "Microservices", "Azure Service Bus", "PostgreSQL", "Rancher", "CI/CD"],
        company: "HDN Digital",
        role: "Senior Software Engineer",
        highlights: [
          "Developed a scalable points calculation engine triggered by sales achievements, driving inner operational tracking.",
          "Maintained platform durability and performance during massive traffic surges by leveraging Azure Service Bus for messaging decoupled tiers.",
        ],
        repoUrl: "",
      },
      {
        id: "brew-and-battle",
        title: "Brew and Battle",
        description: "An original indie strategy game where the player takes on the role of an alchemist minion serving a dungeon boss, crafting potions to help them defeat invading heroes. Developed from scratch using Unity and C#, with a strong focus on core mechanics and user interface design.",
        category: "gamedev",
        technologies: ["Unity", "C#", "Scriptable Objects", "Game Design"],
        role: "Indie Game Developer",
        imageUrl: brewImg,
        highlights: [
          "Done in only 2 weeks for a gamejam",
          "Developed all mechanics and potion system.",
        ],
        liveUrl: "https://gabrielarcasa.itch.io/brew-and-battle",
      },
      {
        id: "gerador-aventura",
        title: "Adventure Generator - T20",
        description: "An adventure generator based on the Adventure Deck from the Tormenta 20 RPG system, built to help Game Masters instantly create dynamic narratives and encounters.",
        category: "frontend",
        technologies: ["React", "Tailwind CSS", "TypeScript", "Vite"],
        role: "Full Stack Developer",
        imageUrl: baralhoImg,
        highlights: [
          "Fully randomized or customized narrative pathways based entirely on the Game Master's choices.",
          "OVER 551 TRILLION possible combinations of adventures, encounters, NPCs, and rewards (yes, I checked the math, multiple times).",
          "Engineered a clean, highly responsive user interface with React and Tailwind CSS, ensuring seamless cross-device usability.",
        ],
        liveUrl: "https://gerador-aventura.vercel.app/",
      },
      {
        id: "financas-app",
        title: "FinApp Pro",
        description: "A private personal finance tracking application featuring custom expense logging, income streams, and dynamic data visualization charts.",
        category: "frontend",
        technologies: ["React", "Tailwind CSS", "TypeScript", "Vite"],
        role: "Full Stack Developer",
        imageUrl: finAppImg,
        highlights: [
          "Streamlined financial transaction tracking with customizable categories and advanced filtering for granular expense analysis.",
          "Integrated dynamic financial reporting and data charts to empower informed, data-driven budgeting decisions.",
          "Developed an intuitive, mobile-first interface utilizing React and Tailwind CSS to guarantee high accessibility.",
        ],
        liveUrl: "",
      },
      {
        id: "infinit-nfe-erp",
        title: "Electronic Invoicing (NF-e) & Enterprise ERP Core",
        description: "Implementation, scaling, and feature-expansion of core financial, logistics, and inventory management sub-modules within a broad ERP ecosystem.",
        category: "backend",
        technologies: ["C#", "MVC", "REST", "MySQL", "Jenkins"],
        company: "Infinit Soluções",
        role: "Mid Developer",
        highlights: [
          "Engineered the electronic invoice generation system (NF-e) pipeline, guaranteeing absolute alignment with strict Brazilian tax legislations.",
          "Sustained system uptime and added vital operational functions supporting daily workloads for 200+ multi-sector commercial clients.",
        ],
        repoUrl: "",
      },
    ],
  },
};