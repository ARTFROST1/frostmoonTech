import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Code, 
  Palette, 
  TestTube, 
  Lightbulb,
  Send,
  ArrowUpRight
} from 'lucide-react';

const JoinSection = () => {
  const roles = [
    {
      icon: Code,
      title: "Разработчики",
      description: "Frontend, Backend, Mobile"
    },
    {
      icon: Palette,
      title: "Дизайнеры",
      description: "UI/UX, графика, брендинг"
    },
    {
      icon: TestTube,
      title: "Тестировщики",
      description: "QA, автоматизация"
    },
    {
      icon: Lightbulb,
      title: "Идеи",
      description: "Продакты, аналитики"
    }
  ];

  return (
    <section id="join" className="section-padding bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium tracking-[0.15em] uppercase text-muted-foreground mb-4">
            Команда
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Мы ждем <span className="text-gradient">вас</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Неважно, на каком уровне вы сейчас — мы поможем вам расти.
          </p>
        </div>

        {/* Roles - minimal cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {roles.map((role, index) => (
            <Card key={index} className="bg-background border hover:border-foreground/20 transition-colors">
              <CardContent className="p-6 text-center">
                <role.icon className="w-6 h-6 mx-auto mb-3 text-foreground/70" />
                <h4 className="font-medium text-sm mb-1">{role.title}</h4>
                <p className="text-xs text-muted-foreground">
                  {role.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Two columns: QR codes + Contact form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Telegram CTA with QR codes */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Telegram</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Присоединяйтесь к каналу — там мы делимся результатами, 
                обсуждаем идеи и ищем новых участников.
              </p>
            </div>

            {/* Two QR codes */}
            <div className="flex flex-wrap gap-8">
              <a
                href="https://t.me/MaykopTech"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3"
              >
                <div className="relative">
                  <div className="absolute -inset-2 bg-primary/5 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src="/images/qr-maykoptech.png"
                    alt="QR-код @MaykopTech"
                    className="relative w-28 h-28 rounded-xl group-hover:scale-[1.02] transition-transform"
                    loading="lazy"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
              </a>

              <a
                href="https://t.me/ArtFrost"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3"
              >
                <div className="relative">
                  <div className="absolute -inset-2 bg-secondary/5 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src="/images/qr-artfrost.jpeg"
                    alt="QR-код @ArtFrost"
                    className="relative w-28 h-28 rounded-xl group-hover:scale-[1.02] transition-transform"
                    loading="lazy"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
              </a>
            </div>

            <Button className="rounded-full" asChild>
              <a href="https://t.me/MaykopTech" target="_blank" rel="noopener noreferrer">
                Открыть Telegram
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          {/* Contact Form - minimal */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Написать нам</h3>
              <p className="text-muted-foreground text-sm">
                Расскажите о себе, и мы свяжемся с вами.
              </p>
            </div>
            
            <div className="space-y-4">
              <Input 
                placeholder="Ваше имя" 
                className="h-12 bg-background border-border/50 focus:border-foreground/20"
              />
              <Input 
                placeholder="Email или Telegram" 
                className="h-12 bg-background border-border/50 focus:border-foreground/20"
              />
              <Textarea 
                placeholder="Расскажите о себе: навыки, интересы, опыт..."
                rows={4}
                className="bg-background border-border/50 focus:border-foreground/20 resize-none"
              />
              <Button className="w-full h-12 rounded-full" asChild>
                <a href="mailto:hello@frostmoon.tech">
                  <Send className="w-4 h-4 mr-2" />
                  Отправить
                </a>
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground text-center">
              Ответим в течение 24 часов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
