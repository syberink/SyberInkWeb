import { defineThemeConfig } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "https://syber.ink",

  author: {
    name: "Syber Ink",
    url: "https://syber.ink",
  },

  iconPrefix: "fa-solid fa-",

  logo: "/syber.ink.logo.svg",
  // logo: '/logo.png',
  // themeColor: {
  //   blue: "#2196f3",
  //   red: "#f26d6d",
  //   green: "#3eaf7c",
  //   orange: "#fb9b5f",
  // },
  themeColor: false,
  darkmode: 'auto-switch',
  fullscreen: false,
  footer: "<img src='https://img.shields.io/github/license/syberink/SyberInkWiki'/>",
  copyright: "Copyright © 2022-present",

  repo: "https://github.com/syberink",
  docsRepo: "https://github.com/syberink/SyberInkWiki",
  // repoDisplay: false,
  docsDir: "/",

  pageInfo: ["Author", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    medias: {
      GitHub: "https://github.com/syberink",
      Twitter: "https://twitter.com/syber_ink",
      Discord: "https://discord.gg/syber_ink", 
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Dribbble: "https://example.com",
      // Email: "https://example.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      // Gitlab: "https://example.com",
      // Gmail: "https://example.com",
      // Instagram: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com", 
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: navbar.en, 
      // sidebar
      sidebar: sidebar.en,


      displayFooter: true,

      blog: {
        logo: '',
        description: "A FrontEnd programmer",
        intro: "/intro.html",
      },
      selectLanguageName: 'English',
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: navbar.zh,

      // sidebar
      sidebar: sidebar.zh, 

      displayFooter: true,

      // blog: {
      //   // description: "一个前端开发者",
      //   // intro: "/zh/intro.html",
      // },
      selectLanguageText: '选择语言',
      // selectLanguageAriaLabel: '选择语言',
      // selectLanguageName: '简体中文',
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
      "/zh/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    search: {
      locales: {
        '/': {
          placeholder: 'Search',
        },
        "/zh/": {
          placeholder: "搜索",
        },
      },
    },
    blog: {
      autoExcerpt: true,
    },

    // you can also use Waline
    comment: {
      type: "giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});  