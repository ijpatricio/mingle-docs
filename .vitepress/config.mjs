import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MingleJS",
  description: "Use JS components in Laravel Livewire Applications, with benefits.",
  srcDir: 'docs',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/what-is-minglejs' },
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is MingleJS?', link: '/what-is-minglejs' },
          { text: 'Getting Started', link: '/getting-started' }
        ],
      },
      { text: 'API Examples', link: '/api-examples' },
      { text: 'MD Examples', link: '/markdown-examples' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ijpatricio/mingle' }
    ]
  }
})
