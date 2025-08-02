import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AuthProvider } from "@/hooks/useAuth"
import QueryProvider from '@/components/QueryProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Curso de IA para Principiantes | Aprende Inteligencia Artificial Desde Cero',
  description: 'Conviértete en experto en IA con nuestro curso gratuito para principiantes. Aprende a usar ChatGPT, Midjourney y más herramientas con lecciones prácticas. ¡Empieza hoy!',
  keywords: 'curso inteligencia artificial, IA principiantes, ChatGPT, Midjourney, aprender IA gratis, curso IA online',
  authors: [{ name: 'IA Domus' }],
  openGraph: {
    title: 'Curso de IA para Principiantes | IA Domus',
    description: 'Aprende Inteligencia Artificial desde cero con el curso más práctico y divertido. De novato a experto en 30 días.',
    type: 'website',
    images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@lovable_dev',
    images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
  },
  alternates: {
    languages: {
      'es': 'https://iadomus.es/',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <QueryProvider>
          <AuthProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              {children}
            </TooltipProvider>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  )
}