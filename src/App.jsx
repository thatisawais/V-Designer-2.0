import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Signup from './Signup';
import UserLogin from './UserLogin';
import Home from './Home';
import UploadPattern from './UploadPattern';
import './App.css'; 
import video from './assets/background-video.mp4';

const Homepage = () => {
  return (
    <div className='view'>
      <Navbar />
      <div className="container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src= {video} type="video/mp4" />
        </video>
        <div className="content">
          <h1>Welcome to V-Designers</h1>
          <p>Craft Infinite Designs with AI-Pattern Wizardry</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <div >
        <div >
          <Routes>
            <Route path="/" element={<Homepage />} /> {/* Render Homepage component for the root path */}
            <Route path="/signup" element={<Signup />} /> {/* Render Signup component for the /signup path */}
            <Route path="/login" element={<UserLogin />} /> {/*Render UserLogin component for the /login path*/}
            <Route path="/home" element={<Home />} />  {/* Render Home component for the /home path */}
            <Route path="/upload-pattern" element={<UploadPattern />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
