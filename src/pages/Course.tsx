import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Brain,
  ArrowLeft,
  CheckCircle,
  PlayCircle,
  Target,
  Lightbulb,
  Wrench,
  FlaskConical,
  Users,
  Trophy,
  BookOpen,
  Sparkles,
  MessageSquare,
  Image,
  Video,
  Mic,
  FileText,
  Bot,
  Globe,
  Download,
  Lock,
} from "lucide-react";

const Course = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [activeLesson, setActiveLesson] = useState("1.1");

  if (!user) {
    navigate("/auth");
    return null;
  }

  const toggleLessonComplete = (lessonId: string) => {
    setCompletedLessons((prev) =>
      prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const progressPercentage = (completedLessons.length / 3) * 100;

  const aiToolsByCategory = {
    Multimodales: [
      {
        name: "ChatGPT (OpenAI)",
        web: "chat.openai.com",
        mobile: "iOS y Android",
        offline: "No oficialmente (pero sí con LM Studio y modelos open source)",
        models: "GPT-3.5 (gratis), GPT-4 (Plus)",
        plans: [
          {
            name: "Gratis",
            price: "0 €",
            features: "GPT-3.5, sin acceso a imágenes ni navegación web",
          },
          {
            name: "Plus",
            price: "20 $/mes",
            features:
              "GPT-4o (texto, imagen, voz, archivos, web), acceso rápido",
          },
        ],
      },
      {
        name: "Gemini (Google)",
        web: "gemini.google.com",
        mobile: "Integrada en Android",
        offline: "No",
        models: "Gemini 1.5 (gratis), Gemini Advanced (Pro 1.5)",
        plans: [
          {
            name: "Gratis",
            price: "0 €",
            features: "Texto, imágenes, búsqueda web, PDFs",
          },
          {
            name: "Advanced",
            price: "21,99 €/mes",
            features: "Modelo más potente, contexto largo, tareas complejas",
          },
        ],
      },
      {
        name: "Claude (Anthropic)",
        web: "claude.ai",
        mobile: "N/A",
        offline: "No",
        models: "Claude 3 Opus (pago), Claude 3 Sonnet (freemium)",
        plans: [
          { name: "Gratis", price: "0 €", features: "Claude Sonnet" },
          {
            name: "Pro",
            price: "20 $/mes",
            features: "Claude Opus, mejor comprensión de contexto",
          },
        ],
      },
    ],
    "Texto Puro": [
      {
        name: "Perplexity AI",
        web: "perplexity.ai",
        mobile: "Sí",
        offline: "No",
        models: "Propio, con opción a GPT-4 y Claude 3",
        plans: [
          {
            name: "Gratis",
            price: "0 €",
            features: "Respuestas con fuentes, modo Copilot",
          },
          {
            name: "Pro",
            price: "20 $/mes",
            features: "GPT-4, Claude 3, historial y archivos PDF",
          },
        ],
      },
      {
        name: "Mistral / Open Source",
        web: "N/A",
        mobile: "N/A",
        offline: "Sí, con LM Studio, Oobabooga, Ollama",
        models: "Mistral, LLaMA, Phi-3",
        plans: [
          {
            name: "Gratis",
            price: "0 €",
            features:
              "100% gratis, sin internet. Requiere 16GB RAM y 10-20GB disco.",
          },
        ],
      },
    ],
    Imagen: [
      {
        name: "Midjourney",
        web: "Discord",
        mobile: "Discord",
        offline: "No",
        models: "Propio",
        plans: [
          {
            name: "Básico",
            price: "10 $/mes",
            features: "3.3 horas de generación/mes",
          },
          {
            name: "Estándar",
            price: "30 $/mes",
            features: "Generación más rápida",
          },
        ],
      },
      {
        name: "Ideogram AI",
        web: "ideogram.ai",
        mobile: "N/A",
        offline: "No",
        models: "Propio",
        plans: [
          { name: "Gratis", price: "0 €", features: "Uso limitado diario" },
          { name: "Pro", price: "Próximamente", features: "N/A" },
        ],
      },
      {
        name: "Leonardo AI",
        web: "leonardo.ai",
        mobile: "N/A",
        offline: "No",
        models: "Propio",
        plans: [
          {
            name: "Gratis",
            price: "0 €",
            features: "150 tokens diarios aprox.",
          },
          {
            name: "Pro",
            price: "Desde 10 $",
            features: "Más tokens, calidad, prioridad",
          },
        ],
      },
      {
        name: "Adobe Firefly",
        web: "firefly.adobe.com",
        mobile: "N/A",
        offline: "Integrada en Photoshop",
        models: "Propio",
        plans: [
          {
            name: "Gratuito",
            price: "Incluido en Adobe ID",
            features: "Uso limitado, marca de agua",
          },
          {
            name: "Creative Cloud",
            price: "Desde 22 €/mes",
            features: "Créditos extra, sin límites",
          },
        ],
      },
    ],
    Vídeo: [
      {
        name: "RunwayML",
        web: "runwayml.com",
        mobile: "N/A",
        offline: "No",
        models: "Propio",
        plans: [
          {
            name: "Gratis",
            price: "0 €",
            features: "Exportaciones limitadas a baja resolución",
          },
          {
            name: "Estándar",
            price: "Desde 15 $",
            features: "Exportación HD, más tiempo y calidad",
          },
        ],
      },
      {
        name: "Pika.art",
        web: "pika.art",
        mobile: "N/A",
        offline: "No",
        models: "Propio",
        plans: [
          { name: "Gratis", price: "0 €", features: "Beta con acceso limitado" },
        ],
      },
      {
        name: "Luma Dream Machine",
        web: "lumalabs.ai/dream-machine",
        mobile: "N/A",
        offline: "No",
        models: "Propio",
        plans: [
          {
            name: "Gratuito",
            price: "Acceso anticipado",
            features: "Exportación limitada (cola de espera)",
          },
        ],
      },
      {
        name: "Kling AI",
        web: "No tiene web abierta aún",
        mobile: "N/A",
        offline: "No",
        models: "Propio",
        plans: [
          {
            name: "Pruebas internas",
            price: "N/A",
            features: "Acceso muy limitado",
          },
        ],
      },
    ],
    "Voz y Audio": [
      {
        name: "ElevenLabs",
        web: "elevenlabs.io",
        mobile: "N/A",
        offline: "No",
        models: "Propio",
        plans: [
          {
            name: "Gratis",
            price: "0 €",
            features: "10,000 caracteres/mes",
          },
          {
            name: "Starter",
            price: "5 $",
            features: "30 mins de audio HD + clon de voz",
          },
        ],
      },
      {
        name: "Suno AI",
        web: "suno.ai",
        mobile: "N/A",
        offline: "No",
        models: "Propio",
        plans: [
          { name: "Gratis", price: "0 €", features: "Uso personal" },
        ],
      },
      {
        name: "Udio",
        web: "udio.com",
        mobile: "N/A",
        offline: "No",
        models: "Propio",
        plans: [
          { name: "Gratis", price: "0 €", features: "10 canciones al día" },
          {
            name: "Pro",
            price: "10–30 $",
            features: "+ pistas, + controles",
          },
        ],
      },
    ],
    Productividad: [
      {
        name: "Fireflies AI",
        web: "fireflies.ai",
        mobile: "N/A",
        offline: "No",
        models: "N/A",
        plans: [
          { name: "Gratis", price: "0 €", features: "Transcripción limitada" },
          {
            name: "Pro",
            price: "10 $/mes",
            features: "Transcripción ilimitada + integración",
          },
        ],
      },
      {
        name: "Dola",
        web: "dolaai.com",
        mobile: "Sí",
        offline: "No",
        models: "N/A",
        plans: [
          {
            name: "Gratuito",
            price: "0 €",
            features: "Funciones básicas",
          },
          { name: "Pro", price: "N/A", features: "IA más proactiva" },
        ],
      },
      {
        name: "Jace AI",
        web: "jace.ai",
        mobile: "N/A",
        offline: "No",
        models: "N/A",
        plans: [
          { name: "Freemium", price: "0 €", features: "Funciones básicas" },
        ],
      },
      {
        name: "Gamma App",
        web: "gamma.app",
        mobile: "N/A",
        offline: "No",
        models: "N/A",
        plans: [
          {
            name: "Gratis",
            price: "0 €",
            features: "Hasta 400 créditos de generación",
          },
          {
            name: "Pro",
            price: "10 $",
            features: "Más temas, privacidad, sin límite",
          },
        ],
      },
    ],
    Automatización: [
      {
        name: "Make",
        web: "make.com",
        mobile: "N/A",
        offline: "No",
        models: "N/A",
        plans: [
          {
            name: "Gratis",
            price: "0 €",
            features: "Hasta 1,000 operaciones/mes",
          },
          {
            name: "Core",
            price: "9 $",
            features: "Más velocidad y operaciones",
          },
        ],
      },
      {
        name: "N8N",
        web: "n8n.io",
        mobile: "N/A",
        offline: "Sí, con Docker",
        models: "N/A",
        plans: [
          {
            name: "Gratis local",
            price: "0 €",
            features: "Uso completo sin restricciones",
          },
          { name: "Cloud", price: "Desde 20 $", features: "Instancia alojada" },
        ],
      },
      {
        name: "Google Opal",
        web: "Próximamente",
        mobile: "N/A",
        offline: "No",
        models: "N/A",
        plans: [
          {
            name: "Beta privada",
            price: "N/A",
            features: "Integrado con Google One AI Premium",
          },
        ],
      },
    ],
    "Asistentes y Ciencia": [
      {
        name: "Grok (xAI)",
        web: "Solo en X Premium",
        mobile: "X (Twitter)",
        offline: "No",
        models: "Propio",
        plans: [
          { name: "X Premium+", price: "16 $ aprox.", features: "Incluye Grok" },
        ],
      },
      {
        name: "Microsoft Copilot",
        web: "Integrado en Microsoft 365",
        mobile: "Sí",
        offline: "No",
        models: "Propio",
        plans: [
          {
            name: "Copilot Pro",
            price: "22 €/mes",
            features: "Requiere suscripción a M365",
          },
        ],
      },
      {
        name: "AlphaFold",
        web: "deepmind.com/alphafold",
        mobile: "N/A",
        offline: "Sí, es open source",
        models: "Propio",
        plans: [
          { name: "Gratuito", price: "0 €", features: "Uso en investigación" },
        ],
      },
      {
        name: "Google AI Studio",
        web: "aistudio.google.com",
        mobile: "N/A",
        offline: "No",
        models: "Gemini",
        plans: [
          {
            name: "Gratuito",
            price: "0 €",
            features: "Acceso a entorno de pruebas",
          },
        ],
      },
    ],
  };

  const toolSelectorData = [
    { need: "Escribir textos creativos", tool: "ChatGPT, Gemini" },
    { need: "Hacer un resumen de un PDF", tool: "AskYourPDF, Humata" },
    {
      need: "Diseñar un logo o imagen artística",
      tool: "Midjourney, Ideogram",
    },
    { need: "Crear una voz para un personaje", tool: "ElevenLabs, PlayHT" },
    { need: "Generar un vídeo corto automático", tool: "Runway, Pika" },
    {
      need: "Automatizar envíos, formularios, emails",
      tool: "Make, N8N",
    },
    {
      need: "Hacer todo en uno desde un solo sitio",
      tool: "ChatGPT-4o, Gemini Advanced",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Inicio
              </Button>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="font-bold text-xl">MÓDULO 1</h1>
                  <p className="text-sm text-muted-foreground">
                    Bienvenido al Universo IA
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm font-medium">
                  {Math.round(progressPercentage)}% completado
                </div>
                <Progress value={progressPercentage} className="w-32" />
              </div>
              <Trophy className="h-6 w-6 text-accent" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Índice de lecciones */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Lecciones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  { id: "1.1", title: "¿Qué es la IA?", icon: Target },
                  {
                    id: "1.2",
                    title: "Clasificación de herramientas",
                    icon: Wrench,
                  },
                  {
                    id: "1.3",
                    title: "¿Qué herramienta usar?",
                    icon: Lightbulb,
                  },
                ].map((lesson) => {
                  const Icon = lesson.icon;
                  const isCompleted = completedLessons.includes(lesson.id);
                  const isActive = activeLesson === lesson.id;

                  return (
                    <Button
                      key={lesson.id}
                      variant={isActive ? "default" : "ghost"}
                      className={`w-full justify-start gap-3 ${
                        isCompleted ? "bg-primary/10" : ""
                      }`}
                      onClick={() => setActiveLesson(lesson.id)}
                    >
                      {isCompleted ? (
                        <CheckCircle className="h-4 w-4 text-primary" />
                      ) : (
                        <Icon className="h-4 w-4" />
                      )}
                      <span className="text-left flex-1">{lesson.title}</span>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Contenido principal */}
          <div className="lg:col-span-3">
            <Tabs value={activeLesson} onValueChange={setActiveLesson}>
              {/* Lección 1.1 */}
              <TabsContent value="1.1" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl flex items-center gap-3">
                          <Target className="h-6 w-6 text-primary" />
                          Lección 1.1 - ¿Qué es la IA (y por qué debería
                          importarte)?
                        </CardTitle>
                        <CardDescription className="mt-2">
                          Que entiendas para qué sirve la IA hoy mismo, sin
                          tecnicismos, sin historia, sin ciencia ficción.
                        </CardDescription>
                      </div>
                      <Button
                        variant={
                          completedLessons.includes("1.1")
                            ? "default"
                            : "outline"
                        }
                        onClick={() => toggleLessonComplete("1.1")}
                      >
                        {completedLessons.includes("1.1") ? (
                          <>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Completada
                          </>
                        ) : (
                          "Marcar como completada"
                        )}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {/* Contenido didáctico */}
                      <div className="prose prose-sm max-w-none">
                        <p className="text-lg">
                          La Inteligencia Artificial generativa es como un{" "}
                          <strong>ayudante invisible</strong> que puede:
                        </p>
                        <ul className="space-y-2 mt-4">
                          <li className="flex items-center gap-3">
                            <MessageSquare className="h-5 w-5 text-primary flex-shrink-0" />
                            Escribir textos, correos, poemas o resúmenes
                          </li>
                          <li className="flex items-center gap-3">
                            <Image className="h-5 w-5 text-primary flex-shrink-0" />
                            Crear imágenes desde cero con solo describirlas
                          </li>
                          <li className="flex items-center gap-3">
                            <Mic className="h-5 w-5 text-primary flex-shrink-0" />
                            Hablar como un humano con cualquier voz que le pidas
                          </li>
                          <li className="flex items-center gap-3">
                            <Video className="h-5 w-5 text-primary flex-shrink-0" />
                            Crear música, vídeos y hasta automatizar tareas de
                            tu día a día
                          </li>
                        </ul>
                        <div className="bg-accent/10 p-4 rounded-lg mt-6">
                          <p className="flex items-start gap-3">
                            <Lightbulb className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>
                              <strong>Piénsalo así:</strong> la IA generativa
                              es como tener una{" "}
                              <strong>miniempresa a tu disposición</strong> que
                              trabaja gratis 24/7.
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* Herramientas mencionadas */}
                      <div>
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          <Wrench className="h-5 w-5" />
                          Herramientas mencionadas
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "ChatGPT",
                            "Gemini",
                            "Claude",
                            "Midjourney",
                            "ElevenLabs",
                            "Make",
                          ].map((tool) => (
                            <Badge key={tool} variant="secondary">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Ejercicio práctico */}
                      <Card className="bg-gradient-subtle border-primary/20">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <FlaskConical className="h-5 w-5 text-primary" />
                            Ejercicio práctico
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-4">
                            Abre ChatGPT o Gemini y prueba este prompt:
                          </p>
                          <div className="bg-card p-4 rounded-lg border font-mono text-sm">
                            Quiero organizar un fin de semana con amigos. Somos
                            4, tenemos coche, poco presupuesto y nos gustan las
                            actividades al aire libre. ¿Qué plan podrías
                            organizarme con lugares, horarios y presupuesto
                            aproximado?
                          </div>
                          <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                            <p className="text-sm">
                              <strong>Resultado esperado:</strong> Una
                              propuesta real de viaje con opciones de rutas,
                              alojamiento barato y actividades, todo generado
                              por IA.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <Card className="mt-6">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <PlayCircle className="h-5 w-5 text-primary" />
                          Vídeo Resumen de la Lección
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                          <p className="text-muted-foreground">
                            Próximamente: Vídeo de la lección 1.1
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Lección 1.2 */}
              <TabsContent value="1.2" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl flex items-center gap-3">
                          <Wrench className="h-6 w-6 text-primary" />
                          Lección 1.2 - Clasificación práctica de
                          herramientas de IA
                        </CardTitle>
                        <CardDescription className="mt-2">
                          Conocer qué tipos de IA existen según lo que puedes
                          hacer con ellas.
                        </CardDescription>
                      </div>
                      <Button
                        variant={
                          completedLessons.includes("1.2")
                            ? "default"
                            : "outline"
                        }
                        onClick={() => toggleLessonComplete("1.2")}
                      >
                        {completedLessons.includes("1.2") ? (
                          <>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Completada
                          </>
                        ) : (
                          "Marcar como completada"
                        )}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="prose prose-sm max-w-none">
                        <p className="text-lg">
                          Piensa en la IA como una{" "}
                          <strong>caja de herramientas</strong>. No todas hacen
                          lo mismo, pero todas te ayudan a crear algo. Aquí
                          tienes una clasificación práctica y visual:
                        </p>
                      </div>

                      {/* START: Updated Content for Lesson 1.2 */}
                      <Tabs defaultValue="Multimodales" className="w-full">
                        <TabsList className="flex flex-wrap h-auto justify-start">
                          {Object.keys(aiToolsByCategory).map((category) => (
                            <TabsTrigger key={category} value={category}>
                              {category}
                            </TabsTrigger>
                          ))}
                        </TabsList>
                        {Object.entries(aiToolsByCategory).map(
                          ([category, tools]) => (
                            <TabsContent
                              key={category}
                              value={category}
                              className="mt-4"
                            >
                              <div className="grid gap-4 md:grid-cols-2">
                                {tools.map((tool, index) => (
                                  <Card key={index} className="p-4 bg-card/50 border-border/50 shadow-md">
                                    <CardTitle className="text-lg mb-2 text-primary">
                                      {tool.name}
                                    </CardTitle>
                                    <div className="text-sm space-y-2 text-muted-foreground">
                                      <p>
                                        <Globe className="inline h-4 w-4 mr-2 text-accent" />
                                        {tool.web}
                                      </p>
                                      <p>
                                        <Download className="inline h-4 w-4 mr-2 text-accent" />
                                        Instalable: {tool.offline}
                                      </p>
                                      <div>
                                        <strong>Planes:</strong>
                                        <ul className="list-disc pl-5 mt-1">
                                          {tool.plans.map((plan, pIndex) => (
                                            <li key={pIndex}>
                                              <strong>{plan.name}</strong> (
                                              {plan.price}): {plan.features}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </Card>
                                ))}
                              </div>
                            </TabsContent>
                          )
                        )}
                      </Tabs>
                      {/* END: Updated Content for Lesson 1.2 */}

                      {/* Ejercicio práctico */}
                      <Card className="bg-gradient-subtle border-primary/20">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <FlaskConical className="h-5 w-5 text-primary" />
                            Ejercicio práctico
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-4">
                            Piensa en algo que te gustaría crear hoy mismo con
                            IA (por ejemplo, una historia ilustrada o un vídeo
                            promocional). Luego identifica:
                          </p>
                          <ul className="list-disc list-inside space-y-2 mb-4">
                            <li>Qué herramientas usarías</li>
                            <li>En qué orden las combinarías</li>
                          </ul>
                          <div className="bg-card p-4 rounded-lg border">
                            <p className="font-semibold mb-2">Ejemplo guía:</p>
                            <p className="text-sm">
                              <strong>Quiero:</strong> una historia infantil
                              ilustrada y narrada →
                              <br />
                              ChatGPT para el texto → Ideogram para las imágenes
                              → ElevenLabs para la voz
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <Card className="mt-6">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <PlayCircle className="h-5 w-5 text-primary" />
                          Vídeo Resumen de la Lección
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                          <p className="text-muted-foreground">
                            Próximamente: Vídeo de la lección 1.2
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Lección 1.3 */}
              <TabsContent value="1.3" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl flex items-center gap-3">
                          <Lightbulb className="h-6 w-6 text-primary" />
                          Lección 1.3 - ¿Qué herramienta uso para cada cosa?
                        </CardTitle>
                        <CardDescription className="mt-2">
                          Que sepas elegir la herramienta adecuada sin perder
                          tiempo ni probar mil cosas.
                        </CardDescription>
                      </div>
                      <Button
                        variant={
                          completedLessons.includes("1.3")
                            ? "default"
                            : "outline"
                        }
                        onClick={() => toggleLessonComplete("1.3")}
                      >
                        {completedLessons.includes("1.3") ? (
                          <>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Completada
                          </>
                        ) : (
                          "Marcar como completada"
                        )}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="prose prose-sm max-w-none">
                        <p className="text-lg">
                          No pierdas tiempo probando herramientas al azar. Aquí
                          va tu <strong>guía rápida</strong>:
                        </p>
                      </div>

                      {/* Tabla de selección */}
                      <div className="grid gap-3">
                        {toolSelectorData.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-card rounded-lg border hover:shadow-sm transition-shadow"
                          >
                            <div className="font-medium">
                              Quiero hacer: {item.need}
                            </div>
                            <Badge
                              variant="secondary"
                              className="ml-4 shrink-0"
                            >
                              {item.tool}
                            </Badge>
                          </div>
                        ))}
                      </div>

                      {/* Reto gamificado */}
                      <Card className="bg-gradient-accent border-accent/20">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Trophy className="h-5 w-5 text-accent" />
                            Reto IA express
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-4">
                            Crea un personaje que tenga:
                          </p>
                          <ul className="list-disc list-inside space-y-1 mb-4">
                            <li>Un nombre</li>
                            <li>
                              Una historia breve (escrita con ChatGPT)
                            </li>
                            <li>
                              Una imagen (creada con Ideogram o Leonardo AI)
                            </li>
                            <li>Una voz narrando su historia (ElevenLabs)</li>
                          </ul>
                          <div className="bg-card p-4 rounded-lg border mb-4">
                            <p className="font-semibold mb-2">
                              Prompt sugerido:
                            </p>
                            <p className="font-mono text-sm">
                              Crea un personaje ficticio llamado Lina, una
                              científica que viaja en el tiempo ayudando a
                              civilizaciones antiguas con sus conocimientos.
                              Quiero una historia corta que sea ideal para
                              ilustrar y narrar.
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Users className="h-4 w-4" />
                            <span>
                              Luego compártelo en la comunidad (foro, grupo o
                              Discord)
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <Card className="mt-6">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <PlayCircle className="h-5 w-5 text-primary" />
                          Vídeo Resumen de la Lección
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                          <p className="text-muted-foreground">
                            Próximamente: Vídeo de la lección 1.3
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Revisión final del módulo */}
            {completedLessons.length === 3 && (
              <Card className="bg-gradient-primary text-white border-0 mt-8">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Sparkles className="h-6 w-6" />
                    ¡Módulo 1 completado!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">
                        🎓 Has aprendido:
                      </h3>
                      <ul className="space-y-1 text-sm opacity-90">
                        <li>
                          • Qué es la IA generativa (sin rollos ni teoría)
                        </li>
                        <li>
                          • Qué tipo de herramientas existen según lo que tú
                          quieres hacer
                        </li>
                        <li>
                          • Cómo elegir la herramienta adecuada para cada
                          tarea
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">
                        🎯 Has practicado:
                      </h3>
                      <ul className="space-y-1 text-sm opacity-90">
                        <li>• Tu primer prompt en ChatGPT</li>
                        <li>• Clasificar herramientas por función</li>
                        <li>
                          • Diseñar un mini-proyecto con varias IAs
                          combinadas
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-white/10 rounded-lg">
                    <h3 className="font-semibold mb-2">🎁 Siguiente paso:</h3>
                    <p className="text-sm opacity-90">
                      Pasamos al <strong>MÓDULO 2</strong>: Cómo usar estas
                      herramientas sin pagar un céntimo.
                    </p>
                    <Button
                      className="mt-3 bg-white text-primary hover:bg-white/90"
                      disabled
                    >
                      Próximamente disponible
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
