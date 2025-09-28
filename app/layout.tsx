import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "La Bomba Empanadas Tucumanas | Franquicias y Sabor Auténtico de Gladys",
  description:
    "Descubre la oportunidad de franquiciar La Bomba Empanadas Tucumanas con el auténtico sabor de Gladys 'La Bomba Tucumana'. Negocio rentable, soporte completo y recetas tradicionales.",
  keywords: [
    "franquicia empanadas",
    "la bomba tucumana",
    "gladys la bomba",
    "empanadas tucumanas",
    "negocio rentable",
    "franquicia de comida",
    "inversión en gastronomía",
  ],
  openGraph: {
    title: "La Bomba Empanadas Tucumanas | Franquicias y Sabor Auténtico de Gladys",
    description:
      "Descubre la oportunidad de franquiciar La Bomba Empanadas Tucumanas con el auténtico sabor de Gladys 'La Bomba Tucumana'. Negocio rentable, soporte completo y recetas tradicionales.",
    url: "https://www.labombaempanadastucumanas.com", // Reemplaza con tu dominio real
    siteName: "La Bomba Empanadas Tucumanas",
    images: [
      {
        url: "/images/gladys-hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Gladys La Bomba Tucumana con empanadas",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Bomba Empanadas Tucumanas | Franquicias y Sabor Auténtico de Gladys",
    description:
      "Descubre la oportunidad de franquiciar La Bomba Empanadas Tucumanas con el auténtico sabor de Gladys 'La Bomba Tucumana'. Negocio rentable, soporte completo y recetas tradicionales.",
    images: ["/images/gladys-hero.jpeg"],
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PRXSXR2V');`,
          }}
        />
        {/* End Google Tag Manager */}
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PRXSXR2V"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  )
}
