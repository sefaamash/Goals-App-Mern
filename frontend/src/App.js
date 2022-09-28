import React from 'react';
//BrowserRouter is the router is used to keep your UI sync with URL
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Components/Header';
import Dashboard from './Pages/DashBoard';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Goals from './Pages/Goals';
import Protected from './Components/Protected'
import './index.css';
import UpdateGoals from './Pages/Update';

function App() {
  //Giving Dashboard and Goals component as a prop in Protected component so the idea is Protected component wil;l wor as middle ware .
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Protected Cmp={Dashboard} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<SignUp />} />
            <Route path='/goals' element={ <Protected Cmp={Goals} />} />
            <Route path='/update/:id' element={ <Protected Cmp={UpdateGoals} />} />
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
