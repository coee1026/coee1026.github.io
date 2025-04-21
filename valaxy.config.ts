import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonTwikoo } from 'valaxy-addon-twikoo'  //接入Twikoo评论系统
// import { addonMeting } from 'valaxy-addon-meting' //添加Meting音乐播放器

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]
/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',
  themeConfig: {
    banner: {
      enable: true,
      title: '無限进步',
    },


    pages: [
      // {
      //   name: '我的小伙伴们',
      //   url: '/links/',
      //   icon: 'i-ri-genderless-line',
      //   color: 'dodgerblue',
      // },
      // {
      //   name: '喜欢的女孩子',
      //   url: '/girls/',
      //   icon: 'i-ri-women-line',
      //   color: 'hotpink',
      // },
    ],
    //页脚
    footer: {
      since: 2025,
      powered: false,
      beian: {
        enable: false,
        icp: '',
      },
    },
  },
  siteConfig: {
    // 启用评论
    comment: {
      enable: true  //这里是评论的设置
    },
  },
    // 设置 valaxy-addon-twikoo 配置项
    // 设置 valaxy-addon-twikoo 配置项
  addons: [
    addonTwikoo({ // ri2AhuJutG4sdNwJ
      envId: 'https://twikoo-api-git-main-lis-projects-36388afa.vercel.app', // 自建服务地址
    }),
    //音乐播放器，如需要配置，请查看https://github.com/metowolf/MetingJS
    // addonMeting({
    //   global: true,
    //   /** @see https://github.com/metowolf/MetingJS */
    //   props: {
    //     id: '',
    //     server: '',
    //     type: '',
    //     mode: '',
    //   },
    // })
  ],

  //鼠标点击烟花特效
  // fireworks: {
  //   enable: true,
  //   colors: ['#FFE57D', '#FFCD88', '#E6F4AD']
  // },

  unocss: { safelist }, // add icons to safelist
})
