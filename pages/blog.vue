<template>
  <div>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-gray-800 mb-8">Blog</h1>
      
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Sample blog posts -->
        <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop&crop=entropy&auto=format&q=80" 
            alt="Getting started with Nuxt 3 - modern web development"
            class="w-full h-48 object-cover"
          >
          <div class="p-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Getting Started with Nuxt 3</h2>
            <p class="text-gray-600 mb-4">Learn the basics of building modern web applications with Nuxt 3 framework.</p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">March 15, 2024</span>
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Read more</a>
            </div>
          </div>
        </article>

        <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img 
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop&crop=entropy&auto=format&q=80" 
            alt="Vue 3 Composition API - JavaScript development"
            class="w-full h-48 object-cover"
          >
          <div class="p-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Vue 3 Composition API</h2>
            <p class="text-gray-600 mb-4">Explore the powerful Composition API and how it improves your Vue.js development.</p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">March 10, 2024</span>
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Read more</a>
            </div>
          </div>
        </article>

        <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop&crop=entropy&auto=format&q=80" 
            alt="TailwindCSS best practices - web design"
            class="w-full h-48 object-cover"
          >
          <div class="p-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">TailwindCSS Best Practices</h2>
            <p class="text-gray-600 mb-4">Tips and tricks for writing maintainable CSS with TailwindCSS utility classes.</p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">March 5, 2024</span>
              <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Read more</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
// Set comprehensive SEO meta tags for social media sharing
useSeoMeta({
  title: 'Blog - Latest Articles & Insights',
  description: 'Read our latest blog posts about web development, Vue.js, Nuxt, and modern frontend technologies. Stay updated with expert insights and tutorials.',
  keywords: 'blog, web development, vue.js, nuxt, frontend, javascript, tutorials',
  
  // Open Graph tags for Facebook, WhatsApp, LinkedIn, etc.
  ogTitle: 'Blog - Latest Articles & Insights',
  ogDescription: 'Read our latest blog posts about web development, Vue.js, Nuxt, and modern frontend technologies. Stay updated with expert insights and tutorials.',
  ogImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop&crop=entropy&auto=format&q=80',
  ogImageAlt: 'Blog page with latest articles about web development',
  ogUrl: 'https://your-nuxt-app.vercel.app/blog',
  ogType: 'website',
  ogSiteName: 'My Website',
  
  // Twitter Card tags
  twitterCard: 'summary_large_image',
  twitterTitle: 'Blog - Latest Articles & Insights',
  twitterDescription: 'Read our latest blog posts about web development, Vue.js, Nuxt, and modern frontend technologies.',
  twitterImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop&crop=entropy&auto=format&q=80',
  twitterImageAlt: 'Blog page with latest articles about web development',
  twitterSite: '@yourhandle', // Replace with your Twitter handle
  twitterCreator: '@yourhandle', // Replace with your Twitter handle
  
  // Additional meta tags
  robots: 'index, follow',
  author: 'Your Name',
  publisher: 'My Website',
})

// Set additional head tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://your-nuxt-app.vercel.app/blog'
    }
  ]
})
</script>

<style scoped>
/* Custom styles if needed */
</style>
