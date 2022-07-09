import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import Nav from '../common/nav/Nav';
import Home from '../features/home/Home';
import Login from '../features/auth/login/Login';
import SignUp from '../features/auth/signup/SignUp';
import './app.css'

const App = () => {
  return (
    <div className='container app__container'>
      <Router>
        <Header />
        <Nav />
        <div className='content__body'>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
