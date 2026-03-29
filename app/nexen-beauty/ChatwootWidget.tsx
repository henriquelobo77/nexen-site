'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    chatwootSettings?: Record<string, unknown>
    chatwootSDK?: {
      run: (config: { websiteToken: string; baseUrl: string }) => void
    }
  }
}

const BASE_URL = 'https://chat.nexentecnologia.com.br'
const SCRIPT_ID = 'chatwoot-sdk'

export function ChatwootWidget() {
  useEffect(() => {
    // Já carregou antes? Não carrega de novo
    if (document.getElementById(SCRIPT_ID)) return

    // Settings ANTES de carregar o SDK
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: 'right',
      locale: 'pt_BR',
      type: 'expanded_bubble',
      launcherTitle: 'Testar o agente',
      showPopoutButton: false,
    }

    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.src = `${BASE_URL}/packs/js/sdk.js`
    script.async = true

    script.onload = () => {
      window.chatwootSDK?.run({
        websiteToken: 'w5zgFDtzg4xDQiaiCzQod3ez',
        baseUrl: BASE_URL,
      })
    }

    document.head.appendChild(script)

    // Cleanup: remove tudo ao sair da página
    return () => {
      const el = document.getElementById(SCRIPT_ID)
      if (el) el.remove()

      // Remove os elementos do widget do DOM
      document.querySelectorAll(
        '.woot-widget-holder, .woot--bubble-holder, .woot-widget-bubble, #chatwoot_live_chat_widget'
      ).forEach((node) => node.remove())

      // Remove estilos injetados pelo Chatwoot
      document.querySelectorAll('style[data-emotion], link[href*="chatwoot"]').forEach((node) => node.remove())

      delete window.chatwootSettings
    }
  }, [])

  return null
}
