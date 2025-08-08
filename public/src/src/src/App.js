import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import DonorFlow from './components/DonorFlow';
import RecipientFlow from './components/RecipientFlow';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/donor" element={<DonorFlow />} />
          <Route path="/recipient" element={<RecipientFlow />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
