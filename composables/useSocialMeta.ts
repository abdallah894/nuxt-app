export const useSocialMeta = (options: {
  title: string
  description: string
  image?: string
  type?: string
  path?: string
}) => {
  const { $router } = useNuxtApp()
  const route = useRoute()
  
  // Get the current URL properly
  const getFullUrl = (path?: string) => {
    if (process.server) {
      // On server, try to get URL from headers or env
      const nuxtApp = useNuxtApp()
      const event = nuxtApp.ssrContext?.event
      const host = event?.node?.req?.headers?.host || 
                   process.env.NUXT_PUBLIC_SITE_URL || 
                   'test-6wdtadsvg-amrs-projects-d74c7769.vercel.app'
      const protocol = host.includes('localhost') ? 'http' : 'https'
      return `${protocol}://${host}${path || route.path}`
    } else {
      // On client, we can use window.location
      return path ? `${window.location.origin}${path}` : window.location.href
    }
  }

  const currentUrl = getFullUrl(options.path)
  const ogImage = options.image || '/og-image.png'

  return {
    title: options.title,
    description: options.description,
    keywords: 'website, web development, blog, vue.js, nuxt, frontend, javascript',
    
    // Open Graph tags for Facebook, WhatsApp, LinkedIn, etc.
    ogTitle: options.title,
    ogDescription: options.description,
    ogImage: ogImage,
    ogImageAlt: `${options.title} - Social media preview`,
    ogUrl: currentUrl,
    ogType: options.type || 'website',
    ogSiteName: 'My Website',
    
    // Twitter Card tags
    twitterCard: 'summary_large_image',
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: ogImage,
    twitterImageAlt: `${options.title} - Social media preview`,
    twitterSite: '@yourhandle', // Replace with your Twitter handle
    twitterCreator: '@yourhandle', // Replace with your Twitter handle
    
    // Additional meta tags
    robots: 'index, follow',
    author: 'Your Name',
    publisher: 'My Website',
  }
}
