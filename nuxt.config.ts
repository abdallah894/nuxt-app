// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxt/image'
  ],
  
  // Site configuration for better SEO
  site: {
    url: 'https://test-20wcmv1m7-amrs-projects-d74c7769.vercel.app',
    name: 'My Blog Website',
    description: 'A modern blog about web development, Vue.js, Nuxt, and frontend technologies.',
    defaultLocale: 'en'
  },
  
  // Sitemap configuration
  sitemap: {
    sources: [
      '/blog/getting-started-nuxt-3',
      '/blog/vue3-composition-api', 
      '/blog/tailwindcss-best-practices'
    ]
  },
  
  // Image optimization
  image: {
    quality: 80,
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },
  
  nitro: {
    preset: 'vercel-edge',
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  
  ssr: true, // Ensure SSR is enabled for proper meta tag rendering
  
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#3b82f6' },
        { name: 'msapplication-TileColor', content: '#3b82f6' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://test-20wcmv1m7-amrs-projects-d74c7769.vercel.app' }
      ]
    }
  },
  
  // Runtime config for environment variables
  runtimeConfig: {
    public: {
      siteUrl: 'https://test-20wcmv1m7-amrs-projects-d74c7769.vercel.app',
      siteName: 'My Blog Website',
      siteDescription: 'A modern blog about web development, Vue.js, Nuxt, and frontend technologies.',
      language: 'en'
    }
  },
  
  // Ensure proper social media crawling
  experimental: {
    payloadExtraction: false
  },
  
  // CSS optimization
  css: [],
  
  // Build optimization for better performance
  build: {
    transpile: []
  }
})
