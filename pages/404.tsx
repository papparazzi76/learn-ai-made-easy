export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Oops! Página no encontrada</p>
        <a 
          href="/" 
          className="text-primary hover:text-primary/80 underline transition-colors"
        >
          Volver al Inicio
        </a>
      </div>
    </div>
  )
}