import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Trophy, CheckCircle, XCircle, AlertTriangle } from "lucide-react";

const questions = [
    { id: 'q1', text: '¿Qué es un modelo de IA?', options: ['Una aplicación con botones para generar imágenes', 'Un tipo de prompt predefinido', 'El motor que genera las respuestas y crea contenido', 'Un plugin que se instala en Word'], correctAnswer: 'C' },
    { id: 'q2', text: '¿Cuál de estas herramientas es un asistente multimodal?', options: ['Midjourney', 'ChatGPT-4o', 'Canva', 'Fireflies'], correctAnswer: 'B' },
    { id: 'q3', text: '¿Qué herramienta es conocida por generar música con IA?', options: ['Suno', 'Ideogram', 'Claude', 'Fireflies'], correctAnswer: 'A' },
    { id: 'q4', text: '¿Qué modelo es gratuito y se puede usar sin cuenta?', options: ['Gemini Pro', 'Claude 3 Opus', 'Perplexity AI', 'GPT-4o'], correctAnswer: 'C' },
    { id: 'q5', text: '¿Qué hace un “prompt”?', options: ['Optimiza el rendimiento de la IA', 'Es el motor de procesamiento interno', 'Es la instrucción que escribes a la IA', 'El código fuente de la herramienta'], correctAnswer: 'C' },
    { id: 'q6', text: '¿Cuál de estas opciones SÍ puede instalarse en tu PC sin conexión?', options: ['ChatGPT', 'Claude', 'LLaMA 3 / Mistral con LM Studio', 'Gemini'], correctAnswer: 'C' },
    { id: 'q7', text: '¿Qué IA es mejor para leer y entender documentos largos como PDFs?', options: ['DALL·E', 'AskYourPDF', 'Runway', 'Ideogram'], correctAnswer: 'B' },
    { id: 'q8', text: '¿Qué IA está integrada en Microsoft Word y Excel?', options: ['Gamma', 'Grok', 'Claude', 'Copilot'], correctAnswer: 'D' },
    { id: 'q9', text: '¿Cuál de estas IAs es conocida por responder con sarcasmo y humor?', options: ['Claude', 'Grok', 'Gemini', 'Google AI Studio'], correctAnswer: 'B' },
    { id: 'q10', text: '¿Qué IA puedes usar para crear un avatar que habla?', options: ['Hedra', 'Fireflies', 'Udio', 'Suno'], correctAnswer: 'A' },
    { id: 'q11', text: '¿Qué significa que una IA sea “open source”?', options: ['Solo funciona en Android', 'Tiene acceso ilimitado a internet', 'Puedes modificarla o instalarla tú mismo', 'Está alojada en servidores de pago'], correctAnswer: 'C' },
    { id: 'q12', text: '¿Cuál de estas IA permite crear presentaciones automáticas y visuales?', options: ['Midjourney', 'Firefly', 'Gamma App', 'Claude'], correctAnswer: 'C' },
    { id: 'q13', text: '¿Qué IA sería ideal para crear una imagen con texto (por ejemplo, un cartel)?', options: ['Ideogram', 'Suno', 'Claude', 'Perplexity'], correctAnswer: 'A' },
    { id: 'q14', text: '¿Qué es mejor para generar vídeo realista a partir de texto?', options: ['LLaMA 3', 'AlphaFold', 'Luma Dream Machine', 'Hedra'], correctAnswer: 'C' },
    { id: 'q15', text: '¿Cuál de estas opciones describe mejor a N8N?', options: ['IA para crear memes', 'Herramienta open source de automatización', 'Plataforma para hacer logos', 'IA para cantar'], correctAnswer: 'B' },
];

export const Quiz1 = () => {
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [result, setResult] = useState<{ score: number; passed: boolean } | null>(null);
    const [attempts, setAttempts] = useState(0);

    const handleAnswerChange = (questionId: string, value: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const handleSubmit = () => {
        if (attempts >= 3) return;
        
        let score = 0;
        questions.forEach(q => {
            const selectedOption = answers[q.id];
            if (selectedOption && selectedOption === q.correctAnswer) {
                score++;
            }
        });
        
        setResult({ score, passed: score >= 10 });
        setAttempts(prev => prev + 1);
    };

    const handleRetry = () => {
        setAnswers({});
        setResult(null);
    }
    
    if (result) {
        return (
            <Card className={result.passed ? "border-green-500" : "border-destructive"}>
                <CardHeader className="text-center">
                    {result.passed ? (
                        <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
                    ) : (
                        <XCircle className="mx-auto h-12 w-12 text-destructive" />
                    )}
                    <CardTitle className="text-2xl">{result.passed ? '¡Enhorabuena, has aprobado!' : 'Necesitas repasar un poco más'}</CardTitle>
                    <CardDescription>
                        Has acertado {result.score} de {questions.length} preguntas.
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                     {result.passed ? (
                         <p>¡Perfecto! Ya puedes pasar al Módulo 2.</p>
                     ) : (
                         <>
                            {attempts < 3 ? (
                                <div>
                                    <p>No está mal… pero repasa algunas lecciones antes de reintentar.</p>
                                    <p className="text-sm text-muted-foreground">Te quedan {3 - attempts} intentos.</p>
                                    <Button onClick={handleRetry} className="mt-4">Reintentar examen</Button>
                                </div>
                            ) : (
                                <div className="p-4 bg-destructive/10 rounded-lg">
                                    <AlertTriangle className="mx-auto h-8 w-8 text-destructive mb-2" />
                                    <p className="font-semibold">Has agotado todos tus intentos.</p>
                                    <p className="text-sm">Por favor, repasa el contenido del módulo 1.</p>
                                </div>
                            )}
                         </>
                     )}
                </CardContent>
            </Card>
        )
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                    <Trophy className="h-6 w-6 text-primary" />
                    Examen final Módulo 1: “Bienvenido al Universo IA”
                </CardTitle>
                <CardDescription className="mt-2">
                    Debes acertar 10 de 15 preguntas para aprobar. Dispones de {3-attempts} intentos. ¡Lee con calma, y piensa como una IA humana!
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
                {questions.map((q, index) => (
                    <div key={q.id}>
                        <p className="font-medium mb-4">{index + 1}. {q.text}</p>
                        <RadioGroup onValueChange={(value) => handleAnswerChange(q.id, value)}>
                            {q.options.map((option, i) => {
                                const optionId = String.fromCharCode(65 + i); // A, B, C, D
                                return (
                                    <div key={i} className="flex items-center space-x-2">
                                        <RadioGroupItem value={optionId} id={`${q.id}-${optionId}`} />
                                        <Label htmlFor={`${q.id}-${optionId}`}>{option}</Label>
                                    </div>
                                )
                            })}
                        </RadioGroup>
                    </div>
                ))}
                <Button onClick={handleSubmit} disabled={Object.keys(answers).length < questions.length || attempts >= 3} className="w-full">
                    Entregar examen
                </Button>
            </CardContent>
        </Card>
    );
};
