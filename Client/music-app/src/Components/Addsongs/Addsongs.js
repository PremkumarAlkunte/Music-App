import React, { useState, useEffect} from 'react'
import './Addsongs.css'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import FileBase64 from "react-file-base64";

export default function Form() {
  const [artistData, setArtistData] = useState([]);
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
        url: "http://localhost:3003/song",
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
    
   
  useEffect(() => {
    fetch("http://localhost:3003/artist")
      .then((data) => {
        return data.json();
      })
      .then((artistData) => {
        console.log(artistData[1].artistname)
        setArtistData(artistData.reverse());
      });
  }, []);
  

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
            
            <FileBase64 
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setData({ ...data, artwork: base64 })}
                    
                    />
            <div><label className='artists'>Artists</label>
            <select onChange={e => setData({ ...data, artist: e.target.value })} className="form-select" id='select' aria-label="Default select example">
                 <option value='selected'>Search</option>

                  {artistData.map((mysong,i)=>
                  <option key={i} value={mysong.artistname}>{mysong.artistname}</option>
                  )}

                 
                 
            </select>
            <Link to='/addartists'><button className='artist'>+  Add Artists</button></Link>
            
            </div>
            <div className='sv-button'>
            <Link to='/'><button className='cancel'>Cancel</button></Link>
            <Link to='/'><button className='save' onClick={handleAdd}>Save</button> </Link>  
             
            </div>
        </form>
    </div>
  )
}
