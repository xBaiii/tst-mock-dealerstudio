import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={ <Home />}></Route>
        </Routes>
      </BrowserRouter> 
    </>
  );
};

export default App;
