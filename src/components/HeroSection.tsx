import { useState, useEffect } from "react";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const backgrounds = [
  "https://images.unsplash.com/photo-1616469829935-c2f33ebd89b8?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626373549920-0476207add5b?q=80&w=2070&auto=format&fit=crop"
];

const HeroSection = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg(prev => (prev + 1) % backgrounds.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background image slider */}
      <div className="absolute inset-0 z-0">
        {backgrounds.map((bg, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentBg ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <img 
              src={bg} 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Overlay with noise texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-medium mb-6 fade-in">
            Видео, которое запоминается
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight fade-in" style={{animationDelay: "0.2s"}}>
            Создаем <span className="text-primary">визуальные истории</span> для вашего бренда
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl fade-in" style={{animationDelay: "0.4s"}}>
            От идеи до финального кадра — профессиональный видеопродакшен полного цикла для компаний и креативных проектов.
          </p>
          
          <div className="flex flex-wrap gap-4 fade-in" style={{animationDelay: "0.6s"}}>
            <Button size="lg" className="px-6 gap-2">
              Обсудить проект <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-6 gap-2">
              Смотреть шоурил <Play className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl fade-in" style={{animationDelay: "0.8s"}}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <p className="text-sm text-foreground/70">лет опыта</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <p className="text-sm text-foreground/70">проектов</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <p className="text-sm text-foreground/70">наград</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 fade-in" style={{animationDelay: "1s"}}>
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-foreground/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
