import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FlaskConical, Wrench, PlayCircle, Globe, Download, Bot } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface LessonProps {
  onComplete: () => void;
  isCompleted: boolean;
}

const aiToolsByCategory = {
    Multimodales: [
      { name: "ChatGPT (OpenAI)", web: "chat.openai.com", offline: "No oficialmente", plans: [{ name: "Gratis", price: "0 €", features: "GPT-3.5" }, { name: "Plus", price: "20 $/mes", features: "GPT-4o, DALL-E, Análisis Avanzado" }] },
      { name: "Gemini (Google)", web: "gemini.google.com", offline: "No", plans: [{ name: "Gratis", price: "0 €", features: "Gemini 1.5" }, { name: "Advanced", price: "21,99 €/mes", features: "Modelo Pro, más contexto" }] },
      { name: "Claude (Anthropic)", web: "claude.ai", offline: "No", plans: [{ name: "Gratis", price: "0 €", features: "Claude Sonnet" }, { name: "Pro", price: "20 $/mes", features: "Claude Opus, más potencia" }] },
    ],
    "Texto Puro": [
        { name: "Perplexity AI", web: "perplexity.ai", offline: "No", plans: [{ name: "Gratis", price: "0 €", features: "Respuestas con fuentes" }, { name: "Pro", price: "20 $/mes", features: "Acceso a modelos top" }] },
        { name: "Mistral / Open Source", web: "N/A", offline: "Sí, con LM Studio, Ollama", plans: [{ name: "Gratis", price: "0 €", features: "100% gratis, sin internet" }] },
    ],
    Imagen: [
        { name: "Midjourney", web: "Discord", offline: "No", plans: [{ name: "Básico", price: "10 $/mes", features: "Generación de imágenes" }] },
        { name: "Ideogram AI", web: "ideogram.ai", offline: "No", plans: [{ name: "Gratis", price: "0 €", features: "Uso limitado diario" }] },
    ],
};

export const Lesson1_2 = ({ onComplete, isCompleted }: LessonProps) => (
    <Card>
        <CardHeader>
            <div className="flex items-center justify-between">
                <div>
                    <CardTitle className="text-2xl flex items-center gap-3"><Wrench className="h-6 w-6 text-primary" />Lección 1.2 - Clasificación práctica de herramientas</CardTitle>
                    <CardDescription className="mt-2">Conocer qué tipos de IA existen según lo que puedes hacer con ellas.</CardDescription>
                </div>
                <Button variant={isCompleted ? "default" : "outline"} onClick={onComplete}>
                    {isCompleted ? <><CheckCircle className="mr-2 h-4 w-4" />Completada</> : "Marcar como completada"}
                </Button>
            </div>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="prose prose-sm max-w-none dark:prose-invert">
                <p className="text-lg">Piensa en la IA como una <strong>caja de herramientas</strong>. No todas hacen lo mismo, pero todas te ayudan a crear algo.</p>
            </div>

            <Tabs defaultValue="Multimodales" className="w-full">
                <TabsList className="flex flex-wrap h-auto justify-start">
                    {Object.keys(aiToolsByCategory).map((category) => (
                        <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                    ))}
                </TabsList>
                {Object.entries(aiToolsByCategory).map(([category, tools]) => (
                    <TabsContent key={category} value={category} className="mt-4">
                        <div className="grid gap-4 md:grid-cols-2">
                            {tools.map((tool, index) => (
                                <Card key={index} className="p-4 bg-card/50 border-border/50 shadow-md">
                                    <CardTitle className="text-lg mb-2 text-primary">{tool.name}</CardTitle>
                                    <div className="text-sm space-y-2 text-muted-foreground">
                                        <p><Globe className="inline h-4 w-4 mr-2 text-accent" />{tool.web}</p>
                                        <p><Download className="inline h-4 w-4 mr-2 text-accent" />Instalable: {tool.offline}</p>
                                        <div><strong>Planes:</strong>
                                            <ul className="list-disc pl-5 mt-1">
                                                {tool.plans.map((plan, pIndex) => (
                                                    <li key={pIndex}><strong>{plan.name}</strong> ({plan.price}): {plan.features}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <Button variant="outline" className="mt-4">Muéstrame la herramienta</Button>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>

            <Card className="bg-gradient-subtle border-primary/20">
              <CardHeader><CardTitle className="text-lg flex items-center gap-2"><FlaskConical className="h-5 w-5 text-primary" />Ejercicio práctico</CardTitle></CardHeader>
              <CardContent>
                  <p className="mb-4">Piensa en algo que te gustaría crear hoy mismo con IA. Luego identifica:</p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                      <li>Qué herramientas usarías</li>
                      <li>En qué orden las combinarías</li>
                  </ul>
                  <div className="bg-card p-4 rounded-lg border">
                      <p className="font-semibold mb-2">Ejemplo guía:</p>
                      <p className="text-sm"><strong>Quiero:</strong> una historia infantil ilustrada y narrada →<br />ChatGPT para el texto → Ideogram para las imágenes → ElevenLabs para la voz</p>
                  </div>
              </CardContent>
            </Card>
            <Card className="mt-6">
                <CardHeader><CardTitle className="text-lg flex items-center gap-2"><PlayCircle className="h-5 w-5 text-primary" />Vídeo Resumen</CardTitle></CardHeader>
                <CardContent><div className="aspect-video bg-muted rounded-lg flex items-center justify-center"><p className="text-muted-foreground">Próximamente: Vídeo de la lección 1.2</p></div></CardContent>
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
