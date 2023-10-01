// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  content: {
    highlight: {
      theme: 'nord',
      preload: [
        'ts',
        'js',
        'css',
        'scss',
        'ruby',
        'elixir',
        'go',
        'html',
        'json',
        'vue',
      ],
    },
  },
  css: ['~/assets/css/main.scss'],
});
