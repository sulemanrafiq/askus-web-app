import { MetadataRoute } from 'next'
import { PUBLIC_URL } from './config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${PUBLIC_URL}/sitemap.xml`,
  }
}
