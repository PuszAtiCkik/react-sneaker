import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




import Mainnn from './main/mainn';
import Navbarr from './navbar/navbar';
import Carou from './carousel/carousel';

import './App.css';

function App() {
  return (
    <Router>
      <Navbarr />
      <Carou/>
      <Routes>
        <Route path="/" element={<Mainnn />} />
        
      </Routes>
    </Router>
  );
}

export default App;
