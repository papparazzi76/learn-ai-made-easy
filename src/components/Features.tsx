import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Zap, Trophy, Users, BookOpen, Download, Gamepad2, Clock, Shield } from "lucide-react";
import aiToolsImage from "@/assets/ai-tools-showcase.jpg";

const features = [
  {
    icon: Zap,
    title: "Aprende practicando",
    description: "Casos reales, ejemplos prácticos y proyectos que puedes usar desde el día 1",
    color: "from-ai-purple to-primary"
  },
  {
    icon: Gamepad2,
    title: "Gamificación total",
    description: "Sistema de logros, badges y niveles que hacen del aprendizaje una aventura",
    color: "from-accent to-ai-blue"
  },
  {
    icon: Clock,
    title: "A tu ritmo",
    description: "Acceso de por vida. Estudia cuando quieras, donde quieras, sin presión",
    color: "from-ai-cyan to-accent"
  },
  {
    icon: Users,
    title: "Comunidad activa",
    description: "Discord exclusivo con +15K miembros compartiendo casos y resolviendo dudas",
    color: "from-ai-warning to-primary"
  },
  {
    icon: Download,
    title: "Recursos descargables",
    description: "Templates, cheat sheets, prompts y herramientas listas para usar",
    color: "from-primary to-ai-purple"
  },
  {
    icon: Trophy,
    title: "Certificado gratuito",
    description: "Diploma verificable para añadir a tu LinkedIn y destacar profesionalmente",
    color: "from-ai-success to-accent"
  },
  {
    icon: BookOpen,
    title: "Contenido actualizado",
    description: "Las últimas herramientas y técnicas. El curso evoluciona contigo",
    color: "from-accent to-ai-cyan"
  },
  {
    icon: Shield,
    title: "Sin letra pequeña",
    description: "100% gratuito para siempre. Sin trucos, sin pagos ocultos, sin sorpresas",
    color: "from-ai-blue to-primary"
  }
];

const Features = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-gradient-accent text-accent-foreground">
          Metodología única
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Más que un curso, es una{" "}
          <span className="gradient-text">experiencia</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Diseñado con las mejores prácticas de gamificación y aprendizaje acelerado. 
          Aprende divirtiéndote y sin frustrarte.
        </p>
      </div>

      {/* Main Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          
          return (
            <Card 
              key={index}
              className="p-6 border-border/50 hover:border-primary/50 transition-all duration-300 group hover:scale-105"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-full h-full text-white" />
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Tools Showcase */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            +50 herramientas incluidas
          </Badge>
          <h3 className="text-3xl font-bold mb-6">
            Aprende las herramientas que{" "}
            <span className="gradient-text">realmente importan</span>
          </h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Desde ChatGPT hasta Midjourney, desde Make hasta Claude. 
            Te enseñamos a dominar el ecosistema completo de IA de forma práctica y sin tecnicismos.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">Generación de texto con GPT-4, Claude y Gemini</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm">Creación de imágenes con Midjourney, DALL-E y Stable Diffusion</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-ai-cyan rounded-full"></div>
              <span className="text-sm">Automatización con Make, Zapier y n8n</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-ai-warning rounded-full"></div>
              <span className="text-sm">Análisis de datos con Python y herramientas no-code</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="glass-card">
            <img 
              src={aiToolsImage} 
              alt="AI Tools Showcase" 
              className="w-full h-80 object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent rounded-2xl" />
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-xl font-bold text-white mb-2">
                Ecosistema completo
              </h4>
              <p className="text-white/80 text-sm">
                Acceso a las mejores herramientas del mercado
              </p>
            </div>
          </div>
          
          {/* Floating stats */}
          <div className="absolute -top-6 -right-6 glass-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-xs text-muted-foreground">Herramientas</div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 glass-card p-4 text-center">
            <div className="text-2xl font-bold text-accent">100%</div>
            <div className="text-xs text-muted-foreground">Práctico</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;