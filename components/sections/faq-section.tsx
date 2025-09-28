import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "¿Cuánto tiempo toma abrir una franquicia?",
      answer:
        "El proceso completo desde la firma del contrato hasta la apertura suele tomar entre 3 y 4 meses, dependiendo de factores como la ubicación y las adecuaciones necesarias.",
    },
    {
      question: "¿Qué experiencia previa necesito?",
      answer:
        "No es necesaria experiencia previa en el rubro. Brindamos capacitación completa y acompañamiento constante para asegurar el éxito de tu negocio.",
    },
    {
      question: "¿Cuál es el retorno de inversión esperado?",
      answer: "El ROI estimado es de 18-24 meses. Depende de la ubicación y la gestión del franquiciado.",
    },
    {
      question: "¿Ofrecen exclusividad territorial?",
      answer:
        "Sí, ofrecemos exclusividad territorial según el formato de franquicia elegido, garantizando un radio de operación sin competencia de otras tiendas La Bomba Empanadas Tucumanas.",
    },
    {
      question: "¿Qué soporte post-apertura brindan?",
      answer:
        "Brindamos soporte continuo que incluye visitas periódicas, capacitaciones de actualización, asistencia en marketing y publicidad, y asesoramiento operativo permanente.",
    },
    {
      question: "¿Acompañan en la búsqueda del local?",
      answer:
        "La Bomba Empanadas Tucumanas te acompaña en la búsqueda y armado de local. Brindando apoyo y asesoramiento para elegir la ubicación más adecuada.",
    },
  ]

  return (
    <section id="faq" className="w-full py-10 md:py-20 lg:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-dark-charcoal">Preguntas frecuentes</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Respondemos tus dudas sobre nuestra franquicia.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-6">
          <Accordion type="single" collapsible className="w-full border rounded-lg shadow-md">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0">
                <AccordionTrigger className="text-lg font-semibold text-dark-charcoal hover:no-underline px-5 py-3">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base px-5 pb-3">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
