import { QRCodeSVG } from "qrcode.react"
import { breweryConfig } from "../config/breweryConfig"

export default function QRCodeBlock() {
  return (
    <div className="glass-card flex flex-col items-center gap-3 rounded-2xl px-5 py-5 text-center">
      <div className="rounded-xl bg-fundo-branco p-3 shadow-inset">
        <QRCodeSVG
          value={breweryConfig.siteUrl}
          size={140}
          fgColor="#2B3B2B"
          bgColor="#FFF8EF"
          level="M"
        />
      </div>
      <p className="text-xs text-verde-escuro/70 dark:text-fundo-bege/70">
        Aponte a câmera do seu celular e acesse tudo sobre a casa em segundos.
      </p>
    </div>
  )
}
