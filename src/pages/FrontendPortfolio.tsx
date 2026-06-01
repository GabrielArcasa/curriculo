// filepath: src/pages/FrontendPortfolio.tsx
import ProjectCard from "../components/ProjectCard";
import { Monitor, Gamepad2, Sparkles } from "lucide-react";
import { useLanguage } from "../contexts/language-context";

export default function FrontendPortfolio() {
  const { content } = useLanguage();
  const projects = content.projects.filter((project) => project.category === "frontend" || project.category === "gamedev");
  const pageContent = content.portfolio.frontend;

  return (
    <div className="portfolio-page">
      {/* Page Header Banner */}
      <div className="portfolio-hero portfolio-hero--frontend">
        <div className="portfolio-hero__glow portfolio-hero__glow--frontend-primary" />
        <div className="portfolio-hero__glow portfolio-hero__glow--frontend-secondary" />

        <div className="portfolio-hero__content">
          <span className="portfolio-hero__eyebrow portfolio-hero__eyebrow--frontend">
            <Sparkles className="portfolio-hero__eyebrow-icon portfolio-hero__eyebrow-icon--pulse" />
            <span>{pageContent.eyebrow}</span>
          </span>
          
          <h1 className="portfolio-hero__title portfolio-hero__title--frontend">
            {pageContent.title}
          </h1>
          
          <p className="portfolio-hero__description portfolio-hero__description--frontend">
            {pageContent.description}
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div>
        <div className="portfolio-section__header">
          <h2 className="portfolio-section__title">
            <Monitor className="portfolio-section__title-icon" />
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
            <Gamepad2 className="portfolio-empty-state__icon" />
            <h3 className="portfolio-empty-state__title">{pageContent.emptyTitle}</h3>
            <p className="portfolio-empty-state__text">{pageContent.emptyText}</p>
          </div>
        )}
      </div>
    </div>
  );
}
