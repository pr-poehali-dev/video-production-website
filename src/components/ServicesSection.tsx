
import { Film, Monitor, Video, Camera, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Film className="w-10 h-10 text-primary" />,
    title: "Рекламные ролики",
    description: "Креативные видеоролики для продвижения вашего бренда и продуктов на всех платформах"
  },
  {
    icon: <Monitor className="w-10 h-10 text-primary" />,
    title: "Корпоративное видео",
    description: "Презентационные и имиджевые фильмы, которые расскажут о вашей компании"
  },
  {
    icon: <Video className="w-10 h-10 text-primary" />,
    title: "Музыкальные клипы",
    description: "Качественные клипы с оригинальными идеями и профессиональным исполнением"
  },
  {
    icon: <Camera className="w-10 h-10 text-primary" />,
    title: "Съемка мероприятий",
    description: "Красивая съемка ваших событий с сохранением всех важных моментов"
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Интервью и отзывы",
    description: "Профессиональная съемка интервью, отзывов и экспертных мнений"
  },
  {
    icon: <Sparkles className="w-10 h-10 text-primary" />,
    title: "Постпродакшн",
    description: "Монтаж, цветокоррекция, звуковое оформление и спецэффекты"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-foreground/70">
            Полный спектр услуг по созданию видеоконтента для любых задач и платформ
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-md hover:shadow-primary/5"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-foreground/70 mb-6">{service.description}</p>
              <Button variant="link" className="p-0 h-auto text-primary">Подробнее →</Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg">Все услуги</Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
