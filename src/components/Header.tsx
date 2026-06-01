// filepath: src/components/Header.tsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code2, Sun, Moon } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
    { name: "Início", path: "/" },
    { name: "Portfolio Frontend", path: "/frontend" },
    { name: "Portfolio Backend", path: "/backend" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80 transition-colors duration-350">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center gap-2 font-bold text-gray-900 dark:text-white">
          <Code2 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent text-lg tracking-tight font-extrabold">
            DevPortfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                isActive(item.path)
                  ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Theme Toggle Desktop */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white transition-all duration-200"
            aria-label="Alternar tema"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile Actions (Theme Toggle & Menu Button) */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsDark(!isDark)}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white transition-all duration-200"
            aria-label="Alternar tema"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <button
            onClick={toggleMenu}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-white"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-950 transition-colors duration-350">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-gray-50 hover:text-indigo-600 dark:hover:bg-gray-900 dark:hover:text-indigo-400 ${
                  isActive(item.path)
                    ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400 font-semibold"
                    : "text-gray-600 dark:text-gray-300"
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
