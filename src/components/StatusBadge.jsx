import { motion } from "framer-motion"
import { useOpenStatus } from "../hooks/useOpenStatus"

export default function StatusBadge() {
  const status = useOpenStatus()

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium glass-card ${
        status.aberto ? "text-verde-escuro dark:text-fundo-bege" : "text-vermelho-escuro dark:text-vermelho"
      }`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${
            status.aberto ? "bg-verde" : "bg-vermelho"
          }`}
        />
        <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${status.aberto ? "bg-verde" : "bg-vermelho"}`} />
      </span>
      {status.aberto ? "Aberto agora" : "Fechado agora"}
      <span className="text-verde-oliva/80 dark:text-fundo-bege/60">· {status.label}</span>
    </motion.div>
  )
}
