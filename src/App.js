import React from 'react';
import './App.css';
import './index.css';
import { Routes, Route, useLocation, BrowserRouter } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Team from './pages/Team';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function AppRoutes(){
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><Home /></motion.div>} />
        <Route path="/events" element={<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><Events /></motion.div>} />
        <Route path="/team" element={<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><Team /></motion.div>} />
        <Route path="/blog" element={<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><Blog /></motion.div>} />
        <Route path="/contact" element={<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><Contact /></motion.div>} />
      </Routes>
    </AnimatePresence>
  )
}

function App(){
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
