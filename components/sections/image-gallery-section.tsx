"use client"

import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function ImageGallerySection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const images = [
    {
      src: "/images/gladys-interview.jpeg",
      alt: "Gladys La Bomba Tucumana siendo entrevistada en la apertura de La Bomba Empanadas Tucumanas",
    },
    {
      src: "/images/gladys-singing.jpeg",
      alt: "Gladys La Bomba Tucumana cantando en un evento de La Bomba Empanadas Tucumanas",
    },
    {
      src: "/images/empanadas-store-front.jpeg",
      alt: "Plato de empanadas frente a la entrada de La Bomba Empanadas Tucumanas",
    },
    {
      src: "/images/neon-sign.jpeg",
      alt: "Cartel de neón con frase 'Un pasito para acá Un pasito para allá Gladys' y logo de empanada",
    },
    {
      src: "/images/gladys-locro.jpeg",
      alt: "Gladys La Bomba Tucumana sosteniendo un plato de locro",
    },
  ]

  const scrollToImage = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      // Assuming each image takes up the full width of the container
      const imageWidth = container.clientWidth
      container.scrollTo({
        left: index * imageWidth,
        behavior: "smooth",
      })
      setCurrentIndex(index)
    }
  }

  const scrollLeft = () => {
    if (currentIndex > 0) {
      scrollToImage(currentIndex - 1)
    }
  }

  const scrollRight = () => {
    if (currentIndex < images.length - 1) {
      scrollToImage(currentIndex + 1)
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollLeft = container.scrollLeft
      const imageWidth = container.clientWidth
      const newIndex = Math.round(scrollLeft / imageWidth)

      setCurrentIndex(newIndex)
      setCanScrollLeft(newIndex > 0)
      setCanScrollRight(newIndex < images.length - 1)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
      // Initial check for scroll buttons
      handleScroll()
      return () => container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section id="image-gallery" className="w-full py-10 md:py-20 lg:py-24 bg-black overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-yellow">Momentos de La Bomba</h2>
          <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Revive algunos de nuestros momentos más especiales y el sabor que nos define.
          </p>
        </div>

        <div className="relative max-w-xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-gray-900">
          {/* Navigation arrows */}
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-all duration-300 shadow-lg"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-all duration-300 shadow-lg"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Scrollable image container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory h-[400px] md:h-[500px] scrollbar-hide"
          >
            {images.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-full snap-center flex justify-center items-center">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={800}
                  height={500}
                  sizes="(max-width: 768px) 100vw, 800px"
                  quality={75}
                  loading="lazy"
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToImage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary-yellow w-6" : "bg-white/50"
                }`}
                aria-label={`Ir a la imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
