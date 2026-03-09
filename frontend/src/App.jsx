// App.jsx 
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import PageSkeleton from './components/LoadingSkeleton/PageSkeleton';

import "./pages/labs/nodata.css"

// Lazy load all components and pages
const Topbar = lazy(() => import('./components/Topbar/Topbar'));
const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const LabSubNavbar = lazy(() => import('./components/labnav'));
// const Chatbot = lazy(() => import('./components/Chatbot/Chatbot'));

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Forms = lazy(() => import('./pages/Forms'));
const Statsofprojects = lazy(() => import('./pages/statsofprojects'));
const ResearchAreas = lazy(() => import('./pages/ResearchAreas'));
const Statsofpublications = lazy(() => import('./pages/statsofpublications'));
const Message = lazy(() => import('./pages/Message'));
const Fellowship = lazy(() => import('./pages/Fellowship'));
const Workshops = lazy(() => import('./pages/Workshops'));
const Biosafety = lazy(() => import('./pages/biosafety'));
const People = lazy(() => import('./pages/People'));
const Sponsored = lazy(() => import('./pages/Sponsored'));
const Consultancy = lazy(() => import('./pages/Consultancy'));
const CSRP = lazy(() => import('./pages/CSRProjects'));
const Funding = lazy(() => import('./pages/Funding_statistics'));
const Office = lazy(() => import('./pages/Office_statistics'));
const Documents = lazy(() => import('./pages/Documents'));
const Searchresults = lazy(() => import('./pages/searchresults')); 
const Ipr = lazy(() => import('./pages/iprcommittee'));
const Ethics = lazy(() => import('./pages/ethicscommitte'));
const Publications = lazy(() => import('./pages/Publications'));
const Csr = lazy(() => import('./pages/Csr'));
const Deans = lazy(() => import('./pages/Deans'));
const Sgnf = lazy(() => import('./pages/sgnf'));
const Patents = lazy(() => import('./pages/Patents'));
const Cse = lazy(() => import('./pages/labs/cse'));
const Human = lazy(() => import('./pages/labs/humanities'));
const Bio = lazy(() => import('./pages/labs/biosciences'));
const Maths = lazy(() => import('./pages/labs/mathematics'));
const Phy = lazy(() => import('./pages/labs/physics'));
const Che = lazy(() => import('./pages/labs/chemistry'));
const Mech = lazy(() => import('./pages/labs/mechanical'));
const Cheeng = lazy(() => import('./pages/labs/chemicaleng'));
const Civil = lazy(() => import('./pages/labs/civil'));
const Eece = lazy(() => import('./pages/labs/ece'));
const Feedback = lazy(() => import('./pages/feedback'));

// ScrollToTop logic inside App.jsx
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isLabsPage = location.pathname.startsWith('/Labs');


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden flex flex-col">
      <Suspense fallback={<PageSkeleton />}>
        <Topbar toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
      </Suspense>

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
          <Suspense fallback={<PageSkeleton />}>
            <Navbar closeMenu={() => setIsMobileMenuOpen(false)} />
          </Suspense>
        </div>

        <div className="w-full sm:pl-[220px] lg:pl-[250px] flex flex-col min-h-full">
          <div className="max-w-full overflow-x-hidden flex-grow">
            {/* Scroll restoration on route change */}
            <ScrollToTop />
            {isLabsPage && (
              <Suspense fallback={<PageSkeleton />}>
                <LabSubNavbar />
              </Suspense>
            )}
            <Routes>
              <Route path="/" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Home />
                </Suspense>
              } />
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
              <Route path="/statistics/Office" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Office />
                </Suspense>
              } />
              <Route path="/documents" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Documents />
                </Suspense>
              } />
              <Route path="/Projects/sgnf" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Sgnf />
                </Suspense>
              } />
             
             <Route path="/search" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Searchresults />
                </Suspense>
              } />
              <Route path="/Committees/ethicscommittee" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Ethics />
                </Suspense>
              } />
              <Route path="/Committees/biosafety" element={
                <Suspense fallback={<PageSkeleton />}>
                 <Biosafety/>
                </Suspense>
              } />
              <Route path="/Committees/ipr" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Ipr />
                </Suspense>
              } />
            <Route path="/Projects/Consultancy" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Consultancy/>
                </Suspense>
              } />
           
                <Route path="/Projects/Sponsored" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Sponsored/>
                </Suspense>
              } />
            
            <Route path="/Projects/Csr" element={
                <Suspense fallback={<PageSkeleton />}>
                  <CSRP/>
                </Suspense>
              } />
            <Route path="/Projects/Fellowships" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Fellowship/>
                </Suspense>
              } />
            <Route path="/Projects/Workshops" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Workshops/>
                </Suspense>
              } />

               <Route path="/research-areas" element={
                <Suspense fallback={<PageSkeleton />}>
                  <ResearchAreas />
                </Suspense>
              } />

              <Route path="/publications" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Publications />
                </Suspense>
              } />

              <Route path="/statistics/projects" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Statsofprojects />
                </Suspense>
              } />
                <Route path="/statistics/publications" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Statsofpublications />
                      </Suspense>
              } />
              {/* <Route path="/message" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Message />
                </Suspense>
              } /> */}

              <Route path="/deans" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Deans />
                </Suspense>
              } />

              
              <Route path="/Labs/cse" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Cse/>
                </Suspense>
              } />
               <Route path="/Labs/civil" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Civil/>
                </Suspense>
              } />
              
               <Route path="/Labs/eece" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Eece/>
                </Suspense>
              } />
              <Route path="/Labs/biosciences" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Bio />
                </Suspense>
              } />
              <Route path="/Labs/humanities" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Human />
                </Suspense>
              } />
              <Route path="/Labs/mechanical" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Mech/>
                </Suspense>
              } />
              <Route path="/Labs/chemistry" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Che />
                </Suspense>
              } />
              <Route path="/Labs/chemicaleng" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Cheeng />
                </Suspense>
              } />
              <Route path="/Labs/physics" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Phy />
                </Suspense>
              } />
              <Route path="/Labs/mathematics" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Maths />
                </Suspense>
              } />

              <Route path="/patents" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Patents />
                </Suspense>
              } />

              <Route path="/feedback" element={
                <Suspense fallback={<PageSkeleton />}>
                  <Feedback />
                </Suspense>
              } />
            </Routes>
          </div>
          <Suspense fallback={<PageSkeleton />}>
            <Footer />
          </Suspense>
        </div>
      </div>
      
      {/* Chatbot - Available on all pages */}
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
    </div>
  );
}

export default App;
