import React from 'react'
import { Link } from 'react-router-dom';
import './Navstyle.css'

function Navbar() {
  return (
    <div className='Navbar'>
        <div className="logo">Easy Invoice </div>
        <nav className='Links'>
            <Link className='Link' to='/'>User Data</Link>
            <Link className='Link' to='/Invoice_Making'>Supliers Data</Link>

        </nav>
      
    </div>
  )
}

export default Navbar
