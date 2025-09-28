<template>
  <div>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-gray-800 mb-8">Blog</h1>
      
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Blog posts with dynamic links -->
        <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <NuxtLink to="/blog/getting-started-nuxt-3" class="block">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop&crop=entropy&auto=format&q=80" 
              alt="Getting started with Nuxt 3 - modern web development"
              class="w-full h-48 object-cover"
            >
            <div class="p-6">
              <h2 class="text-xl font-semibold text-gray-800 mb-2">Getting Started with Nuxt 3</h2>
              <p class="text-gray-600 mb-4">Learn the fundamentals of Nuxt 3 and discover how to build modern, performant web applications with this powerful Vue.js framework.</p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">March 15, 2024</span>
                <span class="text-blue-600 hover:text-blue-800 font-medium">Read more →</span>
              </div>
            </div>
          </NuxtLink>
        </article>

        <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <NuxtLink to="/blog/vue3-composition-api" class="block">
            <img 
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop&crop=entropy&auto=format&q=80" 
              alt="Vue 3 Composition API - JavaScript development"
              class="w-full h-48 object-cover"
            >
            <div class="p-6">
              <h2 class="text-xl font-semibold text-gray-800 mb-2">Vue 3 Composition API</h2>
              <p class="text-gray-600 mb-4">Dive deep into Vue 3's Composition API and learn how to write more maintainable and reusable Vue.js code.</p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">March 10, 2024</span>
                <span class="text-blue-600 hover:text-blue-800 font-medium">Read more →</span>
              </div>
            </div>
          </NuxtLink>
        </article>

        <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <NuxtLink to="/blog/tailwindcss-best-practices" class="block">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop&crop=entropy&auto=format&q=80" 
              alt="TailwindCSS best practices - web design"
              class="w-full h-48 object-cover"
            >
            <div class="p-6">
              <h2 class="text-xl font-semibold text-gray-800 mb-2">TailwindCSS Best Practices</h2>
              <p class="text-gray-600 mb-4">Discover proven strategies and best practices for using TailwindCSS in large-scale projects while maintaining clean and maintainable code.</p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">March 5, 2024</span>
                <span class="text-blue-600 hover:text-blue-800 font-medium">Read more →</span>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import the social meta composable
import { useSocialMeta } from '~/composables/useSocialMeta'

// Use the social meta composable with enhanced SEO
const socialMeta = useSocialMeta({
  title: 'Blog - Latest Web Development Articles & Tutorials',
  description: 'Read our latest blog posts about web development, Vue.js, Nuxt, TailwindCSS, and modern frontend technologies. Expert insights and step-by-step tutorials.',
  type: 'website',
  path: '/blog'
})

// Set comprehensive SEO meta tags for social media sharing
useSeoMeta({
  ...socialMeta,
  keywords: 'blog, web development articles, vue.js tutorials, nuxt guide, frontend development, javascript tutorials',
})

// Set additional head tags with structured data
useHead({
  title: 'Blog - Latest Web Development Articles & Tutorials',
  link: [
    {
      rel: 'canonical',
      href: socialMeta.ogUrl
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'My Blog Website - Blog',
        description: 'Latest web development articles and tutorials',
        url: socialMeta.ogUrl,
        publisher: {
          '@type': 'Organization',
          name: 'My Blog Website',
          logo: {
            '@type': 'ImageObject',
            url: `${socialMeta.ogUrl.replace('/blog', '')}/og-image.png`
          }
        },
        blogPost: [
          {
            '@type': 'BlogPosting',
            headline: 'Getting Started with Nuxt 3: A Complete Guide',
            url: `${socialMeta.ogUrl}/getting-started-nuxt-3`,
            datePublished: '2024-03-15'
          },
          {
            '@type': 'BlogPosting', 
            headline: 'Mastering Vue 3 Composition API',
            url: `${socialMeta.ogUrl}/vue3-composition-api`,
            datePublished: '2024-03-10'
          },
          {
            '@type': 'BlogPosting',
            headline: 'TailwindCSS Best Practices for Scalable Projects',
            url: `${socialMeta.ogUrl}/tailwindcss-best-practices`,
            datePublished: '2024-03-05'
          }
        ]
      })
    }
  ]
})
</script>

<style scoped>
/* Custom styles if needed */
</style>
