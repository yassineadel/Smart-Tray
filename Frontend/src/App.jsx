import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RefItems from './Components/RefItems/RefItems';
import Header from './Components/Header/Header';
import MainContent from './Components/MainContent/MainContent';
import Footer from './Components/Footer/Footer';
import { useEffect } from 'react';
import axios from 'axios';


function App() {
  return (
    <Router>
      <div className="Container">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/other" element={<RefItems />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
