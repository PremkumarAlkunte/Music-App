import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Addartists.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'


export default function Addartists() {

  const[data,setData]=useState({
    artistname:"",
    date:"",
    bio:"",
    
  })
  const handleAdd=()=>{
    
    console.log(data)
    console.log("handleAdd works")
  //   axios({
  //     url: "",
  //     method: "POST",
  //     headers: {
  //     },
  //     data: data
  // }).then((res)=> {
  //     console.log(res)
  // }).catch((err)=> {
  //     console.log(err)
  }

  return ( 

    
    <>
    <Navbar/>
    <div className='content'>
      
      <div className='addartists'>
        <h3>Add Artists</h3>
              <hr/>
              
                <form>
                <div>
                  <lable>Artist Name</lable>
                  <input className='name' onChange={e => setData({ ...data, artistname: e.target.value })} type='text'></input>
                  </div>
                  <div>
                  <lable>Date of Birth</lable>
                  <input onChange={e => setData({ ...data, date: e.target.value })} type='date' className='date'></input>
                  </div>
                  <div>
                  <lable>Bio</lable>
                  <textarea onChange={e => setData({ ...data, bio: e.target.value })} className='bio' rows='3'></textarea>
                  </div>
                  <div>
                  <Link to='/addsongs'><button className='cancel-btn'>Cancel</button></Link>
                    
                  <button className='save-btn' onClick={handleAdd} >Done</button>
                  </div>
                </form>
                </div>
    </div>
    </>
  ) 
}
// }
