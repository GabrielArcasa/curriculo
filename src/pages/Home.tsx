// filepath: src/pages/Home.tsx
import { ArrowRight, Gamepad2, Database, Award, GraduationCap, Server, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/language-context";
import type { SkillGroup } from "../data/content";

export default function Home() {
  const { content } = useLanguage();
  const { home } = content;

  const getSkillIcon = (skillGroup: SkillGroup) => {
    switch (skillGroup.icon) {
      case "frontend":
        return <Gamepad2 className="skill-card__icon skill-card__icon--frontend" />;
      case "devops":
        return <Database className="skill-card__icon skill-card__icon--devops" />;
      default:
        return <Server className="skill-card__icon skill-card__icon--backend" />;
    }
  };

  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero__content">
          <div className="home-hero__badge">
            <Award className="home-hero__badge-icon" />
            <span>{home.badge}</span>
          </div>

          <h1 className="home-hero__title">
            {home.titlePrefix}{" "}
            <span className="home-hero__title-highlight">
              {home.titleHighlight}
            </span>{" "}
            {home.titleSuffix}
          </h1>

          <div className="home-hero__description-wrapper">
            <p className="home-hero__description">
              {home.descriptionP1}
            </p>            
            <p className="home-hero__description">
              {home.descriptionP2Start} <span className="home-hero__description-strong">{home.descriptionStrongBackend}</span>{home.descriptionP2End}
            </p>

            <p className="home-hero__description">
              {home.descriptionP3Start} <span className="home-hero__description-strong">{home.descriptionStrongGame}</span>.
            </p>
          </div>

          <div className="home-hero__actions">
            <Link
              to="/backend"
              className="home-hero__primary-link"
            >
              <span>{home.backendCta}</span>
              <ArrowRight className="home-hero__primary-link-icon" />
            </Link>
            
            <Link
              to="/frontend"
              className="home-hero__secondary-link"
            >
              <span>{home.frontendCta}</span>
            </Link>
          </div>

          <div className="home-hero__education">
            <span className="home-hero__education-item">
              <GraduationCap className="home-hero__education-icon" />
              {home.educationSenac}
            </span>
            <span className="home-hero__education-separator" />
            <span className="home-hero__education-item">
              <GraduationCap className="home-hero__education-icon" />
              {home.educationUniversity}
            </span>
            <span className="home-hero__education-separator" />
            <span className="home-hero__education-item">
              <GraduationCap className="home-hero__education-icon" />
              {home.educationPosIA}
            </span>
          </div>
        </div>

        <div className="home-visual">
          <div className="home-visual__glow home-visual__glow--primary" />
          <div className="home-visual__glow home-visual__glow--secondary" />

          <div className="code-window">
            <div className="code-window__header">
              <div className="code-window__traffic-lights">
                <span className="code-window__traffic-light code-window__traffic-light--red" />
                <span className="code-window__traffic-light code-window__traffic-light--yellow" />
                <span className="code-window__traffic-light code-window__traffic-light--green" />
              </div>
              <span className="code-window__filename">
                <Terminal className="code-window__filename-icon" /> developer.cs
              </span>
              <div className="code-window__spacer" />
            </div>

            <div className="code-window__body">
              <p className="code-line--indigo"><span className="code-token--purple">using</span> System;</p>
              <p className="code-line--indigo"><span className="code-token--purple">using</span> AmbevTech.Logistic.Core;</p>
              <br />
              <p><span className="code-token--blue">public class</span> <span className="code-token--emerald">Developer</span></p>
              <p>{"{"}</p>
              <p className="code-line--indent-1"><span className="code-token--blue">public string</span> Name {"=>"} <span className="code-token--amber">"{home.codeName}"</span>;</p>
              <p className="code-line--indent-1"><span className="code-token--blue">public int</span> ExperienceYears {"=>"} <span className="code-token--rose">9</span>;</p>
              <p className="code-line--indent-1"><span className="code-token--blue">public string[]</span> PrimaryStack {"=>"} <span className="code-token--blue">new</span>[] {"{"}</p>
              <p className="code-line--indent-2 code-token--cyan">".NET Core", "Azure", "Kubernetes","Cloud", "EF Core", "SQL" , "C++", "UE5", "Unity"</p>
              <p className="code-line--indent-1">{"};"}</p>
              <br />
              <p className="code-line--indent-1 code-token--comment">{home.codeComment}</p>
              <p className="code-line--indent-1"><span className="code-token--blue">public void</span> <span className="code-token--violet">CreateWorld</span>()</p>
              <p className="code-line--indent-1">{"{"}</p>
              <p className="code-line--indent-2">var game = <span className="code-token--blue">new</span> <span className="code-token--emerald">UnrealEngine5</span>();</p>
              <p className="code-line--indent-2">game.CompileCombatSystem(language: <span className="code-token--amber">"C++"</span>);</p>
              <p className="code-line--indent-1">{"}"}</p>
              <p>{"}"}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-stack">
        <div className="tech-stack__intro">
          <h2 className="tech-stack__title">
            {home.stackTitle}
          </h2>
          <p className="tech-stack__description">
            {home.stackDescription}
          </p>
        </div>

        <div className="tech-stack__grid">
          {home.skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="skill-card"
            >
              <div className="skill-card__header">
                <div className="skill-card__icon-frame">
                  {getSkillIcon(skillGroup)}
                </div>
                <h3 className="skill-card__title">
                  {skillGroup.category}
                </h3>
              </div>

              <p className="skill-card__description">
                {skillGroup.description}
              </p>

              <div className="skill-card__items">
                {skillGroup.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="skill-card__item">
                    <span className="skill-card__item-name">
                      {item.name}
                    </span>
                    <span className="skill-card__item-level">
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
