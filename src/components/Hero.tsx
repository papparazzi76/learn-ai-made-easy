import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Sparkles, Users } from "lucide-react";
import heroImage from "@/assets/hero-ai-network.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/20" />
      
      {/* Hero Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src={heroImage} 
          alt="AI Network Visualization" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float" />
      <div className="absolute top-40 right-16 w-6 h-6 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-ai-cyan rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="mb-8 animate-fade-in">
          <Badge className="bg-gradient-accent text-accent-foreground px-4 py-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            100% Gratuito • Sin experiencia previa
          </Badge>
        </div>
        
        {/* Main Heading */}
        <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Domina la{" "}
            <span className="gradient-text">
              Inteligencia Artificial
            </span>
            <br />
            sin volverte loco
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Aprende IA desde cero con el curso más práctico y divertido. 
            De novato a experto en <span className="text-primary font-semibold">30 días</span>.
          </p>
        </div>
        
        {/* Stats */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">15K+</div>
              <div className="text-sm text-muted-foreground">Estudiantes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">4.9★</div>
              <div className="text-sm text-muted-foreground">Valoración</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ai-cyan">50+</div>
              <div className="text-sm text-muted-foreground">Herramientas IA</div>
            </div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in" style={{ animationDelay: '0.6s' }}>
          <Button className="btn-hero group">
            Empieza gratis ahora
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="secondary" size="lg" className="bg-card/80 hover:bg-card border border-border/50 backdrop-blur-sm">
            <Play className="mr-2 w-5 h-5" />
            Ver demo (2 min)
          </Button>
        </div>
        
        {/* Social Proof */}
        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
            <Users className="w-4 h-4" />
            <span>Únete a +15.000 estudiantes que ya dominan la IA</span>
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
            <span className="text-xs font-medium">Certificado gratuito</span>
            <span className="text-xs font-medium">•</span>
            <span className="text-xs font-medium">Actualizaciones constantes</span>
            <span className="text-xs font-medium">•</span>
            <span className="text-xs font-medium">Comunidad activa</span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;