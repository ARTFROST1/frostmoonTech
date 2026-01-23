import type React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    const el = document.querySelector(hash) as HTMLElement | null;
    if (el) {
      const headerOffset = 72;
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-lg font-semibold tracking-tight">
              frostMoon<span className="text-primary">.</span>
            </p>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Студенческая команда разработчиков АГУ,
              создающая инновационные решения.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="text-sm font-medium">Навигация</p>
            <div className="space-y-3">
              <a href="#about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={(e) => handleAnchorClick(e, '#about')}>
                О нас
              </a>
              <a href="#projects" className="block text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={(e) => handleAnchorClick(e, '#projects')}>
                Проекты
              </a>
              <a href="#university" className="block text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={(e) => handleAnchorClick(e, '#university')}>
                Университет
              </a>
              <a href="#join" className="block text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={(e) => handleAnchorClick(e, '#join')}>
                Команда
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <p className="text-sm font-medium">Связь</p>
            <div className="space-y-3">
              <a 
                href="https://t.me/MaykopTech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Telegram
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a 
                href="https://github.com/ARTFROST1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a 
                href="mailto:hello@frostmoon.tech"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                hello@frostmoon.tech
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} frostMoonTech. Адыгейский государственный университет
          </p>
          <p className="text-sm text-muted-foreground">
            Майкоп, Россия
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;