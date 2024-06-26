import { defineConfig } from 'vitepress'

export default defineConfig({
        lang: 'zh-CN',
        base: '/vitepress/',
        title: 'Hero',
        description: '基于 vitepress 的文档模板',
        head: [
        ['link', { rel: 'icon', href: '/favicon.png' }],
        ['link', { rel: 'stylesheet', href: 'https://unpkg.com/simple-icons-font@v11/font/simple-icons.min.css'}],
        ['link', { rel: 'stylesheet', href: 'https://unpkg.com/lxgw-wenkai-screen-web@1.330.1/lxgwwenkaiscreen/result.css'}],
        ],
        themeConfig: {
                logo: 'logo.svg',
                footer: {
                        message: 'Released under the MIT License.',
                        copyright: 'Copyright © 2022 markthree'
                },
                nav: [
                        {
                                text: 'Guide',
                                link: '/guide/'
                        },
                        {
                                text: 'About',
                                link: '/about/'
                        }
                ],
                socialLinks: [
                        {
                                icon: 'github',
                                link: 'https://github.com/name/repo'
                        }
                ],
sidebar: [
      {
        //分组标题
        text: '指南',
        items: [
          { text: 'Guide', link: '/guide' },
          { text: 'about', link: '/about' },
        ],
      },
    ],
        }
})