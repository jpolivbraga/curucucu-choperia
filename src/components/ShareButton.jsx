import { useState } from "react"
import { motion } from "framer-motion"
import { breweryConfig } from "../config/breweryConfig"
import { trackEvent } from "../utils/analytics"

export default function ShareButton() {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    trackEvent("click_share")
    const shareData = {
      title: breweryConfig.nome,
      text: breweryConfig.descricao,
      url: breweryConfig.siteUrl
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch {
        /* compartilhamento cancelado pelo usuário */
      }
      return
    }

    try {
      await navigator.clipboard.writeText(breweryConfig.siteUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard indisponível */
    }
  }

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={handleShare}
      className="glass-card flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium text-verde-escuro dark:text-fundo-branco"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="M8.6 13.5l6.8 4M15.4 6.5L8.6 10.5" />
      </svg>
      {copied ? "Link copiado!" : "Compartilhar página"}
    </motion.button>
  )
}
