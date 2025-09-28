import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Award } from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      name: "Empanadas de Carne",
      description: "Cortada a cuchillo, 13 repulgues, pimiento y comino de Valles Calchaquíes.",
      image: "/images/empanada-carne.png",
    },
    {
      name: "Empanadas de Ternera",
      description: "Jugosas empanadas de ternera, con el toque casero de Gladys.",
      image: "/images/empanada-ternera.png",
    },
    {
      name: "Empanadas de Humita",
      description: "Dulces y cremosas, un clásico tucumano con el auténtico sabor del norte.",
      image: "/images/empanada-humita.png",
    },
    {
      name: "Sanguche de Milanesa",
      description: "Delicioso sanguche de milanesa con lechuga, tomate y todos los condimentos.",
      image: "/images/sanguche-milanesa.jpeg",
    },
    {
      name: "Tamales de Choclo",
      description: "Envueltos en chala, con el auténtico sabor del norte argentino.",
      image: "/images/tamal-choclo.png",
    },
    {
      name: "Locro",
      description: "Exquisito y abundante, ideal para compartir, con el sabor tradicional.",
      image: "/images/locro.jpeg",
    },
  ]

  return (
    <section id="products" className="w-full py-10 md:py-20 lg:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-1 text-center mb-8">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-dark-charcoal">Nuestros productos</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Contamos con más de 12 variedades de empanadas, humitas, tamales y un exquisito locro que también nos
              representa, además de opciones veggies. Productos íntegramente artesanales, mezcla de amor, pasión,
              regionalismo 100% y el toque especial de Gladys. Veni a conocer y a probar nuestras recetas!!!
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-stretch gap-6 py-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Card
              key={index}
              className="flex flex-col items-center p-4 text-center shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl rounded-xl border-2 border-primary-yellow/30 h-full"
            >
              <div className="w-full h-40 flex items-center justify-center mb-3">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={150}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={75}
                  loading="lazy"
                  className="rounded-lg object-cover border-2 border-primary-yellow/50 max-h-full max-w-full"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-1 text-dark-charcoal">{product.name}</h3>
                <p className="text-muted-foreground text-sm">{product.description}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <div className="relative bg-white p-8 rounded-2xl shadow-2xl max-w-4xl text-center border-4 border-primary-yellow/50 overflow-hidden">
            <div className="relative z-10">
              <Award className="h-16 w-16 text-primary-yellow mx-auto mb-4 drop-shadow-md" />
              <p className="text-xl md:text-2xl font-bold leading-relaxed text-dark-charcoal">
                Nuestra masa es reposada 12 horas, y los discos, cortados a mano. Por supuesto, la carne es cortada a
                cuchillo, hacemos 13 repulgues (como manda la tradición), y empleamos pimiento y comino extraído
                únicamente de los Valles Calchaquíes.
              </p>
              <p className="mt-4 text-lg font-medium text-dark-charcoal/80">— La Bomba Empanadas Tucumanas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
