import { breweryConfig } from "../config/breweryConfig"

export function initAnalytics() {
  const { googleAnalyticsId, metaPixelId } = breweryConfig.analytics

  if (googleAnalyticsId) {
    const script = document.createElement("script")
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag() { window.dataLayer.push(arguments) }
    gtag("js", new Date())
    gtag("config", googleAnalyticsId)
    window.gtag = gtag
  }

  if (metaPixelId) {
    /* eslint-disable */
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js')
    window.fbq("init", metaPixelId)
    window.fbq("track", "PageView")
    /* eslint-enable */
  }
}

export function trackEvent(eventName, params = {}) {
  if (window.gtag) window.gtag("event", eventName, params)
  if (window.fbq) window.fbq("trackCustom", eventName, params)
}
