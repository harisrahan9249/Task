import React from 'react'
import UserData from '../Component/UserData';
import './Userpagestyle.css';
function User_info() {
  return (
    <div>
        <h2 className='main_text'>User Data</h2>
        <div className='data'>
            <UserData />
            
        </div>
      
    </div>
  )
}

export default User_info
