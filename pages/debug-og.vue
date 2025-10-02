<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Open Graph Debug</h1>
    
    <div class="bg-gray-100 p-6 rounded-lg mb-6">
      <h2 class="text-xl font-semibold mb-4">Current Page Meta Tags</h2>
      <div class="space-y-2 text-sm">
        <div><strong>Title:</strong> {{ socialMeta.title }}</div>
        <div><strong>Description:</strong> {{ socialMeta.description }}</div>
        <div><strong>OG Image:</strong> {{ socialMeta.ogImage }}</div>
        <div><strong>OG URL:</strong> {{ socialMeta.ogUrl }}</div>
        <div><strong>OG Type:</strong> {{ socialMeta.ogType }}</div>
      </div>
    </div>

    <div class="bg-blue-50 border border-blue-200 p-6 rounded-lg">
      <h2 class="text-xl font-semibold mb-4 text-blue-800">Testing Instructions</h2>
      <div class="space-y-3 text-blue-700">
        <p><strong>1. WhatsApp Test:</strong></p>
        <ul class="list-disc list-inside ml-4 space-y-1">
          <li>Send your page URL to a WhatsApp chat</li>
          <li>WhatsApp should show a preview with your image and description</li>
        </ul>
        
        <p><strong>2. Facebook Debugger:</strong></p>
        <ul class="list-disc list-inside ml-4 space-y-1">
          <li>Go to <a href="https://developers.facebook.com/tools/debug/" target="_blank" class="underline">Facebook Sharing Debugger</a></li>
          <li>Enter your page URL: <code class="bg-white px-2 py-1 rounded">{{ socialMeta.ogUrl }}</code></li>
          <li>Click "Debug" to see how Facebook/WhatsApp sees your page</li>
          <li>If you see cached data, click "Scrape Again" to refresh</li>
          <li>Check for any errors or warnings in the report</li>
        </ul>

        <p><strong>3. LinkedIn Inspector:</strong></p>
        <ul class="list-disc list-inside ml-4 space-y-1">
          <li>Go to <a href="https://www.linkedin.com/post-inspector/" target="_blank" class="underline">LinkedIn Post Inspector</a></li>
          <li>Enter your page URL to validate meta tags</li>
        </ul>

        <p><strong>4. Twitter Card Validator:</strong></p>
        <ul class="list-disc list-inside ml-4 space-y-1">
          <li>Go to <a href="https://cards-dev.twitter.com/validator" target="_blank" class="underline">Twitter Card Validator</a></li>
          <li>Enter your page URL to preview Twitter cards</li>
        </ul>
      </div>
    </div>

    <div class="mt-6 space-x-4">
      <NuxtLink to="/" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Back to Home
      </NuxtLink>
      <NuxtLink to="/blog" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Test Blog Page
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// Import the social meta composable
import { useSocialMeta } from '~/composables/useSocialMeta'

// Use the social meta composable for this debug page
const socialMeta = useSocialMeta({
  title: 'Open Graph Debug Page - My Website',
  description: 'Debug page to test Open Graph meta tags for WhatsApp, Facebook, Twitter, and LinkedIn sharing.',
  type: 'website'
})

// Set meta tags
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
