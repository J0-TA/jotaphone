import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; 
import PLP from './views/PLP'; 

import './App.css';

const App = () => (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PLP />} />
        {/* <Route path="/" exact component={PDP} /> */}
      </Routes>
    </Router>
);


export default App;