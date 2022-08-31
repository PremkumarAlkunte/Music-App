import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand"><button>Home</button></a>
          <form className="search" role="search">
            <input className="searchbar" type="search" placeholder="Search" aria-label="Search"/>
            {/* <button className="" type="submit">Search</button> */}
          </form>
      </div>
      </nav>
    </div>
  )
}
