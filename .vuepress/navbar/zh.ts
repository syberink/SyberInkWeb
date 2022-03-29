import { defineNavbarConfig } from "vuepress-theme-hope";

export const zh = defineNavbarConfig([
  "/zh/", 
  { text: "生态", icon: "group-arrows-rotate", link: "/zh/ecosystem" },
  { text: "社区", icon: "people-group", link: "/zh/community" },
  { text: "DAO", icon: "building-columns", link: "/zh/dao" },
  { text: "开发", icon: "layer-group", link: "/zh/develope" },
  { text: "指南", icon: "lightbulb", link: "/zh/guide/" },
  {
    text: "资讯",
    icon: "rss",
    // link: "/info/",
    // prefix: "/info/", 
    children: [
      { text: "全部", icon: "square-rss", link: "/zh/info/" },
      {
        text: "公告", 
        prefix: "/zh/info/announcements/",
        children: [
          { text: "公告 1", icon: "bullhorn", link: "article1" },
          { text: "公告 2", icon: "bullhorn", link: "article2" },
          { text: "公告 3", icon: "bullhorn", link: "article3" }, 
        ],
      },
      {
        text: "动态", 
        prefix: "/zh/info/news/",
        children: [
          { text: "动态 4", icon: "circle-info", link: "article4" },
          { text: "动态 5", icon: "circle-info", link: "article5" },
          { text: "动态 6", icon: "circle-info", link: "article6" }, 
        ],
      }, 
      { text: "FAQ", link: "/zh/category/faq/" },
      { text: "Q&A", link: "/zh/category/q&a/" }, 
    ],
  },
  {
    text: "🚀使用",
    // icon: "rocket",
    link: "https://app.syber.ink",
  }, 
]);
