// Header.js
import * as React from 'react';
import Dashboard from './Dashboard';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import About from './About';
import Home from './Home';


function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <h2>SIET college</h2>
          <ul className="loginlink">
            <li>
              <Link to="/" className="links home-link">
                Home
              </Link>
              <Link to="/about-us">About us</Link>
                {/* {put ur component over here..i want totally atleast 5 components} */}
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about-us" element={<About />} />
   
      </Routes>
    </Box>
  );
}

export default Header;
