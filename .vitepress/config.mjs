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
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Creating Mingles', link: '/creating-mingles.md' },
        ],
      },
      {
        text: 'Digging Deeper',
        items: [
          { text: 'Anatomy of a Mingle', link: '/anatomy-of-a-mingle' },
          { text: 'Manual Instructions', link: '/manual-instructions' },
          { text: 'Configuration', link: '/configuration' },
        ],
      },


      // { text: 'API Examples', link: '/api-examples' },
      // { text: 'MD Examples', link: '/markdown-examples' },

    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ijpatricio/mingle' }
    ]
  }
})
