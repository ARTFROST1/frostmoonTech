import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  Trophy, 
  Users, 
  Lightbulb, 
  Building, 
  Award,
  Rocket,
  Heart
} from 'lucide-react';

const UniversitySection = () => {
  const advantages = [
    {
      icon: Building,
      title: "Сильные партнеры",
      description: "Сотрудничество с ведущими IT-компаниями и стартапами региона",
      color: "text-primary"
    },
    {
      icon: Trophy,
      title: "Соревнования и хакатоны",
      description: "Регулярные конкурсы программирования и инновационные хакатоны",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Активное сообщество",
      description: "Студенческие клубы, IT-кружки и проектные команды",
      color: "text-accent"
    },
    {
      icon: Lightbulb,
      title: "Поддержка инициатив",
      description: "Университет поддерживает студенческие проекты и стартапы",
      color: "text-primary"
    },
    {
      icon: Award,
      title: "Современное оборудование",
      description: "Лаборатории с новейшим оборудованием и программным обеспечением",
      color: "text-secondary"
    },
    {
      icon: Rocket,
      title: "Карьерные возможности",
      description: "Стажировки в крупных компаниях и помощь в трудоустройстве",
      color: "text-accent"
    }
  ];

  const events = [
    {
      title: "IT-хакатон 2024",
      description: "48 часов непрерывной разработки инновационных решений",
      date: "Декабрь 2024"
    },
    {
      title: "Неделя программирования",
      description: "Мастер-классы от ведущих разработчиков индустрии",
      date: "Январь 2025"
    },
    {
      title: "Startup Weekend",
      description: "Создание стартапа за выходные с менторской поддержкой",
      date: "Февраль 2025"
    }
  ];

  return (
    <section id="university" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Наш университет</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Почему стоит учиться <span className="text-gradient">с нами</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Университет — это не просто место учебы, это экосистема для развития, 
            творчества и реализации самых смелых идей.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16">
          <img 
            src="./images/university_teamwork_1.jpeg" 
            alt="Студенты за работой" 
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex items-end">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Место, где рождаются идеи
              </h3>
              <p className="text-white/90">
                Современные аудитории, лаборатории и пространства для коллаборации
              </p>
            </div>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map((advantage, index) => (
            <Card key={index} className="interactive-card card-gradient border-0">
              <CardHeader>
                <div className={`w-12 h-12 bg-current/10 rounded-full flex items-center justify-center mb-4 ${advantage.color}`}>
                  <advantage.icon className={`w-6 h-6 ${advantage.color}`} />
                </div>
                <CardTitle className="text-lg">{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">IT-проектов в год</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">200+</div>
            <div className="text-muted-foreground">Студентов в IT-сообществе</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">15+</div>
            <div className="text-muted-foreground">Партнерских компаний</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">90%</div>
            <div className="text-muted-foreground">Трудоустройство выпускников</div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Ближайшие мероприятия</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card key={index} className="interactive-card">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <Badge variant="outline">{event.date}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Testimonial */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-0">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <blockquote className="text-xl font-medium mb-4">
              "В университете я нашел не просто знания, а настоящую команду единомышленников. 
              Здесь поддерживают любые инициативы и помогают воплощать самые смелые идеи в жизнь."
            </blockquote>
            <cite className="text-muted-foreground">
              — Студент 3 курса, основатель IT-стартапа
            </cite>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Готовы стать частью нашего сообщества?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Присоединяйтесь к нам и откройте для себя мир возможностей в IT. 
            Мы поможем вам развить навыки и найти свое место в индустрии.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="tech-button" asChild>
              <a href="https://www.adygnet.ru/" target="_blank" rel="noopener noreferrer">
                <GraduationCap className="w-5 h-5 mr-2" />
                Узнать о поступлении
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://t.me/MaykopTech" target="_blank" rel="noopener noreferrer">
                <Users className="w-5 h-5 mr-2" />
                Присоединиться к сообществу
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversitySection;