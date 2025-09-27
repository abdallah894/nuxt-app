<template>
  <div>
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="container mx-auto px-4 py-16">
        <div class="text-center">
          <h1 class="text-5xl font-bold text-gray-800 mb-6">Welcome to My Website</h1>
          <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover amazing content, read our latest blog posts, and explore what we have to offer.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink 
              to="/blog" 
              class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Visit Blog
            </NuxtLink>
            <button class="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg border border-blue-200 transform hover:scale-105 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
        
        <div class="mt-16 grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Latest Articles</h3>
            <p class="text-gray-600">Stay updated with our latest blog posts and insights.</p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Fast Performance</h3>
            <p class="text-gray-600">Built with Nuxt 3 for optimal speed and SEO.</p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Modern Design</h3>
            <p class="text-gray-600">Beautiful and responsive design with TailwindCSS.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Use the social meta composable
const socialMeta = useSocialMeta({
  title: 'My Website - Welcome to Amazing Content',
  description: 'Welcome to my website. Discover amazing content, read our latest blog posts about web development, and explore modern frontend technologies.',
  type: 'website'
})

// Set comprehensive SEO meta tags for social media sharing
useSeoMeta(socialMeta)

// Set additional head tags
useHead({
  link: [
    {
      rel: 'canonical',
      href: socialMeta.ogUrl
    }
  ]
})
</script>
