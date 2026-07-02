import { useEffect, useState } from "react"
import { breweryConfig, diasSemana, diasLabel } from "../config/breweryConfig"

function parseMinutes(hhmm) {
  const [h, m] = hhmm.split(":").map(Number)
  return h * 60 + m
}

function computeStatus(now) {
  const dayKey = diasSemana[now.getDay()]
  const today = breweryConfig.horarioFuncionamento[dayKey]
  const nowMinutes = now.getHours() * 60 + now.getMinutes()

  if (today) {
    const abre = parseMinutes(today.abre)
    let fecha = parseMinutes(today.fecha)
    if (fecha <= abre) fecha += 24 * 60
    const adjustedNow = nowMinutes < abre && fecha > 24 * 60 ? nowMinutes + 24 * 60 : nowMinutes
    if (adjustedNow >= abre && adjustedNow < fecha) {
      return { aberto: true, horarioHoje: today, label: `Fecha às ${today.fecha}` }
    }
  }

  for (let i = 1; i <= 7; i++) {
    const nextDayIndex = (now.getDay() + i) % 7
    const nextKey = diasSemana[nextDayIndex]
    const nextSchedule = breweryConfig.horarioFuncionamento[nextKey]
    if (nextSchedule) {
      const label = i === 1 ? `Abre amanhã às ${nextSchedule.abre}` : `Abre ${diasLabel[nextKey]} às ${nextSchedule.abre}`
      return { aberto: false, horarioHoje: today, label }
    }
  }

  return { aberto: false, horarioHoje: today, label: "Horário sob consulta" }
}

export function useOpenStatus() {
  const [status, setStatus] = useState(() => computeStatus(new Date()))

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(computeStatus(new Date()))
    }, 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  return status
}
