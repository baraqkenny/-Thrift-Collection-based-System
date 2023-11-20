import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './registeration/Login';
import SignUp from './registeration/SignUp';

function App() {

  return (
    <section className='app__container'>
     <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/sign-up" element={<SignUp/>} />
     </Routes>
    </section>
  )
}

export default App
