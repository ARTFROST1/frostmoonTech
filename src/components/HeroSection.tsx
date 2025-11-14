import type React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Sparkles, Users, Code2 } from 'lucide-react';

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
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Main heading */}
          <div className="space-y-4 animate-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Создаем будущее
              <br />
              <span className="text-gradient">вместе с вами</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Мы — команда студентов-разработчиков, которая превращает идеи в реальные продукты. 
              Присоединяйтесь к нашему сообществу единомышленников!
            </p>
          </div>

          {/* Big QR Code */}
          <div className="mt-10 flex justify-center animate-slide-up" style={{ animationDelay: '0.15s' }}>
            <a
              href="https://t.me/MaykopTech"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <img
                src="/images/qr-maykoptech.png"
                alt="QR-код Telegram @MaykopTech"
                className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] group-hover:scale-[1.02] transition-transform"
                loading="eager"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button size="lg" className="tech-button text-lg px-8 py-6" asChild>
              <a href="https://t.me/MaykopTech" target="_blank" rel="noopener noreferrer">
                <Users className="w-5 h-5 mr-2" />
                Присоединиться к команде
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <a href="#projects" onClick={(e) => handleAnchorClick(e, '#projects')}>
                <Code2 className="w-5 h-5 mr-2" />
                Посмотреть проекты
              </a>
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-slide-up">
            <Card className="interactive-card card-gradient border-0">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">2</h3>
                <p className="text-muted-foreground">Готовых проекта</p>
              </CardContent>
            </Card>

            <Card className="interactive-card card-gradient border-0">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">∞</h3>
                <p className="text-muted-foreground">Возможностей для роста</p>
              </CardContent>
            </Card>

            <Card className="interactive-card card-gradient border-0">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-2">100%</h3>
                <p className="text-muted-foreground">Страсти к разработке</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;