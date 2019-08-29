import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';


function App() {
  return (
    <Router>
    <div className="App">
      < Navbar/>
     
    <Landing />
     <Footer/>
 
    </div>
    </Router>
  );
}

export default App;
