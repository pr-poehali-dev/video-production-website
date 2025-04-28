
import { useState } from "react";
import { Play, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    title: "Рекламный ролик Nike",
    category: "Реклама",
    thumbnail: "https://images.unsplash.com/photo-1512412046876-f386342eddb3?q=80&w=1936&auto=format&fit=crop",
    videoUrl: "#"
  },
  {
    title: "Презентация Tesla Model S",
    category: "Корпоративное видео",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
    videoUrl: "#"
  },
  {
    title: "Музыкальный клип Imagine",
    category: "Музыкальный клип",
    thumbnail: "https://images.unsplash.com/photo-1522870389523-7e83c0065eaf?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "#"
  }
];

const VideoShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % portfolioItems.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши работы</h2>
            <p className="text-foreground/70 max-w-xl">
              Посмотрите примеры наших проектов и убедитесь в качестве нашей работы
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex gap-3">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              className="rounded-full"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              className="rounded-full"
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="relative overflow-hidden rounded-xl">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 ease-in-out ${
                index === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute inset-0"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isHovered ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <div className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-medium mb-4">
                    {item.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
                  <Button 
                    variant="outline" 
                    className="w-fit gap-2 backdrop-blur-sm bg-background/30 hover:bg-background/50"
                  >
                    <Play className="w-4 h-4" /> Смотреть видео
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Button variant="outline" className="gap-2">
            Все проекты <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Portfolio stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "150+", label: "Видеопроектов" },
            { value: "12", label: "Корпоративных клиентов" },
            { value: "36", label: "Рекламных роликов" },
            { value: "8", label: "Музыкальных клипов" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
