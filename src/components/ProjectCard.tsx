// filepath: src/components/ProjectCard.tsx
import type { Project } from "../data/projects";
import { ExternalLink, Server, Gamepad2, Code2 } from "lucide-react";
import { useLanguage } from "../contexts/language-context";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { content } = useLanguage();
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
        return <Server className="project-card__category-icon" />;
      case "gamedev":
        return <Gamepad2 className="project-card__category-icon" />;
      default:
        return <Code2 className="project-card__category-icon" />;
    }
  };

  // Determine fallback card header gradient
  const getGradientClass = (cat: string) => {
    switch (cat) {
      case "backend":
        return "project-card__fallback--backend";
      case "gamedev":
        return "project-card__fallback--gamedev";
      default:
        return "project-card__fallback--frontend";
    }
  };

  // Styles tag colors individually for a cohesive visual balance
  const getTechTagStyle = (tech: string) => {
    const t = tech.toLowerCase();
    if (t.includes("c#") || t.includes(".net")) {
      return "project-card__tech-tag--violet";
    }
    if (t.includes("azure") || t.includes("cloud") || t.includes("service bus") || t.includes("event grid")) {
      return "project-card__tech-tag--sky";
    }
    if (t.includes("sql") || t.includes("redis") || t.includes("rabbitmq") || t.includes("entity framework")) {
      return "project-card__tech-tag--emerald";
    }
    if (t.includes("unity") || t.includes("unreal") || t.includes("c++") || t.includes("vfx") || t.includes("pathfinding")) {
      return "project-card__tech-tag--rose";
    }
    return "project-card__tech-tag--slate";
  };

  return (
    <article className="project-card">
      {/* Visual Cap Header */}
      <div className="project-card__media">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            className="project-card__image"
          />
        ) : (
          <div className={`project-card__fallback ${getGradientClass(category)}`}>
            {/* Ambient pattern */}
            <div className="project-card__ambient-pattern" />
            <div className="project-card__fallback-icon-frame">
              {getCategoryIcon(category)}
            </div>
            <span className="project-card__initials">
              {getInitials(title)}
            </span>
          </div>
        )}
        
        {/* Category Badge overlay */}
        <span className="project-card__category-badge">
          {content.common.categoryLabels[category]}
        </span>
      </div>

      {/* Card Contents */}
      <div className="project-card__content">
        {/* Company & Role Meta Info */}
        {(company || role) && (
          <div className="project-card__meta">
            {company && <span>{company}</span>}
            {company && role && <span className="project-card__meta-separator" />}
            {role && <span>{role}</span>}
          </div>
        )}

        {/* Title */}
        <h3 className="project-card__title">
          {title}
        </h3>

        {/* Description */}
        <p className="project-card__description">
          {description}
        </p>

        {/* Technology Badges */}
        <div className="project-card__tech-list">
          {technologies.map((tech) => (
            <span
              key={tech}
              className={`project-card__tech-tag ${getTechTagStyle(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights List */}
        {highlights && highlights.length > 0 && (
          <div className="project-card__highlights">
            <span className="project-card__highlights-title">
              {content.projectCard.highlightsTitle}
            </span>
            <ul className="project-card__highlight-list">
              {highlights.map((highlight, index) => (
                <li key={index} className="project-card__highlight-item">
                  <span className="project-card__highlight-bullet" />
                  <span className="project-card__highlight-text">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Call to Actions buttons */}
        <div className={`project-card__actions ${repoUrl && liveUrl ? "project-card__actions--double" : "project-card__actions--single"}`}>
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__action-link project-card__action-link--code"
            >
              <svg viewBox="0 0 24 24" className="project-card__action-icon" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span>{content.projectCard.codeLink}</span>
            </a>
          )}
          
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__action-link project-card__action-link--demo"
            >
              <ExternalLink className="project-card__action-icon" />
              <span>{content.projectCard.demoLink}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
