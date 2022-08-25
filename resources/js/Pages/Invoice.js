import React from 'react'
import Supplier from '../Component/Supplier';
import './Userpagestyle.css';


function Invoice({}) {
  return (
    <div>
        
        <h2 className='main_text'>Supplier Data</h2>
        <div className='data'>
            <Supplier />
            
        </div> 
      
    </div>
  )
}

export default Invoice
