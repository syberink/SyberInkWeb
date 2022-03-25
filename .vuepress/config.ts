import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({ 
  lang: 'en-US',
  title: 'Syber Ink Wiki',
  description: 'wiki(docs/API/...) of Syber.Ink, include Syber Connect', 
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo.png',
  },
})