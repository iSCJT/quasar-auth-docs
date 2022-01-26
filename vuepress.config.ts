import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // site config
  lang: 'en-US',
  title: 'VueAuth',
  description: 'Vue Authentication Vue Made Easy!',

  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    sidebar: [
      {
        text: 'Guide',
        children: [
          '/guide/introduction',
          '/guide/setup',
        ],
      },
      {
        text: 'Auth Providers',
        collapsible: true,
        children: [
          '/providers/supabase',
          '/providers/firebase',
          '/providers/sanctum'
        ]
      }
    ]
  },
})