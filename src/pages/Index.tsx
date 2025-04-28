
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import VideoShowcase from "@/components/VideoShowcase";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin, Instagram, Youtube, Facebook } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      {/* Clients section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl mb-12 text-foreground/70">Нам доверяют</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70">
            {["Nike", "Apple", "Sony", "Netflix", "Vogue", "Zara"].map((client, index) => (
              <div key={index} className="flex justify-center">
                <span className="text-xl md:text-2xl font-bold tracking-wider">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ServicesSection />
      <VideoShowcase />
      
      {/* Team section */}
      <section className="py-24 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наша команда</h2>
            <p className="text-foreground/70">Талантливые профессионалы, которые делают магию кино реальностью</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Александр Петров",
                role: "Режиссер",
                image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              },
              {
                name: "Мария Иванова",
                role: "Оператор",
                image: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              },
              {
                name: "Дмитрий Соколов",
                role: "Монтажер",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              }
            ].map((member, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button variant="outline" className="gap-2">
              Вся команда <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Давайте создадим что-то невероятное вместе</h2>
              <p className="text-foreground/70 text-lg mb-8">
                Расскажите нам о вашем проекте, и мы свяжемся с вами, чтобы обсудить детали.
              </p>
              
              <div className="space-y-6 mt-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Телефон</p>
                    <p className="text-lg">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Email</p>
                    <p className="text-lg">info@videopro.ru</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Адрес</p>
                    <p className="text-lg">Москва, ул. Кинематографистов, 42</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <a href="#" className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="bg-background p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Заполните форму</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2">Имя</label>
                    <input 
                      type="text" 
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm mb-2">Тема</label>
                  <input 
                    type="text" 
                    className="w-full bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm mb-2">Сообщение</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                </div>
                
                <Button className="w-full">Отправить сообщение</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">КИНОСТУДИЯ</h3>
              <p className="text-foreground/60 mt-2">Видеопродакшен полного цикла</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-foreground/60">© {new Date().getFullYear()} КИНОСТУДИЯ. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
