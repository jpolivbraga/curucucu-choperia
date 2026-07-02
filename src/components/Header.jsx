import { motion } from "framer-motion"
import { breweryConfig } from "../config/breweryConfig"
import StatusBadge from "./StatusBadge"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  return (
    <header className="relative flex flex-col items-center px-6 pt-10 text-center">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="archway"
      >
        <img
          src={breweryConfig.logoUrl}
          alt={`Logo ${breweryConfig.nome}`}
          width="112"
          height="112"
          className="h-28 w-28 rounded-full object-cover"
          loading="eager"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="font-display underline-hand mt-5 text-3xl font-semibold tracking-tight text-verde-escuro dark:text-fundo-branco"
      >
        {breweryConfig.nome}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="mt-4 max-w-xs text-sm leading-relaxed text-verde-escuro/80 dark:text-fundo-bege/80"
      >
        {breweryConfig.descricao} — {breweryConfig.cidade}
      </motion.p>

      <div className="mt-4">
        <StatusBadge />
      </div>
    </header>
  )
}
