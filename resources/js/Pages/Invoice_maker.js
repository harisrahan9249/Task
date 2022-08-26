import React, { useState } from 'react'
import axios from 'axios';
import Invoice_Preview from '../Component/Invoice_Preview';
// import './User.css';

function Invoice_maker() {
    const [userstate,setUserState] = useState([]);
  return (
    <div className='user_data'>

        <button className='btn1' onClick={()=>{
            axios.post('http://www.task.test/api/userdata').then((respone)=>{
                console.log(respone.data)
                setUserState(respone.data)
            })

        }}>Make Invoice</button>
        {userstate.map((obj)=>{
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
                                <th>supplier_id</th>
                                <th>company_name</th>
                                <th className='phone_no'>phone</th>
                                <th>website</th>
                                <th>company_ICO</th>
                                <th>Action</th>

                                
                                
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
                            <td>{obj.supplie.supplier_id}</td>
                            <td>{obj.supplie.company_name}</td>
                            <td>{obj.supplie.phone}</td>
                            <td>{obj.supplie.website}</td>
                            <td>{obj.supplie.company_ICO}</td>
                            <td><button className='btn1' onClick={()=>{

                            }}>Create invoice</button></td>
                            
                        </tbody>
                    </table>
                    
                </div>
            )
        })}

      <div>
        <Invoice_Preview />
      </div>
    </div>
  )
}

export default Invoice_maker
