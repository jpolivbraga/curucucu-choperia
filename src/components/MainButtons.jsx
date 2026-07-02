import { motion } from "framer-motion"
import { breweryConfig } from "../config/breweryConfig"
import { trackEvent } from "../utils/analytics"

const whatsappUrl = `https://wa.me/${breweryConfig.whatsapp.numero}?text=${encodeURIComponent(
  breweryConfig.whatsapp.mensagemPadrao
)}`

const actions = [
  {
    id: "cardapio",
    label: "Cardápio Digital",
    sub: "Chopes, drinks e petiscos",
    icon: breweryConfig.iconesAcoes.cardapio,
    href: breweryConfig.cardapioPdf,
    accent: "from-amarelo to-amarelo-dourado"
  },
  {
    id: "quem-somos",
    label: "Quem Somos",
    sub: "Nossa história em Pirenópolis",
    icon: breweryConfig.iconesAcoes.quemSomos,
    href: breweryConfig.quemSomosPdf,
    accent: "from-verde to-verde-escuro"
  },
  {
    id: "whatsapp",
    label: "Fale Conosco",
    sub: "Reservas e dúvidas no WhatsApp",
    icon: breweryConfig.iconesAcoes.whatsapp,
    href: whatsappUrl,
    accent: "from-verde-oliva to-verde"
  },
  {
    id: "localizacao",
    label: "Localização",
    sub: breweryConfig.endereco.linha1,
    icon: breweryConfig.iconesAcoes.localizacao,
    href: breweryConfig.googleMaps,
    accent: "from-vermelho to-vermelho-escuro"
  },
  {
    id: "instagram",
    label: "Instagram",
    sub: breweryConfig.instagram.usuario,
    icon: breweryConfig.iconesAcoes.instagram,
    href: breweryConfig.instagram.url,
    accent: "from-terracota to-vermelho"
  }
]

export default function MainButtons() {
  return (
    <nav aria-label="Links principais" className="mt-8 flex flex-col gap-3 px-6">
      {actions.map((action, i) => (
        <motion.a
          key={action.id}
          href={action.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("click_link", { link: action.id })}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.07, duration: 0.45 }}
          whileHover={{ y: -3, scale: 1.015 }}
          whileTap={{ scale: 0.97 }}
          className="wood-button glass-card group flex items-center gap-4 rounded-2xl px-5 py-4 text-left transition-shadow hover:shadow-soft"
        >
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${action.accent} shadow-inset`}
            aria-hidden="true"
          >
            <img
              src={action.icon}
              alt=""
              className="h-6 w-6 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none"
              }}
            />
          </span>
          <span className="flex-1">
            <span className="font-display block text-lg font-semibold text-verde-escuro dark:text-fundo-branco">
              {action.label}
            </span>
            <span className="block text-xs text-verde-escuro/70 dark:text-fundo-bege/70">{action.sub}</span>
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
      ))}
    </nav>
  )
}
