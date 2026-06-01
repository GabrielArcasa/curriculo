// filepath: src/components/Header.tsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code2, Sun, Moon } from "lucide-react";
import { useLanguage } from "../contexts/language-context";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { content, language, toggleLanguage } = useLanguage();

  // Initialize theme from localStorage or system preference
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      return saved === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Apply theme class on mount and when isDark changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const navItems = [
    { name: content.navigation.home, path: "/" },
    { name: content.navigation.frontend, path: "/frontend" },
    { name: content.navigation.backend, path: "/backend" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="site-header">
      <div className="site-header__container">
        {/* Logo / Brand */}
        <Link to="/" className="site-header__brand">
          <Code2 className="site-header__brand-icon" />
          <span className="site-header__brand-text">
            {content.common.brand}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="site-header__nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`site-header__nav-link ${
                isActive(item.path)
                  ? "site-header__nav-link--active"
                  : "site-header__nav-link--inactive"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Theme Toggle Desktop */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="site-header__theme-button"
            aria-label={content.header.themeToggleLabel}
          >
            {isDark ? <Sun className="site-header__theme-icon" /> : <Moon className="site-header__theme-icon" />}
          </button>

          <button
            onClick={toggleLanguage}
            className="site-header__language-button"
            aria-label={content.header.languageToggleLabel}
          >
            {language === "pt" ? "EN" : "PT"}
          </button>
        </nav>

        {/* Mobile Actions (Theme Toggle & Menu Button) */}
        <div className="site-header__mobile-actions">
          <button
            onClick={toggleLanguage}
            className="site-header__language-button"
            aria-label={content.header.languageToggleLabel}
          >
            {language === "pt" ? "EN" : "PT"}
          </button>

          <button
            onClick={() => setIsDark(!isDark)}
            className="site-header__theme-button"
            aria-label={content.header.themeToggleLabel}
          >
            {isDark ? <Sun className="site-header__theme-icon" /> : <Moon className="site-header__theme-icon" />}
          </button>
          
          <button
            onClick={toggleMenu}
            className="site-header__menu-button"
            aria-expanded={isOpen}
            aria-label={content.header.menuToggleLabel}
          >
            {isOpen ? <X className="site-header__menu-icon" /> : <Menu className="site-header__menu-icon" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="site-header__mobile-panel">
          <nav className="site-header__mobile-nav">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`site-header__mobile-link ${
                  isActive(item.path)
                    ? "site-header__mobile-link--active"
                    : "site-header__mobile-link--inactive"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
