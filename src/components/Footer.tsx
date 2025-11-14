import type React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Code, 
  MessageCircle, 
  Mail, 
  Github, 
  ExternalLink,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Smooth-scroll to section with fixed header offset (same logic as in Navigation)
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
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">АГУ • frostMoonTech</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Студенческая команда разработчиков АГУ (Адыгейский государственный университет),
              создающая инновационные решения и помогающая другим реализовать свой потенциал.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold">Навигация</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-sm text-muted-foreground hover:text-primary transition-colors" onClick={(e) => handleAnchorClick(e, '#home')}>
                Главная
              </a>
              <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors" onClick={(e) => handleAnchorClick(e, '#about')}>
                О нас
              </a>
              <a href="#projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors" onClick={(e) => handleAnchorClick(e, '#projects')}>
                Проекты
              </a>
              <a href="#university" className="block text-sm text-muted-foreground hover:text-primary transition-colors" onClick={(e) => handleAnchorClick(e, '#university')}>
                Университет
              </a>
              <a href="#join" className="block text-sm text-muted-foreground hover:text-primary transition-colors" onClick={(e) => handleAnchorClick(e, '#join')}>
                Присоединиться
              </a>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h4 className="font-semibold">Наши проекты</h4>
            <div className="space-y-2">
              <a href="#projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors" onClick={(e) => handleAnchorClick(e, '#projects')}>
                Obrazz — Умный гардероб
              </a>
              <a href="#projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors" onClick={(e) => handleAnchorClick(e, '#projects')}>
                adygGIS — Туристический гид
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Связь с нами</h4>
            <div className="space-y-3">
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <a href="https://t.me/MaykopTech" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Telegram канал
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <a href="mailto:hello@frostmoon.tech" aria-label="Email">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <a href="https://github.com/ARTFROST1" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {currentYear} АГУ • frostMoonTech. Создано с <Heart className="w-4 h-4 inline text-red-500" /> студентами для студентов.
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Сделано на React + TypeScript</span>
            <span>•</span>
            <span>Дизайн: Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;