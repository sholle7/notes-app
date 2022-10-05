import React from 'react'
import './Header.css'

function Header({toggleLightMode}) {
  return (
    <div className='header-container'>
        <h1>Notes</h1>
        <button onClick={()=>{toggleLightMode()}}>Toggle Mode</button>
    </div>
  )
}

export default Header