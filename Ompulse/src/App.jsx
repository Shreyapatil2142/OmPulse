import React , { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";

const App = () => {
  return (
       
      <Router>
        <Routes>          
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    
  );
};

export default App;
