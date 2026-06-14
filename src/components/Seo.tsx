import { useEffect } from 'react';

/**
 * Site-wide SEO constants. `SITE_URL` is the canonical production domain
 * (used for canonical links, og:url, and absolute image URLs).
 */
const SITE_URL = 'https://iguide.chat';
const SITE_NAME = 'iGuide';
const DEFAULT_IMAGE =
    'https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6';

interface SeoProps {
    /** Document title (without the site-name suffix). */
    title: string;
    /** Meta description, ~150-160 chars for best display in search results. */
    description: string;
    /** Route path beginning with "/", e.g. "/about". Used for the canonical URL. */
    path: string;
    /** Active UI language; drives <html lang> and og:locale. */
    lang?: 'zh' | 'en';
    /** Absolute URL of the social-share image. */
    image?: string;
    /** Open Graph type, e.g. "website" or "article". */
    type?: string;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
    let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
    let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
    if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
    }
    el.setAttribute('href', href);
}

/**
 * Keeps document <head> metadata in sync with the current route and language.
 * Renders nothing. Because this is a client-rendered SPA, every page should
 * mount a <Seo /> so titles, descriptions, and canonical URLs update on
 * navigation rather than staying frozen at the index.html defaults.
 */
export default function Seo({
    title,
    description,
    path,
    lang = 'zh',
    image = DEFAULT_IMAGE,
    type = 'website',
}: SeoProps) {
    useEffect(() => {
        const url = `${SITE_URL}${path}`;
        const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

        document.title = fullTitle;
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

        upsertMeta('name', 'description', description);
        upsertLink('canonical', url);

        // Open Graph
        upsertMeta('property', 'og:title', fullTitle);
        upsertMeta('property', 'og:description', description);
        upsertMeta('property', 'og:url', url);
        upsertMeta('property', 'og:image', image);
        upsertMeta('property', 'og:type', type);
        upsertMeta('property', 'og:site_name', SITE_NAME);
        upsertMeta('property', 'og:locale', lang === 'zh' ? 'zh_CN' : 'en_US');

        // Twitter
        upsertMeta('name', 'twitter:card', 'summary_large_image');
        upsertMeta('name', 'twitter:title', fullTitle);
        upsertMeta('name', 'twitter:description', description);
        upsertMeta('name', 'twitter:image', image);
    }, [title, description, path, lang, image, type]);

    return null;
}
