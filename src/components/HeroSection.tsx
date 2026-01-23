import type React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code2 } from 'lucide-react';

const HeroSection = () => {
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-secondary/[0.02]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-12">
          {/* Main heading - более минималистичный */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Студенческая IT-команда АГУ
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
              Создаем
              <br />
              <span className="text-gradient">будущее</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
              Превращаем идеи в реальные продукты.
              Присоединяйтесь к команде единомышленников.
            </p>
          </div>

          {/* Two QR Codes side by side */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 animate-slide-up" style={{ animationDelay: '0.15s' }}>
            {/* QR Code - MaykopTech Channel */}
            <a
              href="https://t.me/MaykopTech"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="/images/qr-maykoptech.png"
                  alt="QR-код Telegram @MaykopTech"
                  className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-2xl group-hover:scale-[1.02] transition-all duration-300"
                  loading="eager"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
            </a>

            {/* Divider */}
            <div className="hidden sm:block w-px h-48 bg-gradient-to-b from-transparent via-border to-transparent" />
            <div className="block sm:hidden h-px w-32 bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* QR Code - ArtFrost Personal */}
            <a
              href="https://t.me/ArtFrost"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="/images/qr-artfrost.jpeg"
                  alt="QR-код Telegram @ArtFrost"
                  className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-2xl group-hover:scale-[1.02] transition-all duration-300"
                  loading="eager"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
            </a>
          </div>

          {/* CTA Buttons - minimal style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="tech-button text-base px-8 h-14 rounded-full" asChild>
              <a href="https://t.me/MaykopTech" target="_blank" rel="noopener noreferrer">
                Присоединиться
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="ghost" className="text-base px-8 h-14 rounded-full hover:bg-muted/50" asChild>
              <a href="#projects" onClick={(e) => handleAnchorClick(e, '#projects')}>
                <Code2 className="w-4 h-4 mr-2" />
                Наши проекты
              </a>
            </Button>
          </div>

          {/* Minimal stats */}
          <div className="flex items-center justify-center gap-12 md:gap-20 pt-8 animate-slide-up" style={{ animationDelay: '0.45s' }}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">10+</p>
              <p className="text-sm text-muted-foreground mt-1">Проекта</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">∞</p>
              <p className="text-sm text-muted-foreground mt-1">Возможностей</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Энтузиазма</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;