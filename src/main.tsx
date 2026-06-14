import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './App';
import './index.css';

// vite-react-ssg entry: builds a data router from `routes`, hydrates on the
// client and renders static HTML for every route at build time. The build
// step (`vite-react-ssg build`) imports the named `createRoot` export below.
export const createRoot = ViteReactSSG({ routes });
