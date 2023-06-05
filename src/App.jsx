import React from 'react';
import './App.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Navigation from './components/shared/Navigation/Navigation';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

const App = () => {
  return (
    <Router>
          <Navigation/>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/register' element={<Register/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
          </Routes>
    </Router>
  )
}

export default App