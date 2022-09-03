import React, { useState } from 'react'
import './Addsongs.css'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import FileBase64 from "react-file-base64";

export default function Form() {
  
    const[data,setData]=useState({
      songname:"",
      date:"",
      artwork:"",
      artist:"",
    })
    const handleAdd=()=>{
      console.log(data)
      console.log("handleAdd works")
      axios({
        url: "",
        method: "POST",
        headers: {
        },
        data: data
    }).then((res)=> {
        console.log(res)
    }).catch((err)=> {
        console.log(err)
    })
    }
    
  

  return (
    
    <div className='form'>
      <Navbar/>
        <h3 className='addsong'>
            Adding a New Song
        </h3>
        <form>
           <div><label className='songname'>Song Name</label>
            <input onChange={e => setData({ ...data, songname: e.target.value })} className='song' type='text'></input></div>
            <div><label className='songname'>Date Released</label>
            <input onChange={e => setData({ ...data, date: e.target.value })} className='date-birth' type='text'></input></div>
            <label className='artwork'>Artwork Image</label>
            {/* <input type='file' placeholder='Upload File'></input> */}
            <FileBase64 
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setData({ ...data, artwork: base64 })}
                    
                    />
            <div><label className='artists'>Artists</label>
            <select onChange={e => setData({ ...data, artist: e.target.value })} className="form-select" id='select' aria-label="Default select example">
                 <option value='selected'>Search</option>
                 <option value="1">One</option>
                 <option value="2">Two</option>
                 <option value="3">Three</option>
            </select>
            <Link to='/addartists'><button className='artist'>+  Add Artists</button></Link>
            
            </div>
            <div className='sv-button'>
            <Link to='/'><button className='cancel'>Cancel</button></Link>
            <button className='save' onClick={handleAdd}>Save</button>   
             
            </div>
        </form>
    </div>
  )
}
