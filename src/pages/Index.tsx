import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import UniversitySection from '@/components/UniversitySection';
import JoinSection from '@/components/JoinSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <UniversitySection />
      <JoinSection />
      <Footer />
    </div>
  );
};

export default Index;
