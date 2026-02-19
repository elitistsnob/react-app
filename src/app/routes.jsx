// src/app/routes.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Standalone routes */}
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />

                {/* Catch-all */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
