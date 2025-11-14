import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MessageCircle, 
  Code, 
  Palette, 
  TestTube, 
  Lightbulb,
  Users,
  Send,
  ExternalLink
} from 'lucide-react';

const JoinSection = () => {
  const roles = [
    {
      icon: Code,
      title: "Разработчики",
      description: "Frontend, Backend, Mobile, DevOps — любой стек технологий",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Palette,
      title: "Дизайнеры",
      description: "UI/UX, графический дизайн, брендинг и визуальная айдентика",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: TestTube,
      title: "Тестировщики",
      description: "QA, автоматизация тестирования, обеспечение качества",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Lightbulb,
      title: "Идейные вдохновители",
      description: "Продакт-менеджеры, аналитики, генераторы идей",
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  return (
    <section id="join" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Присоединяйтесь</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Мы ждем <span className="text-gradient">именно вас</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Неважно, на каком уровне вы сейчас — мы поможем вам расти. 
            Нам нужны идеи, руки, мнения и свежий взгляд на вещи.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {roles.map((role, index) => (
            <Card key={index} className="interactive-card text-center">
              <CardHeader>
                <div className={`w-16 h-16 ${role.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <role.icon className={`w-8 h-8 ${role.color}`} />
                </div>
                <CardTitle className="text-lg">{role.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {role.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What We Offer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Что мы предлагаем</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold">Реальный опыт разработки</h4>
                  <p className="text-sm text-muted-foreground">
                    Работа над настоящими проектами, которые используют реальные пользователи
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold">Менторство и обучение</h4>
                  <p className="text-sm text-muted-foreground">
                    Опытные участники команды помогут освоить новые технологии
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold">Портфолио и связи</h4>
                  <p className="text-sm text-muted-foreground">
                    Создание впечатляющего портфолио и полезных профессиональных связей
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold">Гибкий график</h4>
                  <p className="text-sm text-muted-foreground">
                    Работаем в удобное время, совмещая с учебой и другими делами
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="./images/university_teamwork_2.webp" 
              alt="Командная работа" 
              className="rounded-2xl shadow-lg w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Telegram CTA */}
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-0">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Присоединяйтесь к нашему Telegram</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Самый быстрый способ стать частью команды — присоединиться к нашему 
              Telegram-каналу, где мы делимся результатами проектов, обсуждаем идеи 
              и ищем новых участников.
            </p>
            <div className="space-y-3">
              <p className="text-sm font-medium">В канале вы найдете:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Результаты наших проектов и разработок</li>
                <li>• Анонсы новых инициатив и возможностей</li>
                <li>• Обсуждения технологий и трендов</li>
                <li>• Поиск участников для новых проектов</li>
              </ul>
            </div>
            <Button size="lg" className="tech-button w-full" asChild>
              <a href="https://t.me/MaykopTech" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Перейти в Telegram
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <div className="flex items-center justify-center mt-4">
              <a href="https://t.me/MaykopTech" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/qr-maykoptech.png"
                  alt="QR-код Telegram @MaykopTech"
                  className="w-24 h-24"
                  loading="lazy"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
              </a>
            </div>
          </CardContent>
        </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Send className="w-6 h-6 text-primary" />
                <span>Напишите нам</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Ваше имя</label>
                <Input placeholder="Как к вам обращаться?" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email или Telegram</label>
                <Input placeholder="Как с вами связаться?" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Ваши навыки и интересы</label>
                <Textarea 
                  placeholder="Расскажите о себе: какие технологии знаете, чем интересуетесь, какой опыт имеете..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full tech-button" asChild>
                <a href="mailto:hello@frostmoon.tech">
                  <Send className="w-4 h-4 mr-2" />
                  Отправить сообщение
                </a>
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Мы обязательно ответим в течение 24 часов
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Мы рады принять вас в команду!</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Каждый найдет свое место в нашей команде. Мы поможем реализовать ваши амбиции 
              и потенциал, расскажем, поможем и поддержим на каждом шаге.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="tech-button" asChild>
                <a href="https://t.me/MaykopTech" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Telegram канал
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:hello@frostmoon.tech">
                  <Send className="w-5 h-5 mr-2" />
                  Написать нам
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;