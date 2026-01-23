import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Trophy, 
  Users, 
  Lightbulb, 
  Building, 
  Award,
  Rocket,
  ArrowUpRight
} from 'lucide-react';

const UniversitySection = () => {
  const advantages = [
    {
      icon: Building,
      title: "Партнеры",
      description: "IT-компании и стартапы"
    },
    {
      icon: Trophy,
      title: "Хакатоны",
      description: "Конкурсы и соревнования"
    },
    {
      icon: Users,
      title: "Сообщество",
      description: "IT-клубы и проекты"
    },
    {
      icon: Lightbulb,
      title: "Инициативы",
      description: "Поддержка стартапов"
    },
    {
      icon: Award,
      title: "Оборудование",
      description: "Современные лаборатории"
    },
    {
      icon: Rocket,
      title: "Карьера",
      description: "Стажировки и работа"
    }
  ];

  return (
    <section id="university" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium tracking-[0.15em] uppercase text-muted-foreground mb-4">
            Университет
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Почему <span className="text-gradient">АГУ</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Экосистема для развития, творчества и реализации идей.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-20 rounded-2xl overflow-hidden">
          <img 
            src="./images/university_teamwork_1.jpeg" 
            alt="Студенты за работой" 
            className="w-full h-80 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Место для идей
            </h3>
            <p className="text-white/80 text-sm max-w-md">
              Современные пространства для учебы и коллаборации
            </p>
          </div>
        </div>

        {/* Advantages Grid - compact */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-muted/30 border-0 hover:bg-muted/50 transition-colors">
              <CardContent className="p-5 text-center">
                <advantage.icon className="w-5 h-5 mx-auto mb-3 text-foreground/70" />
                <h4 className="font-medium text-sm mb-1">{advantage.title}</h4>
                <p className="text-xs text-muted-foreground">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats - minimal */}
        <div className="flex flex-wrap justify-center gap-16 mb-20">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold">50+</p>
            <p className="text-sm text-muted-foreground mt-2">Проектов в год</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold">200+</p>
            <p className="text-sm text-muted-foreground mt-2">Студентов IT</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold">90%</p>
            <p className="text-sm text-muted-foreground mt-2">Трудоустройство</p>
          </div>
        </div>

        {/* CTA - simple */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="rounded-full" asChild>
              <a href="https://www.adygnet.ru/" target="_blank" rel="noopener noreferrer">
                Узнать о поступлении
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full" asChild>
              <a href="https://t.me/MaykopTech" target="_blank" rel="noopener noreferrer">
                Присоединиться
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversitySection;