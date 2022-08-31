import React from 'react'
import AddArtists from '../Addartists/Addartists'
import { useState } from 'react'

export default function Form() {
  const[addArtist,setAddArtist]=useState(false);

  return (
    <div className='form'>
        <h2>
            Add a New Song
        </h2>
        <form>
           <div><label className='songname'>Song Name</label>
            <input type='text'></input></div>
            <div><label className='songname'>Date Released</label>
            <input type='text'></input></div>
            <label className='artwork'>Artwork</label>
            <button>Upload Image</button>
            <div><label className='artists'>Artists</label>
            <button>Search</button>
            <button onClick={()=> setAddArtist(true)}>+  Add Artists</button>
            
            </div>
            <div>
            <button>Cancel</button>
            <button>Save</button>   
             
            </div>
        </form>
        <AddArtists trigger={addArtist} setTrigger={setAddArtist}>
              <h2>Add Artists</h2>
              <hr/>
              
                <form>
                <div>
                  <lable>Artist Name</lable>
                  <input type='text'></input>
                  </div>
                  <div>
                  <lable>Date of Birth</lable>
                  <input type='date'></input>
                  </div>
                  <div>
                  <lable>Bio</lable>
                  <input type='text'></input>
                  </div>
                  <div>
                  <button className='cancel-btn'>Cancel</button>
                    
                  <button>Save</button>
                  </div>
                </form>
              
            </AddArtists>
    </div>
  )
}
