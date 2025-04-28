import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: "Рекламные ролики",
    description: "Яркие и запоминающиеся видео для продвижения ваших продуктов и услуг",
    icon: "🎬"
  },
  {
    id: 2,
    title: "Корпоративное видео",
    description: "Презентации, обучающие видео и фильмы о компании для внутреннего и внешнего использования",
    icon: "🏢"
  },
  {
    id: 3,
    title: "Музыкальные клипы",
    description: "Художественное воплощение музыкальных композиций с уникальной концепцией",
    icon: "🎵"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-60"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-medium mb-4">
            Наши услуги
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Превращаем идеи в визуальные истории</h2>
          <p className="text-foreground/70">Полный спектр услуг видеопроизводства для реализации проектов любой сложности</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group bg-card hover:bg-primary/5 border border-border p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <div className="w-16 h-16 flex items-center justify-center text-4xl mb-6 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-foreground/70 mb-6">{service.description}</p>
              <Button variant="link" className="p-0 gap-2 text-primary group-hover:translate-x-1 transition-transform">
                Подробнее <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Предпродакшн", items: ["Сценарий", "Раскадровка", "Локации"] },
            { title: "Съемка", items: ["Операторская работа", "Освещение", "Звук"] },
            { title: "Постпродакшн", items: ["Монтаж", "Цветокоррекция", "Визуальные эффекты"] },
            { title: "Дополнительно", items: ["3D анимация", "Аэросъемка", "Голосовое озвучивание"] }
          ].map((category, index) => (
            <div key={index} className="p-6 bg-muted/20 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;