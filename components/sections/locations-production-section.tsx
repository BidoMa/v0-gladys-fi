import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function LocationsProductionSection() {
  return (
    <section id="locations" className="w-full py-10 md:py-20 lg:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-dark-charcoal">
                CONTAMOS CON NUESTRO PROPIO CENTRO DE PRODUCCIÓN DESDE SAN MIGUEL DE TUCUMAN
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Para garantizar la integridad del producto y facilitar la operación del negocio a los franquiciados.
              </p>
            </div>
            <ul className="grid gap-2 py-3 text-dark-charcoal">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary-yellow flex-shrink-0 mt-1" />{" "}
                <span>Mantener la calidad en los productos que nos caracteriza.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary-yellow flex-shrink-0 mt-1" />{" "}
                <span>Facilitar la gestión de compras y abastecer tu negocio desde nuestro centro de producción.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary-yellow flex-shrink-0 mt-1" />{" "}
                <span>Disminuir los costos operativos y obtener una mejor rentabilidad.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary-yellow flex-shrink-0 mt-1" />{" "}
                <span>Asegurar la calidad e imagen de marca sólida en todas nuestras tiendas.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary-yellow flex-shrink-0 mt-1" />{" "}
                <span>Realizar acciones de publicidad centralizada para impactar en tus ventas.</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link href="#contact" passHref>
                <Button className="bg-primary-yellow text-dark-charcoal hover:bg-primary-yellow/90 font-bold px-8 py-3 text-lg shadow-md transition-all duration-300 hover:scale-105 rounded-full">
                  ¡Quiero mi franquicia!
                </Button>
              </Link>
            </div>
          </div>
          <Image
            src="/images/gladys-customer.jpeg"
            width={600}
            height={400}
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={75}
            loading="lazy"
            alt="Gladys La Bomba Tucumana interactuando con clientes"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-xl border-4 border-primary-yellow/50"
          />
        </div>
      </div>
    </section>
  )
}
