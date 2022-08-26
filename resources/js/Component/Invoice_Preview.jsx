import React, { useState } from 'react'
import Clientdata from './SubComponent/Clientdata'
import Dates from './SubComponent/Dates'
import Footer from './SubComponent/Footer'
import Header from './SubComponent/Header'
import Maindetails from './SubComponent/Maindetails'
import Notes from './SubComponent/Notes'
import './Supplier.css';



function Invoice_Preview() {
  const [showInvoice,setShowInvoice] = useState(false)
  const [name,setName] = useState("")
  const [address,setAddress] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [bankname,setBankname] = useState("")
  const [bankAccount,setBankAccount] = useState("")
  const [website,setWebsite] = useState("")
  const [ClientName,setClientName] = useState("")
  const [ClientAddress,setClientAddress] = useState("")
  const [InvoiceNumber,setInvoiceNumber] = useState("")
  const [InvoiceDate,setInvoiceDate] = useState("")
  const [DueDate,setDueDate] = useState("")
  const [notes,setNotes] = useState("")
  const handleprint = () =>{
    window.print()
  }
  return (
    <>
    <main className='p-5'>
      {showInvoice ? <div>
        <Header />
        <Maindetails />
        <Clientdata />
        <Dates />
        <Notes />
        <Footer />
        
      </div>:(
        <>
        <label htmlFor="name">Enter Your Name</label>
        <input type="text" name='text' id='name' placeholder='Enter Name' autoComplete='off' value={name} onChange={()=> setName(e.target,value)}/>

        <label htmlFor="address">Enter Your address</label>
        <input type="text" name='text' id='address' placeholder='Enter address' autoComplete='off' value={address} onChange={(e)=> setAddress(e.target,value)}/>

        <label htmlFor="email">Enter Your email</label>
        <input type="text" name='text' id='email' placeholder='Enter email' autoComplete='off' value={email} onChange={(e)=> setEmail(e.target,value)}/>

        <label htmlFor="phone">Enter Your phone</label>
        <input type="text" name='text' id='phone' placeholder='Enter phone' autoComplete='off' value={phone} onChange={(e)=> setPhone(e.target,value)}/>

        <label htmlFor="bankname">Enter Your bankname</label>
        <input type="text" name='text' id='bankname' placeholder='Enter bankname' autoComplete='off' value={bankname} onChange={(e)=> setBankname(e.target,value)}/>
 
        <label htmlFor="bankAccount">Enter Your bankAccount</label>
        <input type="text" name='text' id='bankAccount' placeholder='Enter bankAccount' autoComplete='off' value={bankAccount} onChange={(e)=> setBankAccount(e.target,value)}/>
 
        <label htmlFor="website">Enter Your website</label>
        <input type="text" name='text' id='website' placeholder='Enter website' autoComplete='off' value={website} onChange={(e)=> setWebsite(e.target,value)}/>

         <label htmlFor="ClientName">Enter Your ClientName</label>
        <input type="text" name='text' id='ClientName' placeholder='Enter ClientName' autoComplete='off' value={ClientName} onChange={(e)=> setClientName(e.target,value)}/>

         <label htmlFor="ClientAddress">Enter Your ClientAddress</label>
        <input type="text" name='text' id='ClientAddress' placeholder='Enter ClientAddress' autoComplete='off' value={ClientAddress} onChange={(e)=> setClientAddress(e.target,value)}/>

         <label htmlFor="InvoiceNumber">Enter Your Name</label>
        <input type="text" name='text' id='InvoiceNumber' placeholder='Enter InvoiceNumber' autoComplete='off' value={InvoiceNumber} onChange={(e)=> setInvoiceNumber(e.target,value)}/>

         <label htmlFor="InvoiceDate">Enter Your InvoiceDate</label>
        <input type="text" name='text' id='InvoiceDate' placeholder='Enter InvoiceDate' autoComplete='off' value={InvoiceDate} onChange={(e)=> setInvoiceDate(e.target,value)}/>

         <label htmlFor="DueDate">Enter Your DueDate</label>
        <input type="text" name='text' id='DueDate' placeholder='Enter DueDate' autoComplete='off' value={DueDate} onChange={(e)=> setDueDate(e.target,value)}/>
        
        <label htmlFor="notes">Enter Your notes</label>
        <input type="text" name='text' id='notes' placeholder='Enter notes' autoComplete='off' value={notes} onChange={(e)=> setNotes(e.target,value)}/>
  
  
 
 
        <button onClick={()=> setShowInvoice(true)}>Preview Invoice</button>
        </>
        
      )}
      

     
      
      
     
      
      
    </main>
      
    </>
  )
}

export default Invoice_Preview
