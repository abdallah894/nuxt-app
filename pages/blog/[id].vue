<template>
  <div>
    <div class="min-h-screen bg-gray-50">
      <div class="container mx-auto px-4 py-8">
        <!-- Breadcrumb Navigation -->
        <nav class="mb-8">
          <ol class="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <NuxtLink to="/" class="hover:text-blue-600">Home</NuxtLink>
            </li>
            <li>
              <svg class="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>
            </li>
            <li>
              <NuxtLink to="/blog" class="hover:text-blue-600">Blog</NuxtLink>
            </li>
            <li>
              <svg class="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>
            </li>
            <li class="text-gray-700 font-medium">{{ blogPost.title }}</li>
          </ol>
        </nav>

        <!-- Main Article -->
        <article class="max-w-4xl mx-auto">
          <!-- Article Header -->
          <header class="mb-8">
            <div class="text-center">
              <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {{ blogPost.title }}
              </h1>
              <p class="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
                {{ blogPost.excerpt }}
              </p>
              
              <!-- Article Meta -->
              <div class="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500 mb-8">
                <div class="flex items-center gap-2">
                  <img 
                    :src="blogPost.author.avatar" 
                    :alt="blogPost.author.name"
                    class="w-8 h-8 rounded-full"
                  >
                  <span>By {{ blogPost.author.name }}</span>
                </div>
                <span class="hidden sm:block">•</span>
                <time :datetime="blogPost.publishedAt">
                  {{ formatDate(blogPost.publishedAt) }}
                </time>
                <span class="hidden sm:block">•</span>
                <span>{{ blogPost.readingTime }} min read</span>
              </div>
            </div>

            <!-- Featured Image -->
            <div class="rounded-lg overflow-hidden shadow-lg mb-8">
              <img 
                :src="blogPost.featuredImage" 
                :alt="blogPost.imageAlt"
                class="w-full h-64 md:h-96 object-cover"
              >
            </div>
          </header>

          <!-- Article Content -->
          <div class="prose prose-lg prose-gray max-w-none">
            <div v-html="blogPost.content"></div>
          </div>

          <!-- Article Footer -->
          <footer class="mt-12 pt-8 border-t border-gray-200">
            <!-- Tags -->
            <div class="mb-6" v-if="blogPost.tags.length > 0">
              <h3 class="text-sm font-semibold text-gray-700 mb-3">Tags:</h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tag in blogPost.tags" 
                  :key="tag"
                  class="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Author Bio -->
            <div class="bg-gray-100 rounded-lg p-6">
              <div class="flex items-start gap-4">
                <img 
                  :src="blogPost.author.avatar" 
                  :alt="blogPost.author.name"
                  class="w-16 h-16 rounded-full flex-shrink-0"
                >
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ blogPost.author.name }}</h3>
                  <p class="text-gray-600 text-sm">{{ blogPost.author.bio }}</p>
                </div>
              </div>
            </div>

            <!-- Navigation -->
            <div class="mt-8 flex flex-col sm:flex-row justify-between gap-4">
              <NuxtLink 
                to="/blog" 
                class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Back to Blog
              </NuxtLink>
              
              <div class="flex gap-4">
                <button class="text-gray-500 hover:text-gray-700">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSocialMeta } from '~/composables/useSocialMeta'

// Get the blog post ID from the route
const route = useRoute()
const blogId = route.params.id

