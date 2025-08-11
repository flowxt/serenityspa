export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://serenityspanoemiesaddier.fr/sitemap.xml',
    host: 'https://serenityspanoemiesaddier.fr',
  };
}
