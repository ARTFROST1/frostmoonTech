import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Palette, Map, Star, ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - left aligned */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium tracking-[0.15em] uppercase text-muted-foreground mb-4">
            Проекты
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Что мы <span className="text-gradient">создали</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Два мобильных приложения, которые демонстрируют 
            наш подход к разработке.
          </p>
        </div>

        <Tabs defaultValue="obrazz" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-16 mx-0 bg-muted/50 p-1 h-12">
            <TabsTrigger value="obrazz" className="text-sm py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm">
              <Palette className="w-4 h-4 mr-2" />
              Obrazz
            </TabsTrigger>
            <TabsTrigger value="adygyes" className="text-sm py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm">
              <Map className="w-4 h-4 mr-2" />
              adygGIS
            </TabsTrigger>
          </TabsList>

          {/* Obrazz Project */}
          <TabsContent value="obrazz" className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Fashion Tech</Badge>
                    <Badge variant="secondary" className="text-xs">AI-Powered</Badge>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Obrazz — Умный гардероб</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Мобильное приложение для создания стильных образов с помощью ИИ. 
                    Управляйте гардеробом и получайте персональные рекомендации.
                  </p>
                </div>

                <ul className="space-y-3">
                  {[
                    "AI-подборка образов на основе стиля",
                    "Управление гардеробом с автоудалением фона",
                    "Drag & drop редактор для коллажей",
                    "Социальное сообщество"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {["React Native", "Expo", "Supabase", "TypeScript"].map((tech) => (
                    <Badge key={tech} variant="outline" className="font-normal text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" className="rounded-full" asChild>
                    <a href="https://github.com/ARTFROST1/obrazz" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Код
                      <ArrowUpRight className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-[3rem] blur-2xl" />
                  <div className="relative flex gap-4">
                    <img 
                      src="./images/obrazz_app_screens_1.jpeg"
                      alt="Obrazz экран 1"
                      className="w-[180px] h-[360px] md:w-[220px] md:h-[440px] object-cover rounded-[2rem] shadow-lg"
                    />
                    <img 
                      src="./images/obrazz_app_screens_2.jpeg"
                      alt="Obrazz экран 2"
                      className="w-[180px] h-[360px] md:w-[220px] md:h-[440px] object-cover rounded-[2rem] shadow-lg mt-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Adygyes Project */}
          <TabsContent value="adygyes" className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Tourism</Badge>
                    <Badge variant="secondary" className="text-xs">Maps</Badge>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">adygGIS — Туристический гид</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Интерактивная карта достопримечательностей Республики Адыгея 
                    с оффлайн-режимом и умной системой кэширования.
                  </p>
                </div>

                <ul className="space-y-3">
                  {[
                    "Интерактивная карта на базе Yandex Maps",
                    "Оффлайн-режим с предзагрузкой контента",
                    "Умное кэширование изображений",
                    "Построение маршрутов и избранное"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {["Kotlin", "Jetpack Compose", "Yandex Maps", "Room"].map((tech) => (
                    <Badge key={tech} variant="outline" className="font-normal text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" className="rounded-full" asChild>
                    <a href="https://github.com/ARTFROST1/AdygGIS" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Код
                      <ArrowUpRight className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-8 bg-gradient-to-br from-accent/5 to-primary/5 rounded-[3rem] blur-2xl" />
                  <div className="relative flex gap-4">
                    <img 
                      src="./images/adygyes_map_screens_1.png"
                      alt="adygGIS экран 1"
                      className="w-[180px] h-[360px] md:w-[220px] md:h-[440px] object-cover rounded-[2rem] shadow-lg"
                    />
                    <img 
                      src="./images/adygyes_map_screens_2.jpeg"
                      alt="adygGIS экран 2"
                      className="w-[180px] h-[360px] md:w-[220px] md:h-[440px] object-cover rounded-[2rem] shadow-lg mt-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;