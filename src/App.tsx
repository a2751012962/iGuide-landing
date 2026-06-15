import type { RouteRecord } from 'vite-react-ssg';
import About from './pages/About';
import FeatureA from './pages/FeatureA';
import FeatureB from './pages/FeatureB';
import Terms from './pages/Terms';
import Layout from './components/Layout';
import RedirectTo from './components/RedirectTo';

/**
 * Route table consumed by vite-react-ssg. Every content page exists at an
 * explicit per-language URL (/en/... and /zh/...) so each language version is
 * a separately indexable, prerendered HTML file. Language is passed to each
 * page as a prop rather than held in component state.
 *
 * Legacy unprefixed paths (/about, ...) and the bare root are redirected to
 * the English version at the edge via public/_redirects; the client-side
 * <Navigate> entries below are a fallback for in-app navigation.
 */
export const routes: RouteRecord[] = [
    { path: '/', element: <RedirectTo to="/en/about" /> },
    { path: '/en', element: <RedirectTo to="/en/about" /> },
    { path: '/zh', element: <RedirectTo to="/zh/about" /> },

    // Content pages share a persistent shell (ambient background + crossfade
    // page transition) provided by <Layout>; each remains its own prerendered
    // URL via the explicit child paths below.
    {
        element: <Layout />,
        children: [
            { path: '/en/about', element: <About lang="en" /> },
            { path: '/zh/about', element: <About lang="zh" /> },
            { path: '/en/featureA', element: <FeatureA lang="en" /> },
            { path: '/zh/featureA', element: <FeatureA lang="zh" /> },
            { path: '/en/featureB', element: <FeatureB lang="en" /> },
            { path: '/zh/featureB', element: <FeatureB lang="zh" /> },
            { path: '/en/terms', element: <Terms lang="en" /> },
            { path: '/zh/terms', element: <Terms lang="zh" /> },
        ],
    },

    // Legacy paths (fallback; primary handling is edge redirects in _redirects)
    { path: '/about', element: <RedirectTo to="/en/about" /> },
    { path: '/featureA', element: <RedirectTo to="/en/featureA" /> },
    { path: '/featureB', element: <RedirectTo to="/en/featureB" /> },
    { path: '/terms', element: <RedirectTo to="/en/terms" /> },
];
