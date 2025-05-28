import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EventCateringSection from './components/EventCateringSection';
import ArticlesSection from './components/ArticlesSection';
import SocialMediaSection from './components/SocialMediaSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <EventCateringSection />
              <ArticlesSection />
              <SocialMediaSection />
              <Footer />
              <ScrollToTopButton />
            </>
          } />
          <Route path="/ourmenu" element={
            <>
              <MenuPage />
              <Footer />
              <ScrollToTopButton />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
