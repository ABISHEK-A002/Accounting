import React from 'react';
import Login from './Login';
import "./App.css";
import Register from './Reg';
import "./Reg.css";
import WelcomePage from './WelcomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeVideo from './backgroundVideo.mp4';
function App() 
{
  return (
    
    <div className="App">
      <div className="video-background">
        <video src={WelcomeVideo} autoPlay loop muted className="video" />
      </div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
