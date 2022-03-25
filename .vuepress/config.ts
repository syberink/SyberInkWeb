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
  locales: { 
    '/': {
      lang: 'en-US',
      title: 'Syber Ink Wiki',
      description: 'wiki(docs/API/...) of Syber.Ink, include Syber Connect',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Syber Ink Wiki',
      description: 'Syber.Ink 的 wiki(docs/API/...) , 包括 Syber Connect',
    },
  },
  themeConfig: {
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/zh/': {
        selectLanguageName: '简体中文',
      },
    },
  },
})