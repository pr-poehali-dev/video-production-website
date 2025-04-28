import { useState } from "react";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Рекламный ролик для Nike",
    category: "Реклама",
    thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    video: "https://example.com/video1.mp4"
  },
  {
    id: 2,
    title: "Корпоративное видео для Apple",
    category: "Корпоративное видео",
    thumbnail: "https://images.unsplash.com/photo-1569770218135-bea267ed7e84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    video: "https://example.com/video2.mp4"
  },
  {
    id: 3,
    title: "Музыкальный клип для Sony Music",
    category: "Клип",
    thumbnail: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    video: "https://example.com/video3.mp4"
  }
];

const categories = ["Все", "Реклама", "Корпоративное видео", "Клип"];

const VideoShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const filteredProjects = activeCategory === "Все" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-24 bg-background relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-card to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-medium mb-4">
              Наше портфолио
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Последние проекты</h2>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-6 md:mt-0">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-card hover:bg-card/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative rounded-xl overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-between p-6">
                <div className="self-end">
                  <span className="inline-block py-1 px-2 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                    {project.category}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  
                  <button 
                    onClick={() => setActiveVideo(project.id)}
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    <Play className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Video modal */}
        {activeVideo && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setActiveVideo(null)}>
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden">
              <button 
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveVideo(null);
                }}
              >
                <X className="w-5 h-5" />
              </button>
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-xl">Здесь будет воспроизводиться видео #{activeVideo}</p>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="gap-2">
            Смотреть все проекты <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

// Adding missing import
import { X } from "lucide-react";

export default VideoShowcase;