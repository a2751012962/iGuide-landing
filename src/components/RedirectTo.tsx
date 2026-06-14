import { Navigate } from 'react-router-dom';
import { Head } from 'vite-react-ssg';

/**
 * Client-side redirect used for the bare root and legacy unprefixed paths.
 * Edge redirects in public/_redirects handle direct hits; this is the in-app
 * fallback. The prerendered HTML for these thin pages is marked noindex and
 * given a title so it never competes with the real per-language pages.
 */
export default function RedirectTo({ to }: { to: string }) {
    return (
        <>
            <Head>
                <title>iGuide</title>
                <meta name="robots" content="noindex, follow" />
                <link rel="canonical" href={`https://iguide.chat${to}`} />
            </Head>
            <Navigate to={to} replace />
        </>
    );
}
