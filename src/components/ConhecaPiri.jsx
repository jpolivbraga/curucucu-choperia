import { motion } from "framer-motion"
import { breweryConfig } from "../config/breweryConfig"
import { trackEvent } from "../utils/analytics"

export default function ConhecaPiri() {
  return (
    <section className="mt-10 px-6">
      <motion.a
        href={breweryConfig.conhecaPiri.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("click_link", { link: "conheca_piri" })}
        whileHover={{ y: -3, scale: 1.015 }}
        whileTap={{ scale: 0.97 }}
        className="wood-button glass-card group flex items-center gap-4 rounded-2xl px-5 py-4 text-left transition-shadow hover:shadow-soft"
      >
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-fundo-branco shadow-inset"
          aria-hidden="true"
        >
          <img
            src={breweryConfig.conhecaPiri.capa}
            alt=""
            className="h-8 w-8 rounded-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none"
            }}
          />
        </span>
        <span className="flex-1">
          <span className="font-display block text-lg font-semibold text-verde-escuro dark:text-fundo-branco">
            Conheça Piri
          </span>
          <span className="block text-xs text-verde-escuro/70 dark:text-fundo-bege/70">
            Atrativos naturais e mirantes da cidade
          </span>
        </span>
        <svg
          className="h-5 w-5 shrink-0 text-verde-escuro/40 transition-transform group-hover:translate-x-1 dark:text-fundo-bege/40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </motion.a>
    </section>
  )
}