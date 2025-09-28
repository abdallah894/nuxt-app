export const useSocialMeta = (options: {
  title: string
  description: string
  image?: string
  type?: string
  path?: string
}) => {
  const route = useRoute()
  const config = useRuntimeConfig()
  
  // Get the current URL properly with better fallbacks
  const getFullUrl = (path?: string) => {
    const baseUrl = config.public.siteUrl || 'https://test-ten-navy-64.vercel.app'
    const currentPath = path || route.path
    
    // Ensure proper URL formation
    const cleanBaseUrl = baseUrl.replace(/\/$/, '') // Remove trailing slash
    const cleanPath = currentPath.startsWith('/') ? currentPath : `/${currentPath}`
    
    return `${cleanBaseUrl}${cleanPath}`
  }

  // Get absolute image URL
  const getAbsoluteImageUrl = (imagePath: string) => {
    if (imagePath.startsWith('http')) {
      return imagePath // Already absolute
    }
    const baseUrl = config.public.siteUrl || 'https://test-ten-navy-64.vercel.app'
    const cleanBaseUrl = baseUrl.replace(/\/$/, '') // Remove trailing slash
    const cleanImagePath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`
    return `${cleanBaseUrl}${cleanImagePath}`
  }

  const currentUrl = getFullUrl(options.path)
  const ogImage = getAbsoluteImageUrl(options.image || '/og-image.png')
  const siteName = config.public.siteName || 'My Blog Website'

  return {
    title: options.title,
    description: options.description,
    keywords: 'web development, blog, vue.js, nuxt, frontend, javascript, programming, tutorial',
    
    // Open Graph tags for Facebook, WhatsApp, LinkedIn, etc.
    ogTitle: options.title,
    ogDescription: options.description,
    ogImage: ogImage,
    ogImageAlt: `${options.title} - ${siteName}`,
    ogImageWidth: '1200',
    ogImageHeight: '630',
    ogUrl: currentUrl,
    ogType: options.type || 'website',
    ogSiteName: siteName,
    ogLocale: 'en_US',
    
    // Twitter Card tags
    twitterCard: 'summary_large_image',
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: ogImage,
    twitterImageAlt: `${options.title} - ${siteName}`,
    twitterSite: '@yourblog', // Replace with your Twitter handle
    twitterCreator: '@yourblog', // Replace with your Twitter handle
    
    // Additional meta tags for SEO
    robots: 'index, follow',
    author: 'Blog Author',
    publisher: siteName,
    'og:updated_time': new Date().toISOString(),
    
    // Additional structured data helpers
    canonical: currentUrl,
    language: 'en',
    
    // Schema.org structured data
    schemaOrg: {
      '@context': 'https://schema.org',
      '@type': options.type === 'article' ? 'BlogPosting' : 'WebPage',
      headline: options.title,
      description: options.description,
      image: ogImage,
      url: currentUrl,
      publisher: {
        '@type': 'Organization',
        name: siteName,
        logo: {
          '@type': 'ImageObject',
          url: getAbsoluteImageUrl('/og-image.png')
        }
      }
    }
  }
}
