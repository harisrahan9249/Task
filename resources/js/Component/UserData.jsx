import React, { useState } from 'react'
import axios from 'axios';
import './User.css';

function UserData() {
    const [state,setState] = useState([]);
  return (
    <div className='user_data'>

        <button className='btn1' onClick={()=>{
            axios.post('http://www.task.test/api/userdata').then((respone)=>{
                console.log(respone.data)
                setState(respone.data)
            })

        }}>Users</button>
        {state.map((obj)=>{
            return(
                <div className='data'>
                    <table>
                        <thead>
                            <tr>
                                <th>User_Id</th>
                                <th>Name</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>ICO No</th>
                                <th className='address'>Address</th>

                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            <td>{obj.user_id}</td>
                            <td>{obj.name}</td>
                            <td>{obj.user_name}</td>
                            <td>{obj.email}</td>
                            <td>{obj.ICO}</td>
                            <td className='address'>
                                <p>Street:{obj.address.street}</p>
                                <p>suite:{obj.address.suite}</p>
                                <p>city:{obj.address.city}</p>
                                <p>zipcode:{obj.address.zipcode}</p>
                                </td>
                            
                        </tbody>
                    </table>
                 
                </div>
            )
        })}

      
    </div>
  )
}

export default UserData
