import { Card } from "@/components/ui/card"
import {
  DollarSign,
  BookOpen,
  Users,
  CheckCircle,
  MapPin,
  Lightbulb,
  Handshake,
  Factory,
  Award,
  Star,
  Shield,
} from "lucide-react"
import Image from "next/image"

export function BenefitsSection() {
  const whyChoose = [
    {
      icon: Award,
      title: "Marca líder reconocida",
      description: "Respaldo de una marca consolidada en el mercado argentino",
    },
    {
      icon: Star,
      title: "Recetas tradicionales tucumanas",
      description: "Auténtico sabor del norte con ingredientes de los Valles Calchaquíes",
    },
    {
      icon: Shield,
      title: "Soporte completo",
      description: "Acompañamiento integral desde la apertura hasta el crecimiento",
    },
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: "Negocio rentable",
      description: "Modelo probado con excelente retorno de inversión y múltiples fuentes de ingresos.",
    },
    {
      icon: BookOpen,
      title: "Capacitación completa",
      description: "Asistencia en la apertura y acompañamiento constante para el éxito de tu negocio.",
    },
    { icon: Users, title: "Pocos empleados", description: "Necesarios para el funcionamiento eficiente del local." },
    {
      icon: CheckCircle,
      title: "Gestión simplificada",
      description: "Facilitamos tu gestión de compra de mercadería e insumos.",
    },
    { icon: MapPin, title: "Locales compactos", description: "Locales chicos y de fácil operación." },
    { icon: Lightbulb, title: "Marketing y apoyo", description: "Publicidad y soporte del equipo de La Bomba." },
    {
      icon: Handshake,
      title: "Ubicación estratégica",
      description: "Asesoramiento para la selección de la mejor ubicación y análisis de mercado.",
    },
    {
      icon: Factory,
      title: "Know-how completo",
      description: "Transferencia de conocimiento con todos los manuales operativos.",
    },
  ]

  return (
    <section id="benefits" className="w-full py-12 md:py-16 lg:py-20 bg-primary-yellow text-dark-charcoal">
      <div className="container px-4 md:px-6">
        {/* Why Choose La Bomba Section - Title only */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-3">
            ¿Por qué elegir una franquicia de La Bomba?
          </h2>
        </div>

        {/* New catchy paragraph and subtitle - Moved and improved */}
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <Image
              src="/images/gladys-new-pose.jpeg"
              alt="Gladys La Bomba Tucumana"
              width={120}
              height={120}
              sizes="120px"
              quality={75}
              loading="lazy"
              className="rounded-full object-cover border-4 border-dark-charcoal shadow-lg"
            />
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-extrabold text-dark-charcoal drop-shadow-md leading-tight">
                ¡Gladys va a estar en cada sucursal de La Bomba Empanadas Tucumanas!!!!
              </p>
              <p className="text-lg md:text-xl text-dark-charcoal/90">
                Así es, Gladys con su amor y recetas acompaña cada franquicia, porque el amor y la autenticidad que la
                caracteriza ha sido su inspiración en la construcción de esta marca.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {whyChoose.map((item, index) => (
            <Card
              key={index}
              className="p-6 text-center shadow-lg bg-white rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-primary-yellow/20"
            >
              <item.icon className="h-12 w-12 text-primary-yellow mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2 text-dark-charcoal">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Beneficios de nuestra franquicia</h2>
          <p className="text-lg text-dark-charcoal/80 max-w-3xl mx-auto">
            Unirse a La Bomba Empanadas Tucumanas significa formar parte de una marca reconocida con un modelo de
            negocio probado y rentable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-4 text-center shadow-md bg-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <benefit.icon className="h-10 w-10 text-primary-yellow mb-3 mx-auto" />
              <h3 className="text-lg font-bold mb-1 text-dark-charcoal">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
