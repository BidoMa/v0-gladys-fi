import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HubspotForm } from "@/components/hubspot-form"
import Link from "next/link"

export function HeroSection() {
  const hubspotFormProps = {
    portalId: "22460986",
    formId: "42c1366a-e739-4350-b499-9699643d7d5b",
    region: "na1",
  }

  return (
    <section id="hero" className="relative w-full py-8 md:py-12 lg:py-14 bg-dark-charcoal text-white overflow-hidden">
      <Image
        src="/images/gladys-hero.jpeg"
        alt="Gladys La Bomba Tucumana"
        fill
        sizes="100vw"
        quality={75}
        priority
        className="absolute inset-0 object-cover object-center opacity-35"
      />
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-6 items-center min-h-[55vh]">
          {/* Left side - Text content */}
          <div className="space-y-3 text-center lg:text-left lg:max-w-lg">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-primary-yellow drop-shadow-2xl leading-tight">
              Gladys "La Bomba Tucumana" se quitó la pollera para ponerse un delantal!
            </h1>
            <div className="space-y-2">
              <p className="text-lg md:text-xl font-medium drop-shadow-lg leading-relaxed">
                Si queres llevar el mejor sabor de las verdaderas empanadas tucumanas quien mejor que Gladys la más
                tucumana de todos para que te muestre.
              </p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
              <Link href="#contact" passHref>
                <Button className="bg-primary-yellow text-dark-charcoal hover:bg-primary-yellow/90 font-bold px-8 py-3 text-base shadow-2xl transition-all duration-300 hover:scale-105 rounded-full">
                  ¡Quiero mi franquicia!
                </Button>
              </Link>
            </div>
          </div>
          {/* Right side - HubSpot Form */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <div
                id="hero-hubspot-form"
                className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-5 border border-primary-yellow/30"
              >
                <div className="text-center mb-3">
                  <h2 className="text-xl font-bold text-dark-charcoal mb-1">¡El sabor del éxito te espera!</h2>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Un asesor experto se pondrá en contacto contigo para brindarte toda la información y guiarte en el
                    camino para abrir tu propia franquicia.
                  </p>
                </div>
                <HubspotForm {...hubspotFormProps} targetId="hero-hubspot-form" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
