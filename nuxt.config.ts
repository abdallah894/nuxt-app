// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  nitro: {
    preset: 'vercel-edge'
  },
  ssr: true, // Ensure SSR is enabled for proper meta tag rendering
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'format-detection', content: 'telephone=no' }
      ]
    }
  },
  // Ensure proper social media crawling
  experimental: {
    payloadExtraction: false
  }
})
