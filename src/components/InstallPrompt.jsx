import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setVisible(true)
    }
    window.addEventListener("beforeinstallprompt", handler)
    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    await deferredPrompt.userChoice
    setDeferredPrompt(null)
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-md px-4 pb-4"
        >
          <div className="glass-card flex items-center justify-between gap-3 rounded-2xl px-4 py-3 shadow-soft">
            <p className="text-xs text-verde-escuro dark:text-fundo-branco">
              Adicione o Casarão à tela inicial para acesso rápido.
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                onClick={() => setVisible(false)}
                className="rounded-full px-3 py-1.5 text-xs text-verde-escuro/60 dark:text-fundo-bege/60"
              >
                Agora não
              </button>
              <button
                onClick={handleInstall}
                className="rounded-full bg-amarelo px-3 py-1.5 text-xs font-semibold text-verde-escuro"
              >
                Instalar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
