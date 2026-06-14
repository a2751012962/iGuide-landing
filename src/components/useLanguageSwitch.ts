import { useLocation } from 'react-router-dom';

/**
 * Given the current language, returns the URL of the equivalent page in the
 * other language by swapping the leading /en or /zh path segment. Used by the
 * navbar language toggle so switching language changes the URL (separate-URL
 * i18n) instead of mutating component state.
 */
export function useLanguageSwitch(lang: 'zh' | 'en'): string {
    const { pathname } = useLocation();
    const other = lang === 'zh' ? 'en' : 'zh';
    return pathname.replace(/^\/(en|zh)(?=\/|$)/, `/${other}`);
}
