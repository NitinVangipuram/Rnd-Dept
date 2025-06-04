// App.jsx 
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SearchProvider } from './components/Search/SearchContext';
import Topbar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import PageSkeleton from './components/LoadingSkeleton/PageSkeleton';
import Home from './pages/Home';
import Forms from './pages/Forms';
import Csr from './pages/Csr';
import SearchResultsPage from './pages/SearchResultsPage';

// Lazy load other pages
const People = lazy(() => import('./pages/People'));
const Sponsored = lazy(() => import('./pages/Sponsored'));;
const Consultancy = lazy(() => import('./pages/Consultancy'));
const CSRP= lazy(() => import('./pages/CSRProjects'));
const Funding = lazy(() => import('./pages/Funding_statistics'));
const Office = lazy(() => import('./pages/Office_statistics'));
const Documents = lazy(() => import('./pages/Documents'));
const Searchresults = lazy(() => import('./pages/searchresults')); 
const Csr= lazy(() => import('./pages/Csr')); 
const Ethics = lazy(() => import('./pages/Ethicscommitte'));

// ScrollToTop logic inside App.jsx
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);
  return null;
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <SearchProvider>
      <div className="app-container">
        <Topbar toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />

        <div 
          className={`sm:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`} 
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div className="flex flex-grow relative" style={{ paddingTop: '70px' }}>
          <div 
            className={`fixed top-[70px] left-0 bottom-0 w-[280px] sm:w-[220px] lg:w-[250px] z-40 
              bg-white shadow-md transition-transform duration-300 ease-in-out
              ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}`}
          >
            <Navbar closeMenu={() => setIsMobileMenuOpen(false)} />
          </div>

          <div className="w-full sm:pl-[220px] lg:pl-[250px] flex flex-col min-h-full">
            <div className="max-w-full overflow-x-hidden flex-grow">
              {/* Scroll restoration on route change */}
              <ScrollToTop />
              <ScrollToHash />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/forms" element={
                  <Suspense fallback={<PageSkeleton />}>
                    <Forms />
                  </Suspense>
                } />
                <Route path="/people" element={
                  <Suspense fallback={<PageSkeleton />}>
                    <People />
                  </Suspense>
                } />
                <Route path="/FundingStatistics" element={
                  <Suspense fallback={<PageSkeleton />}>
                    <Funding />
                  </Suspense>
                } />
                <Route path="/OfficeStatistics" element={
                  <Suspense fallback={<PageSkeleton />}>
                    <Office />
                  </Suspense>
                } />
                <Route path="/documents" element={
                  <Suspense fallback={<PageSkeleton />}>
                    <Documents />
                  </Suspense>
                } />
                <Route path="/csr" element={
                  <Suspense fallback={<PageSkeleton />}>
                    <Csr />
                  </Suspense>
                } />
                <Route path="/search" element={<SearchResultsPage />} />
                <Route path="*" element={<div style={{padding: "2rem"}}>No results found.</div>} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </SearchProvider>
  );
}

export default App;
