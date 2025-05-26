// App.jsx 
import React, { useState, lazy, Suspense } from 'react';
import Topbar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import PageSkeleton from './components/LoadingSkeleton/PageSkeleton';
import Home from './pages/Home';  // Import Home eagerly

// Lazy load all other page components
const Academics = lazy(() => import('./pages/Academics'));
const Admissions = lazy(() => import('./pages/Admissions'));
const JoinAsFaculty = lazy(() => import('./pages/JoinAsFaculty'));
const Contact = lazy(() => import('./pages/Contact'));
const People = lazy(() => import('./pages/People'));
const Research = lazy(() => import('./pages/Research'));
const About = lazy(() => import('./pages/About'));
const SearchResults = lazy(() => import('./pages/SearchResults'));

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
<div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #581c87, #1e3a8a, #312e81)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '1rem',
          animation: 'pulse 2s infinite'
        }}>
          Coming Soon
        </h1>
        <p style={{
          fontSize: 'clamp(1.25rem, 4vw, 2rem)',
          color: '#d1d5db',
          marginBottom: '2rem',
          maxWidth: '42rem',
          margin: '0 auto 2rem auto'
        }}>
         Stay tuned for updates!
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem'
        }}>
          <div style={{
            width: '12px',
            height: '12px',
            backgroundColor: 'white',
            borderRadius: '50%',
            animation: 'bounce 1s infinite'
          }}></div>
          <div style={{
            width: '12px',
            height: '12px',
            backgroundColor: 'white',
            borderRadius: '50%',
            animation: 'bounce 1s infinite',
            animationDelay: '0.1s'
          }}></div>
          <div style={{
            width: '12px',
            height: '12px',
            backgroundColor: 'white',
            borderRadius: '50%',
            animation: 'bounce 1s infinite',
            animationDelay: '0.2s'
          }}></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
      
    </div>
    
  );
}

export default App;
