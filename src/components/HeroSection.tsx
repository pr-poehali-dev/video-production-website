import { useState, useEffect, useRef } from "react";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroContent = document.getElementById('hero-content');
      const parallaxElements = document.querySelectorAll('.parallax');
      
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrollY * 0.2}px)`;
        heroContent.style.opacity = `${1 - (scrollY * 0.002)}`;
      }
      
      parallaxElements.forEach((el, index) => {
        const element = el as HTMLElement;
        const speed = index % 2 === 0 ? 0.1 : -0.1;
        element.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video 
          ref={videoRef}
          className="absolute w-full h-full object-cover"
          loop 
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1616469829935-c2f33ebd89b8?q=80&w=2070&auto=format&fit=crop"
        >
          <source src="https://example.com/your-video.mp4" type="video/mp4" />
          {/* Fallback background image is already set as poster */}
        </video>
      </div>
      
      {/* Floating shapes for visual interest */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax absolute top-[20%] left-[10%] w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
        <div className="parallax absolute bottom-[10%] right-[15%] w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-20"></div>
        <div className="parallax absolute top-[40%] right-[10%] w-40 h-40 bg-accent/20 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      {/* Grid overlay for visual texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-10"></div>
      
      {/* Content */}
      <div id="hero-content" className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <div className="relative mb-6 inline-block">
            <span className="animate-pulse absolute -inset-1 rounded-full bg-primary/40 blur-sm"></span>
            <span className="relative inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-medium">
              Видеопродакшн полного цикла
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Создаем <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">цифровые</span> истории
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl animate-fade-in" style={{animationDelay: "0.2s"}}>
            От концепции до финальной версии — премиальное видеопроизводство для брендов, которые хотят выделяться
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Button size="lg" className="px-6 gap-2 relative overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/80 to-primary transition-all duration-300 group-hover:opacity-0"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-violet-500 opacity-0 transition-all duration-300 group-hover:opacity-100"></span>
              <span className="relative z-10">Обсудить проект</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-6 gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all"
              onClick={handlePlayVideo}
            >
              {isVideoPlaying ? 'Пауза' : 'Смотреть шоурил'} <Play className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Stats with animated counting */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl animate-fade-in" style={{animationDelay: "0.6s"}}>
            <div className="text-center relative">
              <div className="absolute -inset-2 rounded-lg bg-primary/5 blur-sm -z-10"></div>
              <div className="text-3xl font-bold text-primary mb-2 counter" data-target="12">12+</div>
              <p className="text-sm text-foreground/70">лет опыта</p>
            </div>
            <div className="text-center relative">
              <div className="absolute -inset-2 rounded-lg bg-primary/5 blur-sm -z-10"></div>
              <div className="text-3xl font-bold text-primary mb-2 counter" data-target="180">180+</div>
              <p className="text-sm text-foreground/70">проектов</p>
            </div>
            <div className="text-center relative">
              <div className="absolute -inset-2 rounded-lg bg-primary/5 blur-sm -z-10"></div>
              <div className="text-3xl font-bold text-primary mb-2 counter" data-target="35">35+</div>
              <p className="text-sm text-foreground/70">наград</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in" style={{animationDelay: "1s"}}>
        <div className="w-8 h-12 border-2 border-foreground/30 rounded-full flex justify-center relative">
          <div className="w-1.5 h-3 bg-primary rounded-full absolute top-2 animate-bounce"></div>
        </div>
        <p className="text-center text-xs mt-2 text-foreground/50">Прокрутите вниз</p>
      </div>
    </div>
  );
};

export default HeroSection;