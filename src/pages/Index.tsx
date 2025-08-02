import Hero from "@/components/Hero";
import CourseStructure from "@/components/CourseStructure";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CourseStructure />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
