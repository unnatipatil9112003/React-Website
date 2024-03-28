import React from "react";
import "./App.css";
import Navbar from "./components/inc/Navbar";
import Home from "./components/pages/Home";
import Aboutus from "./components/pages/About";
import Contactus from "./components/pages/Contact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/inc/Footer";

function App() {
  return (
    <>
      <Router>
         <Navbar />
         <Routes>        
            
          <Route path="/" element={<Home />}>
          </Route>
        
          <Route path="/about" element={<Aboutus />}>
          </Route>

          <Route path="/contact" element={<Contactus />}>
          </Route>

          </Routes>

          <Footer />
      </Router>
      
      
    </>
  );
}

export default App;
