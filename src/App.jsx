import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <NavBar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/aboutme" element={<AboutMe/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
