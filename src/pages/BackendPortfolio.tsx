// filepath: src/pages/BackendPortfolio.tsx
import { getBackendProjects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { Server, Cpu, Database } from "lucide-react";

export default function BackendPortfolio() {
  const projects = getBackendProjects();

  return (
    <div className="flex flex-col gap-10 py-6 md:py-10">
      {/* Page Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 md:p-12 border border-slate-800 dark:border-indigo-950/40 text-white">
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
        
        <div className="relative max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300 ring-1 ring-inset ring-indigo-400/20">
            <Cpu className="h-3 w-3" />
            <span>Infraestrutura & Alta Escala</span>
          </span>
          
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
            Portfolio Backend
          </h1>
          
          <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-300">
            Arquitetura de sistemas distribuídos resilientes, APIs de alta concorrência e integrações complexas. Especialidade no ecossistema .NET Core / C# em cenários enterprise na Ambev Tech, com forte aplicação de mensageria assíncrona, bancos relacionais e NoSQL, e computação em nuvem (Azure).
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Server className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <span>Sistemas e APIs ({projects.length})</span>
          </h2>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 py-12 text-center dark:border-gray-800">
            <Database className="h-12 w-12 text-gray-400" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">Nenhum projeto encontrado</h3>
            <p className="mt-2 text-sm text-gray-500">Projetos de backend serão adicionados em breve.</p>
          </div>
        )}
      </div>
    </div>
  );
}
