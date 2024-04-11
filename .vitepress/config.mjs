import { defineConfig } from "vitepress";
import { set_sidebar } from "./utils/auto_sidebar";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  // head里面的href要写上base中的项目名字后跟icon.png
  head: [["link", { rel: "icon", href: "/palette/palette.png" }]],
  title: "Whitney's Palette",
  description: "A VitePress Site",
  // base必须写
  base: "/palette/",
  themeConfig: {
    logo: "/palette.png",
    // outlineTitle: "目录",
    outline: [1, 6],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "优化提效",
        items: [
          {
            text: "快速搭建一个文档站",
            link: "/优化提效/快速搭建一个文档站/开始.md",
          },
          {
            text: "chatGPT",
            link: "/优化提效/chatGPT/前端错误数据分析.md",
          },
        ],
      },
      {
        text: "项目小筑",
        items: [
          {
            text: "文档站项目km",
            link: "/项目小筑/文档站项目km/根据后端返回的文本进行换行显示.md",
          },
          {
            text: "机器人流程自动化rpa",
            link: "/项目小筑/机器人流程自动化rpa/脚本生成图标.md",
          },
        ],
      },
      {
        text: "前端基础",
        items: [
          {
            text: "js",
            link: "前端基础/js/import.meta.md",
          },
          {
            text: "css",
            link: "前端基础/css/index.md",
          },
          {
            text: "nodejs",
            link: "前端基础/nodejs/nvm安装.md",
          },
        ],
      },
    ],

    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    // ],
    sidebar: {
      "/优化提效": set_sidebar("/优化提效"),
      "/项目小筑": set_sidebar("/项目小筑"),
      "/前端基础": set_sidebar("/前端基础"),
      "/工具": set_sidebar("/工具"),
    },

    socialLinks: [{ icon: "github", link: "https://github.com/WhitneyDing" }],
    footer: {
      copyright: "Copyright © whitney2024",
    },
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
  },
});
