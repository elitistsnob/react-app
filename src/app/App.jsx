import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio/Portfolio.jsx';
import Contact from '../pages/Contact';
import ReactGA from 'react-ga4';

const TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;
ReactGA.initialize(TRACKING_ID);

function usePageViews() {
    let location = useLocation();
    useEffect(() => {
        ReactGA.send({
            hitType: 'pageview',
            page: location.pathname + location.search,
        });
    }, [location]);
}

function App() {
    usePageViews();

    return (
        <>
            <div className="site-wrapper">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default App;
