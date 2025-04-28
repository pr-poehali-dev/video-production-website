import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Film, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-md py-3 shadow-md" : "py-5 bg-transparent"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Film className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold tracking-wider">КИНОСТУДИЯ</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground/80 hover:text-primary transition-colors duration-200 highlight-text">
              Главная
            </Link>
            <Link to="/portfolio" className="text-foreground/80 hover:text-primary transition-colors duration-200 highlight-text">
              Портфолио
            </Link>
            <Link to="/services" className="text-foreground/80 hover:text-primary transition-colors duration-200 highlight-text">
              Услуги
            </Link>
            <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors duration-200 highlight-text">
              О нас
            </Link>
            <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors duration-200 highlight-text">
              Контакты
            </Link>
          </div>

          <Button variant="outline" className="hidden md:flex items-center gap-2">
            <Play className="w-4 h-4" />
            Заказать съемку
          </Button>
          
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center pt-10 space-y-6 text-lg">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/portfolio" onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-primary transition-colors">
            Портфолио
          </Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-primary transition-colors">
            Услуги
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-primary transition-colors">
            О нас
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-primary transition-colors">
            Контакты
          </Link>
          <Button className="mt-4 w-[80%] flex items-center justify-center gap-2">
            <Play className="w-4 h-4" />
            Заказать съемку
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
