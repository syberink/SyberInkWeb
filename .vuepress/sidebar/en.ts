import { defineSidebarConfig } from "vuepress-theme-hope";

export const en = defineSidebarConfig({
  "/": [
    "welcome/", 
    {
      text: "announcements",
      // icon: "bullhorn",
      prefix: "blog/announcements/",
      children: ["article1", "article2", "article3"],
    },
    {
      // icon: "lightbulb",
      text: "Guide",
      prefix: "guide/",
      // link: "guide/",
      children: ["syber-connect"],
    },
    {
      text: "news",
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
