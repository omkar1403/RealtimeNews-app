
import './App.css';
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react'

const App=()=>{
   const pagesize=12;
    return (
      <div>
        <Router>

          <Navbar />
          <Routes>
            <Route exact path="/general" element={<News key="general" pageSize={pagesize} country="in" category="general" />} />
            <Route exact path="/" element={<News key="general" pageSize={pagesize} country="in" category="general" />} />
            <Route exact path="/business" element={<News key="business" pageSize={pagesize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={pagesize} country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News key="health" pageSize={pagesize} country="in" category="health" />} />
            <Route exact path="/science" element={<News key="science" pageSize={pagesize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={pagesize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={pagesize} country="in" category="technology" />} />
          </Routes>


        </Router>
      </div>
    )
  }

  export default App;