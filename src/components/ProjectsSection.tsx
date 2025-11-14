import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Smartphone, Map, Palette, Users, Star, ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Наши проекты</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Что мы уже <span className="text-gradient">создали</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Два реальных мобильных приложения, которые показывают наш подход к разработке 
            и способность решать сложные задачи.
          </p>
        </div>

        <Tabs defaultValue="obrazz" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="obrazz" className="text-lg py-3">
              <Palette className="w-5 h-5 mr-2" />
              Obrazz
            </TabsTrigger>
            <TabsTrigger value="adygyes" className="text-lg py-3">
              <Map className="w-5 h-5 mr-2" />
              adygGIS
            </TabsTrigger>
          </TabsList>

          {/* Obrazz Project */}
          <TabsContent value="obrazz" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-primary/10 text-primary">Fashion Tech</Badge>
                    <Badge className="bg-secondary/10 text-secondary">AI-Powered</Badge>
                  </div>
                  <h3 className="text-3xl font-bold">Obrazz — Умный гардероб</h3>
                  <p className="text-lg text-muted-foreground">
                    Мобильное приложение для создания стильных образов с помощью ИИ. 
                    Управляйте своим гардеробом и получайте персональные рекомендации.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">Ключевые возможности:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>AI-подборка образов на основе стиля и сезона</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Управление личным гардеробом с автоудалением фона</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Drag & drop редактор для создания коллажей</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Социальное сообщество для обмена образами</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">Технологический стек:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React Native</Badge>
                    <Badge variant="outline">Expo</Badge>
                    <Badge variant="outline">Supabase</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">AI/ML</Badge>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button className="tech-button">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Демо
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://github.com/ARTFROST1/obrazz" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Код
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="flex justify-center gap-6">
                  <div className="relative w-[280px] h-[560px]">
                    <div className="absolute inset-0 flex items-center justify-center rounded-[72px] overflow-hidden">
                      <img 
                        src="./images/obrazz_app_screens_1.jpeg"
                        alt="Obrazz экран 1"
                        className="w-full h-full object-contain rounded-[72px]"
                      />
                    </div>
                    <img 
                      src="/mobile-phone.png" 
                      alt="Phone mockup frame" 
                      className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none select-none"
                    />
                  </div>
                  <div className="relative w-[280px] h-[560px]">
                    <div className="absolute inset-0 flex items-center justify-center rounded-[72px] overflow-hidden">
                      <img 
                        src="./images/obrazz_app_screens_2.jpeg"
                        alt="Obrazz экран 2"
                        className="w-full h-full object-contain rounded-[72px]"
                      />
                    </div>
                    <img 
                      src="/mobile-phone.png" 
                      alt="Phone mockup frame" 
                      className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none select-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Details */}
            <Card className="card-gradient border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Smartphone className="w-6 h-6 text-primary" />
                  <span>Техническая реализация</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2">Архитектура</h5>
                    <p className="text-sm text-muted-foreground">
                      Кроссплатформенное приложение с микросервисной архитектурой, 
                      локальным хранением изображений и облачной синхронизацией метаданных.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">AI Integration</h5>
                    <p className="text-sm text-muted-foreground">
                      Интеграция с внешними AI-сервисами для анализа стиля, цвета и 
                      автоматической генерации модных сочетаний.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">UX/UI</h5>
                    <p className="text-sm text-muted-foreground">
                      Минималистичный дизайн в стиле Pinterest с интуитивными 
                      жестами и плавными анимациями.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Adygyes Project */}
          <TabsContent value="adygyes" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-accent/10 text-accent">Tourism</Badge>
                    <Badge className="bg-primary/10 text-primary">Maps</Badge>
                  </div>
                  <h3 className="text-3xl font-bold">adygGIS — Туристический гид</h3>
                  <p className="text-lg text-muted-foreground">
                    Интерактивная карта достопримечательностей Республики Адыгея с 
                    оффлайн-режимом и умной системой кэширования.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">Ключевые возможности:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <Star className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Интерактивная карта на базе Yandex Maps API</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Star className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Оффлайн-режим с предзагрузкой контента</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Star className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Умная система кэширования изображений</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Star className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Построение маршрутов и избранное</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">Технологический стек:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Kotlin</Badge>
                    <Badge variant="outline">Jetpack Compose</Badge>
                    <Badge variant="outline">Yandex Maps SDK (Android)</Badge>
                    <Badge variant="outline">Room (SQLite)</Badge>
                    <Badge variant="outline">Coroutines / Flow</Badge>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button className="tech-button">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Демо
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://github.com/ARTFROST1/AdygGIS" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Код
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="flex justify-center gap-6">
                  <div className="relative w-[280px] h-[560px]">
                    <div className="absolute inset-0 flex items-center justify-center rounded-[72px] overflow-hidden">
                      <img 
                        src="./images/adygyes_map_screens_1.png"
                        alt="adygGIS экран 1"
                        className="w-full h-full object-contain rounded-[72px]"
                      />
                    </div>
                    <img 
                      src="/mobile-phone.png" 
                      alt="Phone mockup frame" 
                      className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none select-none"
                    />
                  </div>
                  <div className="relative w-[280px] h-[560px]">
                    <div className="absolute inset-0 flex items-center justify-center rounded-[72px] overflow-hidden">
                      <img 
                        src="./images/adygyes_map_screens_2.jpeg"
                        alt="adygGIS экран 2"
                        className="w-full h-full object-contain rounded-[72px]"
                      />
                    </div>
                    <img 
                      src="/mobile-phone.png" 
                      alt="Phone mockup frame" 
                      className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none select-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Details */}
            <Card className="card-gradient border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Map className="w-6 h-6 text-accent" />
                  <span>Техническая реализация</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2">Производительность</h5>
                    <p className="text-sm text-muted-foreground">
                      Оптимизированная загрузка карт с кластеризацией меток и 
                      ленивой загрузкой изображений для экономии трафика.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Оффлайн-режим</h5>
                    <p className="text-sm text-muted-foreground">
                      Полнофункциональная работа без интернета с предзагруженными 
                      картами и данными о достопримечательностях.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Масштабируемость</h5>
                    <p className="text-sm text-muted-foreground">
                      Архитектура готова для расширения на другие регионы России 
                      с подключением CMS для управления контентом.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;