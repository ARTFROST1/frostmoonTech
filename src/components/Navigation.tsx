import type React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    const el = document.querySelector(hash) as HTMLElement | null;
    if (el) {
      const headerOffset = 72;
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'О нас', href: '#about' },
    { name: 'Проекты', href: '#projects' },
    { name: 'Университет', href: '#university' },
    { name: 'Команда', href: '#join' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - minimal */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-lg font-semibold tracking-tight hover:opacity-70 transition-opacity"
          >
            frostMoon<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation - clean without icons */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button - minimal pill style */}
          <div className="hidden md:block">
            <Button size="sm" className="rounded-full px-5 h-9 text-sm" asChild>
              <a href="https://t.me/MaykopTech" target="_blank" rel="noopener noreferrer">
                Telegram
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - cleaner */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="mt-4 rounded-full" asChild>
                <a href="https://t.me/MaykopTech" target="_blank" rel="noopener noreferrer">
                  Telegram
                  <ArrowUpRight className="w-4 h-4 ml-2" />
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