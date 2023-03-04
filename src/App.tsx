import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import { users } from "./data.js";


function App() {
  // eslint-disable-next-line
  const [usersList, setuserList] = useState(users);
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login usersList={usersList}/>}/>
        <Route path="/home" element={<Home usersList={usersList}/>}/>

      </Routes>

    </div>
  )
}

export default App