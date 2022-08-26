import React from 'react'

function Header() {
  return (
    <div>
         <header className='flex flex-col items-center 
      justify-center mb-5'>
        <div> 
          <h2>Invoicer</h2>
        </div>
        <div>
          <ul className='flex items-center
          justify-between flex-wrap'>
            <li><button onClick={handleprint} className='btn btn-print'>print</button></li>
            <li><button className='btn btn-download'>Download</button></li>
            <li><button className='btn btn-send'>Send</button></li>
          </ul>
        </div>
      </header>
      
    </div>
  )
}

export default Header
