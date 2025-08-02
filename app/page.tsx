import Hero from "@/components/Hero"
import CourseStructure from "@/components/CourseStructure"
import Features from "@/components/Features"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CourseStructure />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  )
}