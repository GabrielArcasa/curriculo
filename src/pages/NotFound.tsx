// filepath: src/pages/NotFound.tsx
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/language-context";
import { usePageTitle } from "../hooks/usePageTitle";

export default function NotFound() {
  const { content } = useLanguage();
  const { notFound } = content;
  usePageTitle(notFound.pageTitle);

  return (
    <section className="not-found">
      <h1 className="not-found__title">{notFound.title}</h1>
      <p className="not-found__text">{notFound.text}</p>
      <Link to="/" className="not-found__link">
        <ArrowLeft className="not-found__link-icon" />
        <span>{notFound.cta}</span>
      </Link>
    </section>
  );
}
