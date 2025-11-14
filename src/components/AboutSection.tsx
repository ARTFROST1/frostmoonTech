import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Users, Lightbulb, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">О нашей команде</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Кто мы и что нас <span className="text-gradient">вдохновляет</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы — студенты, которые не просто изучают технологии, а создаем с их помощью 
            продукты, которые решают реальные проблемы людей.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Наша история</h3>
            <p className="text-muted-foreground leading-relaxed">
              Все началось с простой идеи — объединить студентов, которые хотят не просто учиться, 
              а создавать. Мы поняли, что в университете есть множество талантливых людей, 
              которым не хватает только команды единомышленников.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Сегодня мы — это сообщество разработчиков, дизайнеров, тестировщиков и просто 
              креативных людей, которые вместе превращают идеи в реальные продукты.
            </p>
          </div>

          {/* Team Image */}
          <div className="relative">
            <img 
              src="./images/university_campus_collaboration_20251114_202320.png" 
              alt="Команда разработчиков" 
              className="rounded-2xl shadow-lg animate-float"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="interactive-card text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Страсть</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Мы делаем то, что любим, и любим то, что делаем
              </p>
            </CardContent>
          </Card>

          <Card className="interactive-card text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle className="text-lg">Команда</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Вместе мы сильнее и можем достичь большего
              </p>
            </CardContent>
          </Card>

          <Card className="interactive-card text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-lg">Инновации</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Мы ищем новые решения для старых проблем
              </p>
            </CardContent>
          </Card>

          <Card className="interactive-card text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Результат</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Мы создаем продукты, которые реально работают
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Готовы стать частью команды?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Неважно, на каком уровне вы сейчас — мы поможем вам расти и развиваться. 
              Главное — желание учиться и создавать что-то крутое!
            </p>
            <Button size="lg" className="tech-button">
              Присоединиться к нам
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;