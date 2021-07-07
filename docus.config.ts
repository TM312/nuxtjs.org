export default {
  title: 'NuxtJS',
  description: '',
  url: 'https://nuxtjs.org',
  template: 'docs',
  credits: true,
  socialImage: false,
  algolia: {
    apiKey: 'ff80fbf046ce827f64f06e16f82f1401',
    indexName: 'nuxtjs'
  },
  layout: {
    banner: true
  },
  github: {
    repo: 'nuxt/nuxtjs.org',
    branch: 'dev',
    releases: 'nuxt/nuxt.js'
  },
  theme: {
    header: {
      logo: true,
      title: false
    },
    colors: {
      primary: '#00DC82',
      logo: '#003543'
    },
    shortcuts: {
      'd-logo': 'w-auto h-6 md:h-7 text-logo dark:text-white',
      'd-body-bg': 'bg-white dark:bg-secondary-black',
      'd-body-text-color': 'text-secondary-darker dark:text-white', // text-secondary dark:text-white
      'd-secondary-bg': 'bg-gray-500 dark:bg-cloud-light',
      'd-secondary-text': 'text-gray-500 dark:text-cloud-light',
      'd-secondary-text-hover': 'text-gray-700 dark:text-cloud-lightest',
      'd-secondary-text-active': 'text-gray-900 dark:text-cloud-surface',
      'd-primary-text-hover': 'text-gray-600 dark:text-cloud-lighter',
      'd-prose-code-inline-bg': 'bg-gray-100 dark:bg-secondary-darkest',
      'd-prose-code-bg': 'bg-gray-100 dark:bg-secondary-darkest',
      'd-bg-header':
        'bg-white bg-opacity-80 dark:bg-secondary-black dark:bg-opacity-80',
      'd-border':
        'light:border-gray-200 light:border-opacity-50 dark:border-secondary-darker',
      'd-border-hover': 'border-primary-200 dark:border-secondary-dark',
      'd-border-header': 'border-none',
      'd-page-mobile-toc-bg': 'd-body-bg bg-opacity-80 dark:bg-opacity-80',
      'd-aside-header-bg': 'bg-gray-50 dark:bg-secondary-darkest',
      'd-active-aside-navigation-item-bg':
        'bg-primary-50 dark:bg-secondary-darkest',
      'd-active-aside-navigation-item-text':
        'text-primary-500 dark:text-primary-400 ',
      'd-code-group-header-bg': 'bg-gray-200 dark:bg-secondary-darker',
      'd-code-group-tab': 'bg-gray-300 dark:bg-secondary-dark',
      'd-prose-code-filename-bg': 'bg-gray-100 dark:bg-secondary-darker',
      'd-prose-code-filename-text': 'text-gray-600 dark:text-secondary-light',
      'd-prose-thead-border':
        'border-b border-gray-200 dark:border-secondary-dark',
      'd-prose-tr-border':
        'border-b border-gray-100 dark:border-secondary-darker',
      'd-prose-blockquote-border':
        'border-l-2 border-gray-200 dark:border-secondary-darker',
      'd-tertiary-text': 'text-gray-400 dark:text-cloud-dark',
      'd-prose-hr-border':
        'border-t border-gray-100 dark:border-secondary-darker',
      'd-prose-ul-li-bullet': 'd-secondary-bg'
    }
  }
}