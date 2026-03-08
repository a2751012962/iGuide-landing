import { Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/About';
import FeatureA from './pages/FeatureA';
import FeatureB from './pages/FeatureB';
import Terms from './pages/Terms';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/about" replace />} />
      <Route path="/about" element={<About />} />
      <Route path="/featureA" element={<FeatureA />} />
      <Route path="/featureB" element={<FeatureB />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
}
