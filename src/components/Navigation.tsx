import type React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code, Users, Rocket, GraduationCap, MessageCircle } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth-scroll to section by hash without breaking HashRouter (which also uses location.hash)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    const el = document.querySelector(hash) as HTMLElement | null;
    if (el) {
      // Account for fixed header (~64px) + small gap
      const headerOffset = 72;
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Главная', href: '#home', icon: Code },
    { name: 'О нас', href: '#about', icon: Users },
    { name: 'Проекты', href: '#projects', icon: Rocket },
    { name: 'Университет', href: '#university', icon: GraduationCap },
    { name: 'Присоединиться', href: '#join', icon: MessageCircle },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">АГУ • frostMoonTech</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="tech-button" asChild>
              <a href="https://t.me/MaykopTech" target="_blank" rel="noopener noreferrer">
                Telegram канал
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              ))}
              <Button className="tech-button w-full mt-4" asChild>
                <a href="https://t.me/MaykopTech" target="_blank" rel="noopener noreferrer">
                  Telegram канал
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;