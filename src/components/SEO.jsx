import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoRoutes, baseSchema } from '../data/seoData';

export default function SEO({ title, description, ogImage, keywords }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const config = seoRoutes[currentPath] || seoRoutes['/'];

  const metaTitle = title || config.title;
  const metaDescription = description || config.description;
  const metaImage = ogImage || config.ogImage;
  const metaKeywords = keywords || config.keywords;
  const canonicalUrl = config.canonical;

  useEffect(() => {
    // 1. Update Title
    document.title = metaTitle;

    // Helper function to update or create meta tags
    const setMetaTag = (selector, attributeName, attributeValue, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Primary Meta Tags
    setMetaTag('meta[name="description"]', 'name', 'description', metaDescription);
    setMetaTag('meta[name="keywords"]', 'name', 'keywords', metaKeywords);

    // 3. Open Graph / Facebook
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', metaTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', metaDescription);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', metaImage);
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Sri Ram Farm House');

    // 4. Twitter Cards
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:url"]', 'name', 'twitter:url', canonicalUrl);
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', metaTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', metaDescription);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', metaImage);

    // 5. Canonical Link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // 6. JSON-LD Structured Data
    let schemaScript = document.getElementById('json-ld-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'json-ld-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(baseSchema);
  }, [metaTitle, metaDescription, metaImage, metaKeywords, canonicalUrl]);

  return null;
}
