export default defineAppConfig({
  docus: {
    locale: 'ru',
  },

  seo: {
    title: 'MyShows Scrobble API',
    description: 'Скробблинг MyShows: отметка просмотра в реальном времени для плееров, '
      + 'плагинов, медиасерверов и мобильных клиентов.',
  },

  header: {
    title: 'MyShows Scrobble API',
    // Иконку сайта задаём в nuxt.config: header.logo.favicon у Docus управляет только
    // меню «материалы бренда», а не тегом <link rel="icon">.
  },

  github: {
    url: 'https://github.com/andreyshivas/myshows-scrobbler-api',
    branch: 'main',
  },

  search: {
    fts: true,
  },

  toc: {
    bottom: {
      title: 'Полезное',
      links: [
        {
          icon: 'i-lucide-key-round',
          label: 'Получить токен',
          to: 'https://myshows.me/profile/watch-history/',
          target: '_blank',
        },
        {
          icon: 'i-simple-icons-github',
          label: 'Референс-клиент',
          to: 'https://github.com/myshowsme/myshows-scrobbler',
          target: '_blank',
        },
        {
          icon: 'i-lucide-bug',
          label: 'Сообщить о баге',
          to: 'https://bugs.myshows.me',
          target: '_blank',
        },
      ],
    },
  },

  ui: {
    colors: {
      primary: 'myshows',
      neutral: 'neutral',
    },
  },
})
