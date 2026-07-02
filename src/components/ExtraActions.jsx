import { motion } from "framer-motion"
import { breweryConfig } from "../config/breweryConfig"
import { trackEvent } from "../utils/analytics"
import ShareButton from "./ShareButton"
import QRCodeBlock from "./QRCodeBlock"

export default function ExtraActions() {
  return (
    <section aria-label="Mais sobre a casa" className="mt-10 flex flex-col gap-3 px-6">
      <motion.a
        href={breweryConfig.googleReviews}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("click_link", { link: "avaliacoes" })}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="glass-card flex items-center justify-between rounded-2xl px-5 py-3.5 text-sm font-medium text-verde-escuro dark:text-fundo-branco"
      >
        <span className="flex items-center gap-2">
          <span aria-hidden="true">⭐</span> Avalie-nos no Google
        </span>
        <span className="text-verde-escuro/40 dark:text-fundo-bege/40">›</span>
      </motion.a>

      {breweryConfig.ytMusicPlaylist && (
        <motion.a
          href={breweryConfig.ytMusicPlaylist}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("click_link", { link: "yt_music" })}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="glass-card flex items-center justify-between rounded-2xl px-5 py-3.5 text-sm font-medium text-verde-escuro dark:text-fundo-branco"
        >
          <span className="flex items-center gap-2">
            <span aria-hidden="true">🎵</span> Playlist da Casa
          </span>
          <span className="text-verde-escuro/40 dark:text-fundo-bege/40">›</span>
        </motion.a>
      )}

      <ShareButton />
      <QRCodeBlock />
    </section>
  )
}
