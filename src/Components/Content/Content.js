import React from 'react'
import './Content.css'
import Navbar from '../Navbar/Navbar'

export default function Content() {
  return (
    <div>
      <Navbar/>
        <div className='content-heading'>
            <h2 className='heading'>Top 10 Songs</h2>
            <div className='button'><button className='btn'>+  Add Songs</button></div>
        </div>
    </div>
  )
}
