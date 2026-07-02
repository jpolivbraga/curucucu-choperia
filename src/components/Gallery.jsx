import { useRef } from "react"
import { motion } from "framer-motion"
import { breweryConfig } from "../config/breweryConfig"

export default function Gallery() {
  const trackRef = useRef(null)

  const scrollBy = (amount) => {
    trackRef.current?.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <section aria-label="Galeria de fotos" className="mt-10 px-6">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-display text-xl font-semibold text-verde-escuro dark:text-fundo-branco">
          A casa por dentro
        </h2>
        <div className="flex gap-2">
          <button
            aria-label="Voltar fotos"
            onClick={() => scrollBy(-220)}
            className="glass-card flex h-9 w-9 items-center justify-center rounded-full text-verde-escuro dark:text-fundo-branco"
          >
            ‹
          </button>
          <button
            aria-label="Avançar fotos"
            onClick={() => scrollBy(220)}
            className="glass-card flex h-9 w-9 items-center justify-center rounded-full text-verde-escuro dark:text-fundo-branco"
          >
            ›
          </button>
        </div>
      </div>

      <div ref={trackRef} className="scrollbar-hide flex gap-3 overflow-x-auto pb-2">
        {breweryConfig.galeria.map((img, i) => (
          <motion.img
            key={img.src}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            decoding="async"
            width="220"
            height="280"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="h-[280px] w-[220px] shrink-0 rounded-2xl object-cover shadow-soft"
          />
        ))}
      </div>
    </section>
  )
}
