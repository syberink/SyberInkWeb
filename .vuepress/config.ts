// import { defineUserConfig } from 'vuepress'
import { defineHopeConfig } from "vuepress-theme-hope";
// import type { DefaultThemeOptions } from 'vuepress'
import themeConfig from "./themeConfig";

// export default defineUserConfig<DefaultThemeOptions>({  
export default defineHopeConfig({
  base: '/',
  dest: ".vuepress/dist",
  lang: 'en-US',
  // title: 'Syber Ink',
  description: 'wiki(docs/API/...) of Syber.Ink, include Syber Connect', 
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css' }] ,
    ['script', { crossorigin: 'stylesheet', src: 'https://kit.fontawesome.com/ca37c296c5.js' }] 
  ],
  locales: { 
    '/': {
      lang: 'en-US',
      // title: 'Syber Ink Wiki',
      description: 'wiki(docs/API/...) of Syber.Ink, include Syber Connect',
    },
    '/zh/': {
      lang: 'zh-CN',
      // title: 'Syber Ink Wiki',
      description: 'Syber.Ink 的 wiki(docs/API/...) , 包括 Syber Connect',
    },
  },
  // theme: '@vuepress/theme-default', 
  themeConfig,
});