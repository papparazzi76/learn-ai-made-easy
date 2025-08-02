import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, FlaskConical, Lightbulb, MessageSquare, Image, Mic, Video, Wrench, PlayCircle, Bot } from "lucide-react";

interface LessonProps {
  onComplete: () => void;
  isCompleted: boolean;
}

export const Lesson1_1 = ({ onComplete, isCompleted }: LessonProps) => (
    <Card>
        <CardHeader>
            <div className="flex items-center justify-between">
                <div>
                    <CardTitle className="text-2xl flex items-center gap-3">
                        <Wrench className="h-6 w-6 text-primary" />
                        Lección 1.1 - ¿Qué es la IA (y por qué debería importarte)?
                    </CardTitle>
                    <CardDescription className="mt-2">
                        Que entiendas para qué sirve la IA hoy mismo, sin tecnicismos, sin historia, sin ciencia ficción.
                    </CardDescription>
                </div>
                <Button
                    variant={isCompleted ? "default" : "outline"}
                    onClick={onComplete}
                >
                    {isCompleted ? (
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
        <CardContent className="space-y-6">
            <div className="prose prose-sm max-w-none dark:prose-invert">
                <p className="text-lg">
                    La Inteligencia Artificial generativa es como un <strong>ayudante invisible</strong> que puede:
                </p>
                <ul className="space-y-2 mt-4">
                    <li className="flex items-center gap-3"><MessageSquare className="h-5 w-5 text-primary flex-shrink-0" />Escribir textos, correos, poemas o resúmenes</li>
                    <li className="flex items-center gap-3"><Image className="h-5 w-5 text-primary flex-shrink-0" />Crear imágenes desde cero con solo describirlas</li>
                    <li className="flex items-center gap-3"><Mic className="h-5 w-5 text-primary flex-shrink-0" />Hablar como un humano con cualquier voz que le pidas</li>
                    <li className="flex items-center gap-3"><Video className="h-5 w-5 text-primary flex-shrink-0" />Crear música, vídeos y hasta automatizar tareas de tu día a día</li>
                </ul>
                <div className="bg-accent/10 p-4 rounded-lg mt-6">
                    <p className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span><strong>Piénsalo así:</strong> la IA generativa es como tener una <strong>miniempresa a tu disposición</strong> que trabaja gratis 24/7.</span>
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2"><Wrench className="h-5 w-5" />Herramientas mencionadas</h3>
                <div className="flex flex-wrap gap-2">
                    {["ChatGPT", "Gemini", "Claude", "Midjourney", "ElevenLabs", "Make"].map((tool) => (
                        <Badge key={tool} variant="secondary">{tool}</Badge>
                    ))}
                </div>
            </div>

            <Card className="bg-gradient-subtle border-primary/20">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2"><FlaskConical className="h-5 w-5 text-primary" />Ejercicio práctico</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">Abre ChatGPT o Gemini y prueba este prompt:</p>
                    <div className="bg-card p-4 rounded-lg border font-mono text-sm">
                        Quiero organizar un fin de semana con amigos. Somos 4, tenemos coche, poco presupuesto y nos gustan las actividades al aire libre. ¿Qué plan podrías organizarme con lugares, horarios y presupuesto aproximado?
                    </div>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                        <p className="text-sm"><strong>Resultado esperado:</strong> Una propuesta real de viaje con opciones de rutas, alojamiento barato y actividades, todo generado por IA.</p>
                    </div>
                </CardContent>
            </Card>

            <Card className="mt-6">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2"><PlayCircle className="h-5 w-5 text-primary" />Vídeo Resumen de la Lección</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">Próximamente: Vídeo de la lección 1.1</p>
                    </div>
                </CardContent>
            </Card>
             <div className="text-center mt-6">
                <Button>
                    <Bot className="mr-2 h-4 w-4" />
                    ¿Alguna duda? Pregunta a Domito!
                </Button>
            </div>
        </CardContent>
    </Card>
);
