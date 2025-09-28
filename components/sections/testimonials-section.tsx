import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// No longer needed: import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const reviews = [
    {
      name: "Roxana Suica",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      time: "Hace 3 meses",
      text: "Muy rica la masa y el relleno. Probé las de carne en sus versiones. Muy buenas ambas y me gustó el detalle del limón para ponerle a la empanada. Mi hija comió de jamón y queso y le gustaron mucho. La chica que atiende muy amable, el local está impecable. Comimos en el lugar en sabado al mediodía. Buen precio, por 12 mil tenes 4 empanadas y una bebida, y calidad.",
      details: "Comida: 5/5 | Servicio: 5/5 | Ambiente: 5/5",
    },
    {
      name: "Facundo Beret",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      time: "una semana atrás",
      text: "Probé las empanadas de osobuco y de hongos al malbec y son excelentes. Dentro de un mercado tan explotado como lo es el de la empanada, esta casa tiene su propuesta personal.",
      details: "Comida: 5/5 | Servicio: 5/5 | Ambiente: 5/5",
    },
    {
      name: "Gabriela Zamora",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      time: "Hace un mes",
      text: "Muy ricas! De sabor gourmet, quizás para los que les gusta las empanadas grandes con sabores más básicos no es público al que apunta. El tamaño para mi gusto es ideal, muy sabrosas, frescas y caseras y doy fe por qué soy muy delicada del estómago y las digerí súper bien!",
      details: "Comida: 5/5 | Servicio: 5/5 | Ambiente: 5/5",
    },
  ]

  return (
    <section id="testimonials" className="w-full py-10 md:py-20 lg:py-24 bg-dark-charcoal text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-yellow">
              Lo que dicen nuestros clientes
            </h2>
            <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Escuchá las experiencias de quienes ya probaron el sabor auténtico de La Bomba.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-stretch gap-6 py-6 sm:grid-cols-1 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="p-4 shadow-md bg-white text-dark-charcoal rounded-xl border-2 border-primary-yellow/20 flex flex-col h-full"
            >
              <CardHeader className="flex flex-row items-center gap-4 p-0 mb-3">
                {/* Removed Avatar component */}
                <div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary-yellow text-primary-yellow" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">{review.time}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0 flex-1 flex flex-col">
                <p className="text-base mb-3 italic flex-1">"{review.text}"</p>
                <div className="mt-auto">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">{review.details}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
