module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue Test Utils',
      description: 'Utilities for testing Vue components'
    },
    '/ja/': {
      lang: 'ja',
      title: 'Vue Test Utils',
      description: 'Vue コンポーネントをテストするためのユーティリティ'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Vue Test Utils',
      description: '测试 Vue 组件的实用工具'
    },
    '/ru/': {
      lang: 'ru',
      title: 'Vue Test Utils',
      description: 'Библиотека для тестирования Vue-компонентов'
    },
    '/fr/': {
      title: 'Vue Test Utils',
      lang: 'fr',
      description: 'Utilitaires pour tester les composants Vue'
    },
    '/pt/': {
      title: 'Vue Test Utils',
      lang: 'pt',
      description: 'Utilitários para testes de componentes de Vue'
    },
  },
  plugins: ['@vuepress/pwa'],
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'stylesheet', href: '/vueschool.css' }]
  ],
  theme: '@vuepress/vue',
  themeConfig: {
    algolia: {
      apiKey: 'ee1b8516c9e5a5be9b6c25684eafc42f',
      indexName: 'vue_test_utils',
      algoliaOptions: {
        facetFilters: ['tags:current']
      }
    },
    repo: 'vuejs/vue-test-utils',
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'dev',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'API',
            link: '/api/'
          },
          {
            text: 'Guides',
            link: '/guides/',
            items: [
              {
                text: 'v2 (Vue.js 3)',
                link: 'https://test-utils.vuejs.org/'
              }
            ]
          },
          {
            text: 'Upgrading to V1',
            link: '/upgrading-to-v1/'
          }
        ],
        sidebar: [
          '/',
          '/installation/',
          '/guides/',
          '/api/',
          '/api/wrapper/',
          '/api/wrapper-array/',
          '/api/options',
          '/api/components/'
        ]
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: 'API',
            link: '/zh/api/'
          },
          {
            text: '教程',
            link: '/zh/guides/',
            items: [
              {
                text: 'v2 (Vue.js 3)',
                link: 'https://test-utils.vuejs.org/'
              }
            ]
          }
        ],
        sidebar: [
          '/zh/',
          '/zh/installation/',
          '/zh/guides/',
          '/zh/api/',
          '/zh/api/wrapper/',
          '/zh/api/wrapper-array/',
          '/zh/api/options',
          '/zh/api/components/'
        ]
      },
      '/ja/': {
        label: '日本語',
        selectText: '言語',
        editLinkText: 'GitHub 上でこのページを編集する',
        nav: [
          {
            text: 'API',
            link: '/ja/api/'
          },
          {
            text: 'ガイド',
            link: '/ja/guides/',
            items: [
              {
                text: 'v2 (Vue.js 3)',
                link: 'https://test-utils.vuejs.org/'
              }
            ]
          }
        ],
        sidebar: [
          '/ja/',
          '/ja/installation/',
          '/ja/guides/',
          '/ja/api/',
          '/ja/api/wrapper/',
          '/ja/api/wrapper-array/',
          '/ja/api/options',
          '/ja/api/components/'
        ]
      },
      '/ru/': {
        label: 'Русский',
        selectText: 'Переводы',
        editLinkText: 'Изменить эту страницу на GitHub',
        nav: [
          {
            text: 'API',
            link: '/ru/api/'
          },
          {
            text: 'Руководства',
            link: '/ru/guides/',
            items: [
              {
                text: 'v2 (Vue.js 3)',
                link: 'https://test-utils.vuejs.org/'
              }
            ]
          }
        ],
        sidebar: [
          '/ru/',
          '/ru/installation/',
          '/ru/guides/',
          '/ru/api/',
          '/ru/api/wrapper/',
          '/ru/api/wrapper-array/',
          '/ru/api/options',
          '/ru/api/components/'
        ]
      },
      '/fr/': {
        label: 'Français',
        selectText: 'langue',
        editLinkText: 'Modifier cette page sur GitHub',
        nav: [
          {
            text: 'API',
            link: '/fr/api/'
          },
          {
            text: 'Guides',
            link: '/fr/guides/',
            items: [
              {
                text: 'v2 (Vue.js 3)',
                link: 'https://test-utils.vuejs.org/'
              }
            ]
          }
        ],
        sidebar: [
          '/fr/',
          '/fr/installation/',
          '/fr/guides/',
          '/fr/api/',
          '/fr/api/wrapper/',
          '/fr/api/wrapper-array/',
          '/fr/api/options',
          '/fr/api/components/'
        ]
      },
      '/': {
        label: 'Português',
        selectText: 'Idiomas',
        editLinkText: 'Edite esta página no GitHub',
        nav: [
          {
            text: 'API',
            link: '/pt/api/'
          },
          {
            text: 'Guias',
            link: '/pt/guides/',
            items: [
              {
                text: '2.x-beta',
                link: 'https://next.vue-test-utils.vuejs.org/guide/'
              }
            ]
          },
          {
            text: 'Atualizando para V1',
            link: '/pt/upgrading-to-v1/'
          }
        ],
        sidebar: [
          '/pt/',
          '/pt/installation/',
          '/pt/guides/',
          '/pt/api/',
          '/pt/api/wrapper/',
          '/pt/api/wrapper-array/',
          '/pt/api/options',
          '/pt/api/components/'
        ]
      },
    }
  },
  extendMarkdown: md => {
    // use more markdown-it plugins!
    md.use(require('markdown-it-include'))
  }
}
