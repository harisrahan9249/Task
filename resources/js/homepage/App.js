import React from 'react'

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Invoice from '../Pages/Invoice';
import User_info from '../Pages/User_info';
import Navbar from '../Component/Navbar';
import Invoice_maker from '../Pages/Invoice_maker';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<User_info />} />
        <Route path='/Suppliers' element={<Invoice />} />
        <Route path='/Invoice_Making' element={<Invoice_maker />} />
      </Routes>
    </Router>
  )
}

export default App
