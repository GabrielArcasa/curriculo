// filepath: src/pages/Home.tsx
import { ArrowRight, Gamepad2, Database, Award, GraduationCap, Server, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const skills = [
    {
      category: "Backend & Core Architecture",
      icon: <Server className="h-6 w-6 text-indigo-650 dark:text-indigo-400" />,
      description: "Construção de ecossistemas corporativos resilientes, escaláveis e sob demanda.",
      items: [
        { name: ".NET Core / C#", level: "Sênior" },
        { name: "Azure Service Bus", level: "Avançado" },
        { name: "Entity Framework Core", level: "Sênior" },
        { name: "APIs RESTful / gRPC", level: "Sênior" },
        { name: "RabbitMQ / Mensageria", level: "Avançado" },
        { name: "Arquitetura Limpa / DDD", level: "Avançado" }
      ]
    },
    {
      category: "Frontend & Game Engines",
      icon: <Gamepad2 className="h-6 w-6 text-rose-600 dark:text-rose-450" />,
      description: "Criação de experiências interativas, do desenvolvimento web a jogos 3D complexos.",
      items: [
        { name: "Unity (C#)", level: "Avançado" },
        { name: "Unreal Engine 5 (C++)", level: "Avançado" },
        { name: "React / TypeScript", level: "Avançado" },
        { name: "Tailwind CSS / UI Design", level: "Avançado" },
        { name: "Niagara VFX & Shaders", level: "Intermediário" },
        { name: "Unity UI Toolkit / Canvas", level: "Avançado" }
      ]
    },
    {
      category: "DevOps & Database",
      icon: <Database className="h-6 w-6 text-emerald-600 dark:text-emerald-450" />,
      description: "Garantia de persistência de dados veloz, conteinerização e pipelines de entrega contínua.",
      items: [
        { name: "SQL Server (Otimização)", level: "Sênior" },
        { name: "Redis (Cache distribuído)", level: "Avançado" },
        { name: "PostgreSQL", level: "Sênior" },
        { name: "Docker", level: "Avançado" },
        { name: "Azure DevOps / CI-CD", level: "Intermediário" },
        { name: "Monitoramento / APM", level: "Avançado" }
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-20 py-8 md:py-16">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Copy and CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-55 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400">
            <Award className="h-4 w-4" />
            <span>9+ Anos de Experiência</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white leading-tight">
            Arquitetando Soluções de{" "}
            <span className="bg-gradient-to-r from-indigo-650 to-violet-650 dark:from-indigo-400 dark:to-violet-400 bg-clip-text">
              Alta Escala
            </span>{" "}
            & Criando Jogos
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-650 dark:text-gray-300 leading-relaxed max-w-2xl">
            Sou <strong>Desenvolvedor .NET Sênior na Ambev Tech</strong>, focado em alta concorrência e escalabilidade com <span className="text-gray-900 dark:text-white font-medium">Azure Service Bus, SQL Server e Entity Framework</span>. 
            Em paralelo, mergulho na criação de jogos independentes 3D/2D utilizando <span className="text-gray-900 dark:text-white font-medium">Unity (C#) e Unreal Engine 5 (C++)</span>, com embasamento acadêmico e técnico pelo SENAC e Universidade São Judas Tadeu.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <Link
              to="/backend"
              className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-3.5 text-base font-bold text-white hover:from-indigo-500 hover:to-indigo-600 shadow-md hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98] transition-all duration-200"
            >
              <span>Ver Portfolio Backend</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/frontend"
              className="inline-flex items-center justify-center rounded-xl border border-gray-250 bg-white px-6 py-3.5 text-base font-bold text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300 dark:hover:bg-gray-900 active:scale-[0.98] transition-all duration-200"
            >
              <span>Ver Frontend & Jogos</span>
            </Link>
          </div>

          {/* Quick Academic Info */}
          <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4 text-indigo-500" />
              Estudos no SENAC
            </span>
            <span className="h-4 w-px bg-gray-300 dark:bg-gray-700 hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4 text-indigo-500" />
              Universidade São Judas Tadeu
            </span>
          </div>
        </div>

        {/* Right Side: Visual Artwork (100% Tailwind) */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
          {/* Background glowing blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-indigo-500/10 dark:bg-indigo-400/5 blur-3xl" />
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-pink-500/10 dark:bg-pink-400/5 blur-3xl" />

          {/* Interactive IDE / Screen Frame */}
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-md shadow-xl dark:border-gray-800 dark:bg-gray-950/70 transition-all duration-300 hover:shadow-2xl">
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50/80 px-4 py-3 dark:border-gray-850 dark:bg-gray-900/80">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs font-semibold text-gray-550 dark:text-gray-450 flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5 text-indigo-550" /> developer.cs
              </span>
              <div className="w-8" />
            </div>

            {/* Code Body */}
            <div className="p-5 font-mono text-xs md:text-sm leading-relaxed text-gray-700 dark:text-gray-300 overflow-x-auto">
              <p className="text-indigo-600 dark:text-indigo-400"><span className="text-purple-600 dark:text-purple-400">using</span> System;</p>
              <p className="text-indigo-600 dark:text-indigo-400"><span className="text-purple-600 dark:text-purple-400">using</span> AmbevTech.Logistic.Core;</p>
              <br />
              <p><span className="text-blue-600 dark:text-blue-450">public class</span> <span className="text-emerald-650 dark:text-emerald-400 font-semibold">SeniorDeveloper</span></p>
              <p>{"{"}</p>
              <p className="pl-4"><span className="text-blue-600 dark:text-blue-450">public string</span> Name {"=>"} <span className="text-amber-600 dark:text-amber-500">"Ambev Tech Engineer"</span>;</p>
              <p className="pl-4"><span className="text-blue-600 dark:text-blue-450">public int</span> ExperienceYears {"=>"} <span className="text-rose-500 font-bold">9</span>;</p>
              <p className="pl-4"><span className="text-blue-600 dark:text-blue-450">public string[]</span> PrimaryStack {"=>"} <span className="text-blue-500">new</span>[] {"{"}</p>
              <p className="pl-8 text-cyan-600 dark:text-cyan-400">".NET 8", "Azure Service Bus", "EF Core", "SQL"</p>
              <p className="pl-4">{"};"}</p>
              <br />
              <p className="pl-4 text-emerald-600 dark:text-emerald-500">// Paralelo: Game Dev na Unity & Unreal Engine</p>
              <p className="pl-4"><span className="text-blue-600 dark:text-blue-450">public void</span> <span className="text-violet-600 dark:text-violet-400 font-semibold">CreateWorld</span>()</p>
              <p className="pl-4">{"{"}</p>
              <p className="pl-8">var game = <span className="text-blue-500">new</span> <span className="text-emerald-650 dark:text-emerald-400">UnrealEngine5</span>();</p>
              <p className="pl-8">game.CompileCombatSystem(language: <span className="text-amber-650 dark:text-amber-500">"C++"</span>);</p>
              <p className="pl-4">{"}"}</p>
              <p>{"}"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tech Stack Grid */}
      <section className="flex flex-col gap-8">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Stack Tecnológica & Habilidades
          </h2>
          <p className="text-sm sm:text-base text-gray-650 dark:text-gray-400 leading-relaxed">
            Organização das principais ferramentas e linguagens utilizadas no meu dia a dia de engenharia de software e game design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md dark:border-gray-800 dark:bg-gray-950 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800">
                  {skillGroup.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {skillGroup.category}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-550 dark:text-gray-400 leading-normal mb-5">
                {skillGroup.description}
              </p>

              {/* Skills Items */}
              <div className="space-y-3 mt-auto">
                {skillGroup.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.name}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-600 dark:bg-gray-900 dark:text-gray-400 ring-1 ring-inset ring-gray-500/10">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
