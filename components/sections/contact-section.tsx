"use client"

import { Sparkles } from "lucide-react"
import Image from "next/image"
import { HubspotForm } from "@/components/hubspot-form"

export function ContactSection() {
  const hubspotFormProps = {
    portalId: "22460986",
    formId: "42c1366a-e739-4350-b499-9699643d7d5b",
    region: "na1",
  }

  return (
    <section id="contact" className="w-full py-6 md:py-10 lg:py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title and Description Section */}
        <div className="text-center space-y-2 mb-6">
          <Sparkles className="h-8 w-8 text-primary-yellow mx-auto" />
          <h2 className="text-2xl md:text-3xl font-black leading-tight text-dark-charcoal">
            ¿Tenés dudas sobre la franquicia?
          </h2>
          <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para resolver todas tus consultas y acompañarte en cada paso del
            proceso. Completá el formulario y te contactamos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Image Section */}
          <div className="relative">
            <Image
              src="/images/business-consultation.jpeg"
              alt="Consulta de negocios - Asesoramiento para franquicias La Bomba"
              width={500}
              height={350}
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={75}
              loading="lazy"
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/15 to-transparent rounded-xl"></div>
          </div>

          {/* Form Section */}
          <div className="flex flex-col justify-center">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-3">
              <div className="text-center mb-3">
                <h3 className="text-lg font-bold text-dark-charcoal mb-1">¿Listo para comenzar?</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Completá el formulario y un asesor se pondrá en contacto contigo para brindarte toda la información
                  sobre cómo abrir tu franquicia de La Bomba.
                </p>
              </div>
              <div className="hubspot-form-wrapper">
                <HubspotForm {...hubspotFormProps} targetId="contact-section-hubspot-form" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
