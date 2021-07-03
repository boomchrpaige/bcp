import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import News from './components/pages/News';
import About from './components/pages/About';
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/news' component={News} />
        <Route path='/about' component={About} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
