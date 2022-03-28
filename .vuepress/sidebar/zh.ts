import { defineSidebarConfig } from "vuepress-theme-hope";

export const zh = defineSidebarConfig({
  "/zh/": [
    "welcome/", 
    {
      text: "公告",
      // icon: "bullhorn",
      prefix: "blog/announcements/",
      children: ["article1", "article2", "article3"],
    },
    {
      // icon: "lightbulb",
      text: "使用指南",
      prefix: "guide/",
      // link: "guide/",
      children: ["syber-connect"],
    },
    {
      text: "动态",
      // icon: "circle-info",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsable: true,
      prefix: "blog/news/",
      children: ["article4", "article5", "article6"],
    },
    {
      text: "FAQ",
      // icon: "circle-info", 
      collapsable: true,
      prefix: "blog/faq/",
      children: "structure",
    },
    {
      text: "Q&A",
      // icon: "circle-info", 
      collapsable: true,
      prefix: "blog/qa/",
      children: "structure",
    },
  ],
});
