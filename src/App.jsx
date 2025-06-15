import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <nav className='navbar'>
        <p>E- Bus Pass</p>
      </nav>
      <div className='container'>
       
        <div className='main-container'>
          <img className='bookmark' src="./bookmark.png" alt="" />
          <h3>DTC And Cluster Bus Pass</h3>
          <img className='passport' src="/photo.jpg" alt="" width={180}/>
          <p className='sameP'>ASHISH</p>
          <p className='sameP'>Student All route AC/Non AC</p>
          
          <span className='pass'>

            <span className='BusPass'>Bus Pass No.</span>
            <span className='appNo'> 7502022581577</span>

          </span>

          <p className='redP'>Valid from 10/02/2025 to 9/7/2025</p>

          <div className='foot-img'>
            <img src="./sign.png" alt="" width={80} />
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
