import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './components/styles/App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import WhoWeAre from './components/pages/WhoWeAre';
import SignIn from './components/pages/SignIn';
import Footer from './components/Footer';


function App() {
  return (
    <>
    
    <Router>
      <NavBar />
      <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/who-we-are' element={<WhoWeAre />} />
          <Route path='/sign-in' element={<SignIn />} />
            
          

          
      </Routes>
      
      <Footer />
    
    </Router>
  
    </>
  );
}

export default App;
