import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConical, Bot } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const toolsWithAI = [
    { name: "Canva", aiFeature: "Magic Write (texto), Imagen IA", capability: "Generar textos, diseños e imágenes en segundos" },
    { name: "Notion", aiFeature: "Notion AI", capability: "Reescribir, resumir, organizar notas" },
    { name: "Microsoft Word", aiFeature: "Copilot (GPT-4)", capability: "Redacción, revisión, propuestas" },
    { name: "Zoom / Meet", aiFeature: "Fireflies, notas automáticas", capability: "Resúmenes de reuniones con IA" },
];

export const Lesson1_6 = () => (
    <div className="space-y-6">
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                    <Bot className="h-6 w-6 text-primary" />
                    Lección 1.6 – ¿Qué diferencia hay entre una IA y una herramienta con IA?
                </CardTitle>
                <CardDescription className="mt-2">
                    Distinguir entre lo que es realmente una inteligencia artificial y lo que es una herramienta que la usa por dentro.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="prose prose-sm max-w-none dark:prose-invert">
                     <p className="text-lg">
                        La IA es el motor (GPT, Claude, Gemini...)
                    </p>
                    <p className="text-lg">
                        La herramienta es el coche (ChatGPT, Perplexity, Canva, Notion, Runway...)
                    </p>
                    <ul className="list-disc list-inside">
                        <li>🤖 ChatGPT usa GPT</li>
                        <li>🎨 Canva usa IA de texto e imagen</li>
                        <li>📅 Notion usa IA para resumir, reescribir, organizar</li>
                    </ul>
                    <blockquote className="border-l-4 border-primary pl-4 italic">
                        💡 ¡No necesitas una IA pura para usar IA! Muchas herramientas tradicionales la han integrado sin que te des cuenta.
                    </blockquote>
                    <h3>Ejemplos de herramientas que ahora tienen IA “dentro”:</h3>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Herramienta</TableHead>
                            <TableHead>¿Qué IA incluye?</TableHead>
                            <TableHead>¿Qué puedes hacer?</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {toolsWithAI.map((tool) => (
                            <TableRow key={tool.name}>
                                <TableCell className="font-medium">{tool.name}</TableCell>
                                <TableCell>{tool.aiFeature}</TableCell>
                                <TableCell>{tool.capability}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                
                <Card className="bg-gradient-subtle border-primary/20">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <FlaskConical className="h-5 w-5 text-primary" />
                            Ejercicio práctico
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                            Entra a Canva y prueba lo siguiente:
                        </p>
                        <div className="bg-card p-4 rounded-lg border font-mono text-sm">
                            Quiero crear un post de Instagram sobre consejos para usar la IA en el trabajo, con una imagen de fondo estilo futurista y texto llamativo.
                        </div>
                        <p className="mt-4">
                            Luego edítalo y publica el resultado en la comunidad.
                        </p>
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    </div>
);
