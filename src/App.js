import * as React from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
// import Fahim from './pages/Fahim';
// import Ramjan from './pages/Ramjan';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          {/* <Route path="/fahim" element={<Fahim />} />
          <Route path="/ramjan" element={<Ramjan />} /> */}
        </Routes>
      </BrowserRouter>

    
  );
}

export default App;
