import React, { useState } from 'react'
import axios from 'axios';
import './Supplier.css';

function Supplier() {
    const [data,setData] =useState([]);
  return (
    <div className='user_data'>
        <button className='btn1' onClick={()=>{
            axios.get('http://www.task.test/api/suppliers').then((res)=>{
                console.log(res.data)
                setData(res.data)
            })
        }}>Suppliers</button>
        {data.map((ob)=>{
            return(
                <div className='table_one'>
                    <table>
                        <thead>
                            <tr>
                                <th>supplier_id</th>
                                <th>company_name</th>
                                <th className='phone_no'>phone</th>
                                <th>website</th>
                                <th>company_ICO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td>{ob.supplier_id}</td>
                            <td>{ob.company_name}</td>
                            <td>{ob.phone}</td>
                            <td>{ob.website}</td>
                            <td>{ob.company_ICO}</td>
                        </tbody>
                    </table>
                </div>

            )
        })}
      
    </div>
  )
}

export default Supplier
