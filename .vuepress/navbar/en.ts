import { defineNavbarConfig } from "vuepress-theme-hope";

export const en = defineNavbarConfig([
  "/", 
  { text: "ecosystem", icon: "group-arrows-rotate", link: "/ecosystem" },
  { text: "community", icon: "people-group", link: "/community" },
  { text: "DAO", icon: "building-columns", link: "/dao" },
  { text: "develope", icon: "layer-group", link: "/develope" },
  { text: "Guide", icon: "lightbulb", link: "/guide/" },
  {
    text: "Info",
    icon: "rss",
    // link: "/info/",
    // prefix: "/info/", 
    children: [
      { text: "All", icon: "square-rss", link: "/info/" },
      {
        text: "announcements", 
        prefix: "/info/announcements/",
        children: [
          { text: "Notice 1", icon: "bullhorn", link: "article1" },
          { text: "Notice 2", icon: "bullhorn", link: "article2" },
          { text: "Notice 3", icon: "bullhorn", link: "article3" }, 
        ],
      },
      {
        text: "news", 
        prefix: "/info/news/",
        children: [
          { text: "News 4", icon: "circle-info", link: "article4" },
          { text: "News 5", icon: "circle-info", link: "article5" },
          { text: "News 6", icon: "circle-info", link: "article6" }, 
        ],
      }, 
      { text: "FAQ", link: "/category/faq/" },
      { text: "Q&A", link: "/category/q&a/" }, 
    ],
  },
  {
    text: "🚀Launch APP", 
    // icon: "rocket",
    link: "https://app.syber.ink",
  },
]);
