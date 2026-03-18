import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProjects from './pages/AllProjects';
import ProjectDetail from './pages/ProjectDetail';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <BrowserRouter>
      <div className="bg-blobs">
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
        <div className="bg-blob blob-3"></div>
        <div className="bg-blob blob-4"></div>
        <div className="bg-blob blob-5"></div>
        <div className="bg-blob blob-6"></div>
      </div>
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <div className="app">
              <Header theme={theme} toggleTheme={toggleTheme} />
              <main>
                <Hero />
                <Projects />
                <Contact />
              </main>
              <Footer />
            </div>
          }
        />

        {/* All Projects */}
        <Route
          path="/projects"
          element={<AllProjects theme={theme} toggleTheme={toggleTheme} />}
        />

        {/* Single Project Detail */}
        <Route
          path="/projects/:id"
          element={<ProjectDetail theme={theme} toggleTheme={toggleTheme} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
