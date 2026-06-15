import { Head } from 'vite-react-ssg';

/**
 * Canonical production domain — used for canonical links, hreflang, og:url and
 * absolute image URLs.
 */
const SITE_URL = 'https://iguide.chat';
const SITE_NAME = 'iGuide';
// Real hosted 1200x475 banner. Replace with a self-hosted 1200x630 og-image
// on iguide.chat when one is available.
const DEFAULT_IMAGE =
    'https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6';

interface SeoProps {
    /** Document title (without the site-name suffix). */
    title: string;
    /** Meta description, ~150-160 chars for best display in search results. */
    description: string;
    /** Route path WITHOUT the language prefix, e.g. "/about". */
    path: string;
    /** Active language. Drives canonical, <html lang> and og:locale. */
    lang: 'zh' | 'en';
    /** Absolute URL of the social-share image. */
    image?: string;
    /** Open Graph type, e.g. "website" or "article". */
    type?: string;
    /** Optional breadcrumb leaf label; emits a BreadcrumbList JSON-LD (Home → label). */
    breadcrumbLabel?: string;
}

/**
 * Emits per-page <head> metadata into the prerendered HTML via vite-react-ssg's
 * SSR-safe <Head> (react-helmet-async). Renders separate-URL hreflang
 * annotations so Google serves the right language version to each user.
 */
export default function Seo({
    title,
    description,
    path,
    lang,
    image = DEFAULT_IMAGE,
    type = 'website',
    breadcrumbLabel,
}: SeoProps) {
    const enUrl = `${SITE_URL}/en${path}`;
    const zhUrl = `${SITE_URL}/zh${path}`;
    const canonical = lang === 'zh' ? zhUrl : enUrl;
    const htmlLang = lang === 'zh' ? 'zh-Hans' : 'en';
    const ogLocale = lang === 'zh' ? 'zh_CN' : 'en_US';
    const ogLocaleAlt = lang === 'zh' ? 'en_US' : 'zh_CN';
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

    const breadcrumbJsonLd = breadcrumbLabel
        ? {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/${lang}/about` },
                  { '@type': 'ListItem', position: 2, name: breadcrumbLabel, item: canonical },
              ],
          }
        : null;

    return (
        <Head>
            <html lang={htmlLang} />
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />

            {/* hreflang: reciprocal, self-referential, absolute URLs */}
            <link rel="alternate" hrefLang="en" href={enUrl} />
            <link rel="alternate" hrefLang="zh-Hans" href={zhUrl} />
            <link rel="alternate" hrefLang="x-default" href={enUrl} />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content={image} />
            <meta property="og:locale" content={ogLocale} />
            <meta property="og:locale:alternate" content={ogLocaleAlt} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {breadcrumbJsonLd && (
                <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
            )}
        </Head>
    );
}
