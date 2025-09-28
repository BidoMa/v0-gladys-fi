import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { ProductsSection } from "@/components/sections/products-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { LocationsProductionSection } from "@/components/sections/locations-production-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { FaqSection } from "@/components/sections/faq-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"
import { ImageGallerySection } from "@/components/sections/image-gallery-section"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProductsSection />
        <BenefitsSection />
        <LocationsProductionSection />
        <ImageGallerySection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
