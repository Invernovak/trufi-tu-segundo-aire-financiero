import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'business.business';
}

export const SEOHead = ({ 
  title, 
  description, 
  canonical, 
  ogImage = '/lovable-uploads/Logo-trufi-menu.png',
  ogType = 'website'
}: SEOHeadProps) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const siteName = 'TRUFI';
  const fullTitle = `${title} | ${siteName}`;
  
  // Si no se proporciona canonical, generamos uno basado en el dominio solicitado
  const canonicalUrl = canonical || `https://trufi.com.co${pathname}`;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Structured Data (JSON-LD) - Dynamic injection potential */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialService",
          "name": siteName,
          "description": description,
          "url": canonicalUrl,
          "logo": "https://oghwlhvbnegbghkcihos.supabase.co/storage/v1/object/public/public_assets/Logo-trufi-menu.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Cra 100 # 16 - 321, Oficina 608 Edificio Jardin Central",
            "addressLocality": "Cali",
            "addressCountry": "CO"
          }
        })}
      </script>
    </Helmet>
  );
};
