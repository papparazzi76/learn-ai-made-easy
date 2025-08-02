'use client'

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  ArrowLeft, 
  LogOut, 
  Play, 
  BookOpen, 
  Users, 
  MessageSquare,
  CheckCircle,
  Clock,
  Star,
  Send,
  ChevronRight
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

const Course = () => {
  const { user, signOut, isLoading } = useAuth();
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{role: string, content: string}>>([]);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/auth');
    }
  }, [user, isLoading, router]);

  const handleLogout = async () => {
    await signOut();
    router.push('/');
  };

  const sendMessage = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, 
        { role: 'user', content: message },
        { role: 'assistant', content: 'Gracias por tu mensaje. Esta funcionalidad está en desarrollo.' }
      ]);
      setMessage("");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Cargando curso...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const lessons = [
    { 
      id: 1, 
      title: "Introducción a la IA", 
      duration: "15 min", 
      completed: true,
      description: "Conceptos fundamentales de la Inteligencia Artificial",
      content: [
        "¿Qué es la Inteligencia Artificial?",
        "Historia y evolución de la IA",
        "Aplicaciones actuales en el mundo real",
        "Tipos de IA: débil vs fuerte",
        "El futuro de la IA"
      ]
    },
    { 
      id: 2, 
      title: "¿Qué es ChatGPT?", 
      duration: "20 min", 
      completed: true,
      description: "Introducción completa al modelo de lenguaje ChatGPT",
      content: [
        "Qué es un modelo de lenguaje",
        "Cómo funciona ChatGPT",
        "Capacidades y limitaciones",
        "Diferencias entre versiones",
        "Casos de uso principales"
      ]
    },
    { 
      id: 3, 
      title: "Primeros pasos con ChatGPT", 
      duration: "25 min", 
      completed: false,
      description: "Aprende a usar ChatGPT de manera efectiva",
      content: [
        "Creando tu cuenta",
        "Interfaz y navegación",
        "Tu primera conversación",
        "Configuración básica",
        "Consejos para principiantes"
      ]
    },
    { 
      id: 4, 
      title: "Prompts efectivos", 
      duration: "30 min", 
      completed: false,
      description: "Técnicas avanzadas para obtener mejores resultados",
      content: [
        "¿Qué es un prompt?",
        "Estructura de un buen prompt",
        "Técnicas de prompting",
        "Ejemplos prácticos",
        "Errores comunes a evitar"
      ]
    },
    { 
      id: 5, 
      title: "Introducción a Midjourney", 
      duration: "18 min", 
      completed: false,
      description: "Generación de imágenes con IA",
      content: [
        "¿Qué es Midjourney?",
        "Configuración inicial",
        "Comandos básicos",
        "Parámetros de calidad",
        "Creando tu primera imagen"
      ]
    },
  ];

  const completedLessons = lessons.filter(lesson => lesson.completed).length;
  const progressPercentage = (completedLessons / lessons.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Inicio
              </Button>
            </Link>
            <h1 className="text-xl font-bold gradient-text">Curso de IA</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              Bienvenido, {user.email}
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Card */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Tu Progreso
                </CardTitle>
                <CardDescription>
                  Has completado {completedLessons} de {lessons.length} lecciones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={progressPercentage} className="mb-2" />
                <p className="text-sm text-muted-foreground">
                  {Math.round(progressPercentage)}% completado
                </p>
              </CardContent>
            </Card>

            {/* Módulo de Lecciones Expandidas */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Módulo Completo de IA
                </CardTitle>
                <CardDescription>
                  Todas las lecciones organizadas en un solo módulo interactivo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="multiple" className="w-full space-y-4">
                  {lessons.map((lesson, index) => (
                    <AccordionItem 
                      key={lesson.id} 
                      value={`lesson-${lesson.id}`}
                      className="border border-border/50 rounded-lg px-4 bg-card/50"
                    >
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-4 w-full">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-semibold text-sm">
                            {lesson.completed ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : (
                              index + 1
                            )}
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="font-medium text-foreground">{lesson.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {lesson.duration}
                              </div>
                              {lesson.completed && (
                                <Badge variant="secondary" className="text-green-600 text-xs">
                                  Completado
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      
                      <AccordionContent className="pb-6">
                        <div className="space-y-4 pt-2">
                          <p className="text-muted-foreground">{lesson.description}</p>
                          
                          <div className="space-y-3">
                            <h4 className="font-medium text-sm text-foreground">Contenido de la lección:</h4>
                            <ul className="space-y-2">
                              {lesson.content.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-2 text-sm">
                                  <ChevronRight className="w-3 h-3 mt-0.5 text-primary flex-shrink-0" />
                                  <span className="text-muted-foreground">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                            <Button 
                              size="sm" 
                              variant={lesson.completed ? "outline" : "default"}
                              className="flex-1 sm:flex-none"
                            >
                              <Play className="w-3 h-3 mr-2" />
                              {lesson.completed ? "Revisar Lección" : "Empezar Lección"}
                            </Button>
                            
                            {lesson.completed && (
                              <Button size="sm" variant="ghost" className="text-muted-foreground">
                                <CheckCircle className="w-3 h-3 mr-2" />
                                Marcar pendiente
                              </Button>
                            )}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Chat Assistant */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Asistente IA
                </CardTitle>
                <CardDescription>
                  Haz preguntas sobre el curso
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-48 border border-border/50 rounded-lg p-3 overflow-y-auto bg-muted/20">
                  {chatHistory.length === 0 ? (
                    <p className="text-sm text-muted-foreground text-center mt-8">
                      ¡Hola! Soy tu asistente de IA. ¿En qué puedo ayudarte con el curso?
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {chatHistory.map((msg, index) => (
                        <div key={index} className={`text-sm ${msg.role === 'user' ? 'text-foreground' : 'text-muted-foreground'}`}>
                          <strong>{msg.role === 'user' ? 'Tú:' : 'IA:'}</strong> {msg.content}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Escribe tu pregunta..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    className="text-foreground placeholder:text-muted-foreground"
                  />
                  <Button size="sm" onClick={sendMessage}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Community */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Comunidad
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">2,847</div>
                  <div className="text-sm text-muted-foreground">Estudiantes activos</div>
                </div>
                <Separator />
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">4.9</div>
                  <div className="text-sm text-muted-foreground">Calificación promedio</div>
                </div>
                <Button className="w-full" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Unirse al Discord
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;