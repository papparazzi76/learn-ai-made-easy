import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FlaskConical, Brain } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const models = [
  { name: "GPT-3.5", usedIn: "ChatGPT Free", special: "Rápido, gratuito, bueno para empezar" },
  { name: "GPT-4o", usedIn: "ChatGPT Plus", special: "Más inteligente, entiende imágenes, voz" },
  { name: "Claude 3", usedIn: "Claude AI", special: "Muy bueno para entender documentos" },
  { name: "Gemini 1.5", usedIn: "Gemini Google", special: "Razonamiento + contexto + imágenes" },
  { name: "Mistral", usedIn: "LM Studio / Ollama (local)", special: "Gratuito, instalable, muy ágil" },
  { name: "LLaMA 3", usedIn: "Meta, open source", special: "Versátil y entrenado para lenguaje real" },
];

const usageGuide = [
    { question: "¿Quieres algo gratuito para aprender?", answer: "GPT-3.5 o Perplexity" },
    { question: "¿Necesitas ayuda profesional real?", answer: "GPT-4o o Claude 3 Opus" },
    { question: "¿Quieres probar IA en tu PC sin internet?", answer: "Mistral o LLaMA en LM Studio" },
]

export const Lesson1_4 = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-3">
          <Brain className="h-6 w-6 text-primary" />
          Lección 1.4 – ¿Qué es un modelo de IA (sin enrollarse)?
        </CardTitle>
        <CardDescription className="mt-2">
          Entender qué es un modelo de IA, por qué hay tantos nombres raros (GPT-4, Claude 3, Mistral…) y cómo saber cuál elegir, sin entrar en líos técnicos.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="prose prose-sm max-w-none dark:prose-invert">
          <p className="text-lg">
            Un modelo de IA es como el <strong>“cerebro”</strong> que está detrás de cada herramienta. Es el que entiende lo que escribes y genera una respuesta.
          </p>
          <p>Piensa en esto:</p>
          <blockquote className="border-l-4 border-primary pl-4 italic">
            <strong>ChatGPT ≠ GPT-4.</strong><br/>
            ChatGPT es la app. GPT-4 es el motor que tiene dentro. Es como si la IA fuera un coche y el modelo fuera el motor.
          </blockquote>
          <h3>Tipos de modelos más comunes:</h3>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Modelo</TableHead>
              <TableHead>¿Dónde se usa?</TableHead>
              <TableHead>¿Qué lo hace especial?</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {models.map((model) => (
              <TableRow key={model.name}>
                <TableCell className="font-medium">{model.name}</TableCell>
                <TableCell>{model.usedIn}</TableCell>
                <TableCell>{model.special}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="prose prose-sm max-w-none dark:prose-invert">
            <h3>¿Cómo saber cuál usar?</h3>
        </div>

        <div className="space-y-2">
            {usageGuide.map((item, index) => (
                 <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <p className="font-medium">{item.question}</p>
                    <Badge variant="default" className="ml-4 shrink-0 bg-primary/20 text-primary">{item.answer}</Badge>
                </div>
            ))}
        </div>

        <Card className="bg-gradient-subtle border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <FlaskConical className="h-5 w-5 text-primary" />
              Ejercicio práctico
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Usa Perplexity y pregunta:
            </p>
            <div className="bg-card p-4 rounded-lg border font-mono text-sm">
              Hazme una tabla comparativa entre GPT-4, Claude 3 y Gemini 1.5 con ventajas y desventajas.
            </div>
            <p className="mt-4">
              Luego, repite en ChatGPT o Gemini. Compara cómo responde cada modelo.
            </p>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  </div>
);
