import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FlaskConical, Lightbulb, Trophy, Users, PlayCircle, Bot } from "lucide-react";

interface LessonProps {
  onComplete: () => void;
  isCompleted: boolean;
}

const toolSelectorData = [
    { need: "Escribir textos creativos", tool: "ChatGPT, Gemini" },
    { need: "Hacer un resumen de un PDF", tool: "AskYourPDF, Humata" },
    { need: "Diseñar un logo o imagen artística", tool: "Midjourney, Ideogram" },
    { need: "Crear una voz para un personaje", tool: "ElevenLabs, PlayHT" },
    { need: "Generar un vídeo corto automático", tool: "Runway, Pika" },
    { need: "Automatizar envíos, formularios, emails", tool: "Make, N8N" },
    { need: "Hacer todo en uno desde un solo sitio", tool: "ChatGPT-4o, Gemini Advanced" },
];

export const Lesson1_3 = ({ onComplete, isCompleted }: LessonProps) => (
    <Card>
        <CardHeader>
            <div className="flex items-center justify-between">
                <div>
                    <CardTitle className="text-2xl flex items-center gap-3"><Lightbulb className="h-6 w-6 text-primary" />Lección 1.3 - ¿Qué herramienta uso para cada cosa?</CardTitle>
                    <CardDescription className="mt-2">Que sepas elegir la herramienta adecuada sin perder tiempo ni probar mil cosas.</CardDescription>
                </div>
                <Button variant={isCompleted ? "default" : "outline"} onClick={onComplete}>
                    {isCompleted ? <><CheckCircle className="mr-2 h-4 w-4" />Completada</> : "Marcar como completada"}
                </Button>
            </div>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="prose prose-sm max-w-none dark:prose-invert">
                <p className="text-lg">No pierdas tiempo probando herramientas al azar. Aquí va tu <strong>guía rápida</strong>:</p>
            </div>
            
            <div className="grid gap-3">
                {toolSelectorData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-card rounded-lg border hover:shadow-sm transition-shadow">
                        <div className="font-medium">Quiero hacer: {item.need}</div>
                        <Badge variant="secondary" className="ml-4 shrink-0">{item.tool}</Badge>
                    </div>
                ))}
            </div>

            <Card className="bg-gradient-accent border-accent/20">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2"><Trophy className="h-5 w-5 text-accent" />Reto IA express</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">Crea un personaje que tenga:</p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                        <li>Un nombre</li>
                        <li>Una historia breve (escrita con ChatGPT)</li>
                        <li>Una imagen (creada con Ideogram o Leonardo AI)</li>
                        <li>Una voz narrando su historia (ElevenLabs)</li>
                    </ul>
                    <div className="bg-card p-4 rounded-lg border mb-4">
                        <p className="font-semibold mb-2">Prompt sugerido:</p>
                        <p className="font-mono text-sm">Crea un personaje ficticio llamado Lina, una científica que viaja en el tiempo ayudando a civilizaciones antiguas con sus conocimientos. Quiero una historia corta que sea ideal para ilustrar y narrar.</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm"><Users className="h-4 w-4" /><span>Luego compártelo en la comunidad (foro, grupo o Discord)</span></div>
                </CardContent>
            </Card>

            <Card className="mt-6">
                <CardHeader><CardTitle className="text-lg flex items-center gap-2"><PlayCircle className="h-5 w-5 text-primary" />Vídeo Resumen</CardTitle></CardHeader>
                <CardContent><div className="aspect-video bg-muted rounded-lg flex items-center justify-center"><p className="text-muted-foreground">Próximamente: Vídeo de la lección 1.3</p></div></CardContent>
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
