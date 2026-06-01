// filepath: src/components/ProjectCard.tsx
import type { Project } from "../data/projects";
import { ExternalLink, Server, Gamepad2, Code2 } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    description,
    category,
    technologies,
    repoUrl,
    liveUrl,
    company,
    role,
    highlights,
    imageUrl,
  } = project;

  // Extract initials for the fallback visual header
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .filter((w) => w.length > 2 && !["and", "the", "for", "via", "de", "da", "do", "com", "em"].includes(w.toLowerCase()))
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || name.substring(0, 2).toUpperCase();
  };

  // Select category icon
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "backend":
        return <Server className="h-8 w-8 text-white/90" />;
      case "gamedev":
        return <Gamepad2 className="h-8 w-8 text-white/90" />;
      default:
        return <Code2 className="h-8 w-8 text-white/90" />;
    }
  };

  // Determine fallback card header gradient
  const getGradientClass = (cat: string) => {
    switch (cat) {
      case "backend":
        return "bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 dark:from-slate-950 dark:via-indigo-900/60 dark:to-zinc-950";
      case "gamedev":
        return "bg-gradient-to-br from-violet-600 via-fuchsia-700 to-rose-600 dark:from-violet-950 dark:via-fuchsia-950/70 dark:to-rose-950";
      default:
        return "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500";
    }
  };

  // Styles tag colors individually for a cohesive visual balance
  const getTechTagStyle = (tech: string) => {
    const t = tech.toLowerCase();
    if (t.includes("c#") || t.includes(".net")) {
      return "bg-violet-50 text-violet-750 ring-violet-700/10 dark:bg-violet-950/30 dark:text-violet-355 dark:ring-violet-400/20";
    }
    if (t.includes("azure") || t.includes("cloud") || t.includes("service bus") || t.includes("event grid")) {
      return "bg-sky-50 text-sky-750 ring-sky-700/10 dark:bg-sky-950/30 dark:text-sky-350 dark:ring-sky-400/20";
    }
    if (t.includes("sql") || t.includes("redis") || t.includes("rabbitmq") || t.includes("entity framework")) {
      return "bg-emerald-50 text-emerald-755 ring-emerald-700/10 dark:bg-emerald-950/30 dark:text-emerald-350 dark:ring-emerald-400/20";
    }
    if (t.includes("unity") || t.includes("unreal") || t.includes("c++") || t.includes("vfx") || t.includes("pathfinding")) {
      return "bg-rose-50 text-rose-750 ring-rose-700/10 dark:bg-rose-950/30 dark:text-rose-350 dark:ring-rose-400/20";
    }
    return "bg-slate-50 text-slate-700 ring-slate-700/10 dark:bg-slate-800/40 dark:text-slate-350 dark:ring-slate-400/20";
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:hover:shadow-indigo-950/20 transition-all duration-300 ease-out h-full">
      {/* Visual Cap Header */}
      <div className="relative h-48 w-full overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className={`flex h-full w-full flex-col items-center justify-center p-6 text-center ${getGradientClass(category)} transition-colors duration-300`}>
            {/* Ambient pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_70%)]" />
            <div className="relative mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md shadow-inner ring-1 ring-white/20">
              {getCategoryIcon(category)}
            </div>
            <span className="relative text-2xl font-black tracking-widest text-white/40 select-none">
              {getInitials(title)}
            </span>
          </div>
        )}
        
        {/* Category Badge overlay */}
        <span className="absolute right-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md ring-1 ring-white/10 select-none">
          {category === "backend" ? "Backend" : category === "gamedev" ? "Game Dev" : "Frontend"}
        </span>
      </div>

      {/* Card Contents */}
      <div className="flex flex-1 flex-col p-6">
        {/* Company & Role Meta Info */}
        {(company || role) && (
          <div className="mb-2 flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-indigo-650 dark:text-indigo-400 uppercase">
            {company && <span>{company}</span>}
            {company && role && <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-700" />}
            {role && <span>{role}</span>}
          </div>
        )}

        {/* Title */}
        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {description}
        </p>

        {/* Technology Badges */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${getTechTagStyle(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights List */}
        {highlights && highlights.length > 0 && (
          <div className="mb-6 mt-auto">
            <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              Destaques e Conquistas
            </span>
            <ul className="space-y-1.5 text-xs text-gray-655 dark:text-gray-350">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                  <span className="leading-normal">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Call to Actions buttons */}
        <div className={`grid gap-3 mt-auto ${repoUrl && liveUrl ? "grid-cols-2" : "grid-cols-1"}`}>
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-indigo-400 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span>Código</span>
            </a>
          )}
          
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-650 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500 shadow-sm hover:shadow transition-all duration-200"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Demonstração</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
