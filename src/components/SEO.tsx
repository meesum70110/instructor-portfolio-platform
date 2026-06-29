import { Helmet } from 'react-helmet-async';
import { SITE } from '@/constants/site';

export function SEO() {
  const { title, description, keywords, ogImage } = SITE.meta;
  const { url } = SITE;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type"        content="website" />
      <meta property="og:url"         content={url} />
      <meta property="og:title"       content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={`${url}${ogImage}`} />
      <meta property="og:locale"      content="en_US" />
      <meta property="og:site_name"   content={SITE.name} />

      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={`${url}${ogImage}`} />

      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(SITE.jsonLd)}
      </script>
    </Helmet>
  );
}
