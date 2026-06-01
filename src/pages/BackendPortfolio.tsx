// filepath: src/pages/BackendPortfolio.tsx
import ProjectCard from "../components/ProjectCard";
import { Server, Cpu, Database } from "lucide-react";
import { useLanguage } from "../contexts/language-context";

export default function BackendPortfolio() {
  const { content } = useLanguage();
  const projects = content.projects.filter((project) => project.category === "backend");
  const pageContent = content.portfolio.backend;

  return (
    <div className="portfolio-page">
      {/* Page Header Banner */}
      <div className="portfolio-hero portfolio-hero--backend">
        {/* Decorative Grid Pattern */}
        <div className="portfolio-hero__grid-pattern" />
        <div className="portfolio-hero__glow portfolio-hero__glow--backend" />
        
        <div className="portfolio-hero__content">
          <span className="portfolio-hero__eyebrow portfolio-hero__eyebrow--backend">
            <Cpu className="portfolio-hero__eyebrow-icon" />
            <span>{pageContent.eyebrow}</span>
          </span>
          
          <h1 className="portfolio-hero__title portfolio-hero__title--backend">
            {pageContent.title}
          </h1>
          
          <p className="portfolio-hero__description portfolio-hero__description--backend">
            {pageContent.description}
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div>
        <div className="portfolio-section__header">
          <h2 className="portfolio-section__title">
            <Server className="portfolio-section__title-icon" />
            <span>{pageContent.sectionTitle} ({projects.length})</span>
          </h2>
        </div>

        {projects.length > 0 ? (
          <div className="portfolio-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="portfolio-empty-state">
            <Database className="portfolio-empty-state__icon" />
            <h3 className="portfolio-empty-state__title">{pageContent.emptyTitle}</h3>
            <p className="portfolio-empty-state__text">{pageContent.emptyText}</p>
          </div>
        )}
      </div>
    </div>
  );
}
