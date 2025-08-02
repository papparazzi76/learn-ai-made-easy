import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Marketing Digital",
    company: "Startup Tech",
    content: "En 2 semanas ya estaba automatizando mis campañas de email marketing con IA. El curso es súper práctico y Ana explica todo de forma que lo entiende cualquiera.",
    rating: 5,
    highlight: "Automatización",
    avatar: "MG"
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    role: "Diseñador Freelance", 
    company: "Independiente",
    content: "Midjourney me parecía imposible de entender. Ahora genero ilustraciones para mis clientes en minutos. Mi productividad se multiplicó por 10.",
    rating: 5,
    highlight: "Creatividad",
    avatar: "CR"
  },
  {
    id: 3,
    name: "Laura Martín",
    role: "Estudiante de Psicología",
    company: "Universidad",
    content: "ChatGPT me ayuda a estudiar, hacer resúmenes y preparar exámenes. Mis notas han mejorado muchísimo y tengo más tiempo libre.",
    rating: 5,
    highlight: "Estudios",
    avatar: "LM"
  },
  {
    id: 4,
    name: "David López",
    role: "Emprendedor",
    company: "E-commerce",
    content: "Creé todo el contenido de mi tienda online con IA: descripciones, imágenes, emails... En una semana tenía todo listo. Increíble.",
    rating: 5,
    highlight: "Negocio",
    avatar: "DL"
  },
  {
    id: 5,
    name: "Ana Rodríguez",
    role: "Profesora",
    company: "Colegio Público",
    content: "Uso IA para crear materiales didácticos, ejercicios personalizados y evaluaciones. Mis alumnos están más motivados que nunca.",
    rating: 5,
    highlight: "Educación",
    avatar: "AR"
  },
  {
    id: 6,
    name: "Miguel Torres",
    role: "Consultor",
    company: "Consultoría",
    content: "El módulo de automatización me cambió la vida profesional. Ahora mis informes se generan solos y puedo enfocarme en lo estratégico.",
    rating: 5,
    highlight: "Productividad",
    avatar: "MT"
  }
];

const stats = [
  { number: "15,247", label: "Estudiantes activos", color: "text-primary" },
  { number: "4.9/5", label: "Valoración media", color: "text-accent" },
  { number: "98%", label: "Tasa de finalización", color: "text-ai-cyan" },
  { number: "24h", label: "Soporte promedio", color: "text-ai-warning" }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-gradient-accent text-accent-foreground">
          Testimonios reales
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Más de <span className="gradient-text">15.000 personas</span>{" "}
          ya dominan la IA
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Estudiantes, profesionales y emprendedores que han transformado 
          su forma de trabajar y estudiar con nuestro método.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center glass-card">
            <div className={`text-3xl font-bold ${stat.color} mb-2`}>
              {stat.number}
            </div>
            <div className="text-sm text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {testimonials.map((testimonial) => (
          <Card 
            key={testimonial.id}
            className="p-6 border-border/50 hover:border-primary/50 transition-all duration-300 group hover:scale-[1.02] relative overflow-hidden"
          >
            {/* Quote Icon */}
            <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
            
            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-ai-warning text-ai-warning" />
              ))}
            </div>
            
            {/* Content */}
            <blockquote className="text-muted-foreground mb-6 leading-relaxed">
              "{testimonial.content}"
            </blockquote>
            
            {/* Author */}
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-gradient-accent text-accent-foreground text-sm font-semibold">
                  {testimonial.avatar}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="font-semibold text-sm">{testimonial.name}</div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.role} • {testimonial.company}
                </div>
              </div>
              
              <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                {testimonial.highlight}
              </Badge>
            </div>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <div className="glass-card max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            ¿Quieres ser el <span className="gradient-text">próximo testimonio</span>?
          </h3>
          <p className="text-muted-foreground mb-6">
            Únete a nuestra comunidad y transforma tu futuro con IA. 
            Es gratis y solo te tomará 5 minutos empezar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="btn-hero inline-flex items-center justify-center px-6 py-3 cursor-pointer">
              Comenzar mi transformación
            </div>
            
            <div className="text-sm text-muted-foreground">
              ✓ Sin tarjeta de crédito • ✓ Acceso inmediato
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;