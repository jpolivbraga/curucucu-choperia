import { breweryConfig } from "../config/breweryConfig"

export default function Footer() {
  return (
    <footer className="mt-10 px-6 pb-10 pt-6 text-center">
      <p className="font-display text-sm text-verde-escuro/70 dark:text-fundo-bege/60">
        Feito com tradição em Pirenópolis-GO
      </p>
      <p className="mt-1 text-xs text-verde-escuro/50 dark:text-fundo-bege/40">
        {breweryConfig.endereco.linha2}
      </p>
    </footer>
  )
}
