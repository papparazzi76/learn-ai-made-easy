import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, Mail, MessageCircle, BookOpen, Users, Zap, ExternalLink } from "lucide-react";
import aiBrainIcon from "@/assets/ai-brain-icon.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src={aiBrainIcon} 
                alt="IA Domus" 
                width={40}
                height={40}
              />
              <div>
                <h3 className="text-2xl font-bold gradient-text">IA Domus</h3>
                <p className="text-sm text-muted-foreground">Domina la IA desde cero</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              La plataforma de aprendizaje más práctica y divertida para dominar 
              la Inteligencia Artificial. Únete a +15.000 estudiantes que ya 
              están transformando su futuro.
            </p>
            
            <div className="space-y-3">
              <Badge className="bg-gradient-accent text-accent-foreground">
                <Zap className="w-3 h-3 mr-2" />
                100% Gratuito para siempre
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  15K+ estudiantes
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  6 módulos
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Aprende</h4>
            <ul className="space-y-3">
              <li>
                <a href="#curso" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Estructura del curso
                </a>
              </li>
              <li>
                <a href="#herramientas" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Herramientas IA
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#recursos" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1">
                  Recursos gratuitos
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Community & Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Comunidad</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://discord.gg/iadomus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Discord (+15K miembros)
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hola@iadomus.es" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Soporte por email
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Blog y novedades
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 IA Domus. Hecho con{" "}
            <Heart className="inline w-4 h-4 text-red-500 fill-current" />{" "}
            para democratizar la IA.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#privacidad" className="text-muted-foreground hover:text-primary transition-colors">
              Privacidad
            </a>
            <a href="#terminos" className="text-muted-foreground hover:text-primary transition-colors">
              Términos
            </a>
            <a href="#cookies" className="text-muted-foreground hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
        
        {/* Trust Signal */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-muted-foreground bg-muted/30 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-ai-success rounded-full animate-pulse"></div>
            Curso actualizado constantemente • Última actualización: Diciembre 2024
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;