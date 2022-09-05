import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  
  return (
    <nav className="navbar navbar-light bg-light justify-content-between" id='navbar'>
  <Link to='/'><a className="navbar-brand" id='home'><u>Home</u></a></Link>
  <form className="form-inline">
    <input id='search' className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button id='srch-btn' className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>


  </form>
</nav>
  )
}