// Sample blog data - In a real app, this would come from an API or CMS
const blogPosts = {
  'getting-started-nuxt-3': {
    id: 'getting-started-nuxt-3',
    title: 'Getting Started with Nuxt 3: A Complete Guide',
    excerpt: 'Learn the fundamentals of Nuxt 3 and discover how to build modern, performant web applications with this powerful Vue.js framework.',
    ogImage: '/og-image.png',
    content: `
      <h2>Introduction to Nuxt 3</h2>
      <p>Nuxt 3 represents a major evolution in the Vue.js ecosystem, bringing enhanced performance, improved developer experience, and modern web standards to the forefront. Built on top of Vue 3, Nuxt 3 leverages the Composition API, improved TypeScript support, and a new server engine called Nitro.</p>
      
      <h2>Key Features</h2>
      <p>Some of the standout features of Nuxt 3 include:</p>
      <ul>
        <li><strong>Zero Configuration:</strong> Get started immediately with sensible defaults</li>
        <li><strong>Server-Side Rendering:</strong> Built-in SSR for better SEO and performance</li>
        <li><strong>Auto-imports:</strong> Automatically import Vue components and composables</li>
        <li><strong>TypeScript Support:</strong> First-class TypeScript support out of the box</li>
        <li><strong>Nitro Engine:</strong> Fast and lightweight server engine</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To create a new Nuxt 3 project, you can use the following command:</p>
      <pre><code>npx nuxi@latest init my-nuxt-app</code></pre>
      
      <p>This will create a new Nuxt 3 project with all the necessary files and dependencies. Once created, you can navigate to your project directory and start the development server:</p>
      <pre><code>cd my-nuxt-app
npm run dev</code></pre>
      
      <h2>Conclusion</h2>
      <p>Nuxt 3 is a powerful framework that makes building Vue.js applications enjoyable and productive. With its excellent developer experience, performance optimizations, and modern features, it's an excellent choice for your next web project.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80',
    imageAlt: 'Developer coding with Nuxt 3 framework',
    publishedAt: '2024-03-15T10:00:00.000Z',
    readingTime: 8,
    tags: ['Nuxt', 'Vue.js', 'Web Development', 'JavaScript', 'Frontend'],
    author: {
      name: 'John Developer',
      bio: 'Full-stack developer passionate about modern web technologies and creating great user experiences.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=80'
    }
  },
  'vue3-composition-api': {
    id: 'vue3-composition-api',
    title: 'Mastering Vue 3 Composition API',
    excerpt: 'Dive deep into Vue 3\'s Composition API and learn how to write more maintainable and reusable Vue.js code.',
    ogImage: '/og-image.png',
    content: `
      <h2>Understanding the Composition API</h2>
      <p>The Vue 3 Composition API represents a paradigm shift in how we write Vue components. Instead of organizing code by options (data, methods, computed), we can now organize code by logical concerns, making our components more maintainable and reusable.</p>
      
      <h2>Basic Setup</h2>
      <p>The <code>setup()</code> function is the entry point for using the Composition API. Here's a simple example:</p>
      <pre><code>import { ref, computed } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    
    const increment = () => {
      count.value++
    }
    
    return {
      count,
      doubleCount,
      increment
    }
  }
}</code></pre>
      
      <h2>Reactivity</h2>
      <p>Vue 3 introduces new reactivity primitives:</p>
      <ul>
        <li><strong>ref():</strong> Creates a reactive reference to a value</li>
        <li><strong>reactive():</strong> Creates a reactive proxy of an object</li>
        <li><strong>computed():</strong> Creates a computed property</li>
        <li><strong>watch():</strong> Watches reactive data and performs side effects</li>
      </ul>
      
      <h2>Composables</h2>
      <p>One of the most powerful features of the Composition API is the ability to extract and reuse stateful logic through composables. This promotes better code organization and reusability across components.</p>
      
      <h2>Best Practices</h2>
      <p>When using the Composition API, consider these best practices:</p>
      <ul>
        <li>Group related logic together</li>
        <li>Extract reusable logic into composables</li>
        <li>Use TypeScript for better type inference</li>
        <li>Keep components focused and single-purpose</li>
      </ul>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80',
    imageAlt: 'Vue.js code on screen showing Composition API',
    publishedAt: '2024-03-10T14:30:00.000Z',
    readingTime: 6,
    tags: ['Vue.js', 'Composition API', 'JavaScript', 'Frontend', 'Development'],
    author: {
      name: 'Sarah Vue',
      bio: 'Vue.js core team member and frontend architect with 8+ years of experience building scalable web applications.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=100&h=100&fit=crop&crop=face&auto=format&q=80'
    }
  },
  'tailwindcss-best-practices': {
    id: 'tailwindcss-best-practices',
    title: 'TailwindCSS Best Practices for Scalable Projects',
    excerpt: 'Discover proven strategies and best practices for using TailwindCSS in large-scale projects while maintaining clean and maintainable code.',
    ogImage: '/og-image.png',
    content: `
      <h2>Introduction to TailwindCSS</h2>
      <p>TailwindCSS has revolutionized how we approach CSS by providing a utility-first framework that enables rapid UI development. However, to harness its full potential in large projects, it's essential to follow best practices that ensure maintainability and scalability.</p>
      
      <h2>Component Organization</h2>
      <p>One of the key challenges with utility-first CSS is managing long class lists. Here are strategies to keep your components organized:</p>
      <ul>
        <li><strong>Extract Components:</strong> Create reusable components for common UI patterns</li>
        <li><strong>Use @apply Directive:</strong> For complex repeated patterns, extract them using @apply</li>
        <li><strong>Custom CSS Classes:</strong> Create semantic class names for complex components</li>
      </ul>
      
      <h2>Configuration Best Practices</h2>
      <p>Customize your Tailwind configuration to match your design system:</p>
      <pre><code>// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    }
  }
}</code></pre>
      
      <h2>Performance Optimization</h2>
      <p>Keep your CSS bundle size optimized:</p>
      <ul>
        <li>Use PurgeCSS to remove unused styles</li>
        <li>Configure proper content paths</li>
        <li>Avoid overly specific selectors</li>
        <li>Use JIT mode for better performance</li>
      </ul>
      
      <h2>Team Collaboration</h2>
      <p>Establish conventions for your team:</p>
      <ul>
        <li>Create a style guide with common patterns</li>
        <li>Use ESLint plugins for class ordering</li>
        <li>Document custom utilities and components</li>
        <li>Establish naming conventions for custom classes</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>TailwindCSS is incredibly powerful when used correctly. By following these best practices, you can build scalable, maintainable, and efficient user interfaces that stand the test of time.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80',
    imageAlt: 'Clean code editor showing TailwindCSS utilities',
    publishedAt: '2024-03-05T09:15:00.000Z',
    readingTime: 7,
    tags: ['TailwindCSS', 'CSS', 'Web Design', 'Best Practices', 'Frontend'],
    author: {
      name: 'Mike Designer',
      bio: 'UI/UX designer and frontend developer specializing in design systems and modern CSS frameworks.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=80'
    }
  }
}

// Get the blog post or show 404
const blogPost = blogPosts[blogId]

// If blog post doesn't exist, throw 404 error
if (!blogPost) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog post not found'
  })
}

// Format date helper
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// SEO Meta tags using the social meta composable with local OG images
const socialMeta = useSocialMeta({
  title: `${blogPost.title} | Blog`,
  description: blogPost.excerpt,
  image: blogPost.featuredImage || '/og-image.png',
  type: 'article',
  path: `/blog/${blogId}`
})

// Set comprehensive SEO meta tags
useSeoMeta({
  ...socialMeta,
  articleAuthor: blogPost.author.name,
  articlePublishedTime: blogPost.publishedAt,
  articleTag: blogPost.tags,
  articleSection: 'Technology'
})

// Set structured data for better SEO
useHead({
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
        '@type': 'BlogPosting',
        headline: blogPost.title,
        description: blogPost.excerpt,
        image: blogPost.featuredImage,
        author: {
          '@type': 'Person',
          name: blogPost.author.name
        },
        publisher: {
          '@type': 'Organization',
          name: 'My Website',
          logo: {
            '@type': 'ImageObject',
            url: '/og-image.png'
          }
        },
        datePublished: blogPost.publishedAt,
        dateModified: blogPost.publishedAt,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': socialMeta.ogUrl
        },
        keywords: blogPost.tags.join(', '),
        articleSection: 'Technology',
        wordCount: blogPost.content.replace(/<[^>]*>/g, '').split(' ').length,
        timeRequired: `PT${blogPost.readingTime}M`
      })
    }
  ]
})
</script>

<style>
/* Enhanced prose styles for better content readability */
.prose {
  @apply text-gray-700 leading-relaxed;
}

.prose h2 {
  @apply text-2xl font-bold text-gray-900 mt-8 mb-4;
}

.prose h3 {
  @apply text-xl font-semibold text-gray-900 mt-6 mb-3;
}

.prose p {
  @apply mb-4;
}

.prose ul {
  @apply list-disc pl-6 mb-4 space-y-2;
}

.prose ol {
  @apply list-decimal pl-6 mb-4 space-y-2;
}

.prose li {
  @apply leading-relaxed;
}

.prose pre {
  @apply bg-gray-100 rounded-lg p-4 overflow-x-auto mb-4 text-sm;
}

.prose code {
  @apply bg-gray-100 text-pink-600 px-1 py-0.5 rounded text-sm;
}

.prose pre code {
  @apply bg-transparent text-gray-800 p-0;
}

.prose strong {
  @apply font-semibold text-gray-900;
}

.prose a {
  @apply text-blue-600 hover:text-blue-800 underline;
}

.prose blockquote {
  @apply border-l-4 border-blue-200 pl-4 italic text-gray-600 my-4;
}
</style>
