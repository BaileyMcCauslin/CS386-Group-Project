import React from 'react';
import { Login } from './login';
import { Home } from './home';
import { SignUp } from './signup';
import { Survey } from './survey';
import { Route, Switch, Redirect, Router, Routes, BrowserRouter } from 'react-router-dom';

import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> }/>
        <Route path="/Home" element={ <Home /> }/>
        <Route path="/Survey" element={ <Survey /> } />
        <Route path="/SignUp" element={ <SignUp /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
