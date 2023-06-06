import React from 'react';
import './App.css';
import {BrowserRouter as Router , Routes, Route,Navigate, Outlet} from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Navigation from './components/shared/Navigation/Navigation';
import Authenticate from './pages/Authenticate/Authenticate';
import Rooms from './pages/Rooms/Rooms';
import Activate from './pages/activate/Activate';

const isAuth = false;
const user = {
  isActivated : false,
}
const App = () => {
  return (
    <Router>
          <Navigation/>
          <Routes>
              <Route element={<GuestRoutes/>}>
                  <Route path='/authenticate' element={<Authenticate/>}></Route>
                  <Route path='/' element={<Home/>}></Route>
              </Route>

              <Route element={<SemiProtectedRoute/>}>
                  <Route path='/activate' element={<Activate/>}></Route>
              </Route>

              <Route element={<ProtectedRoute/>}>
                  <Route path='/rooms' element={<Rooms/>}></Route>
              </Route>     
          </Routes>
    </Router>
  )
}

export default App;



const GuestRoutes = () => {
    return (
      isAuth ? <Navigate to="/rooms"/> : <Outlet/>
    )
}

const SemiProtectedRoute = () => {
    return(
        !isAuth ? <Navigate to="/authenticate"/> : !user.isActivated ? <Outlet/> : <Navigate to="/rooms"/>
    )
}

const ProtectedRoute = () => {
  return(
      !isAuth ? <Navigate to='/authenticate'/> : !user.isActivated ? <Navigate to="/activate"/> : <Outlet/>
      )
}
