import React from 'react'
import './Content.css'
import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'
import { useEffect, useState } from "react";
import Star from '../star';


export default function Content() {
  const [songData, setSongData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3003/song")
      .then((data) => {
        return data.json();
      })
      .then((songData) => {
        console.log(songData)
        setSongData(songData.reverse());
      });
  }, []);

  const [artistData, setArtistData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3003/artist")
      .then((data) => {
        return data.json();
      })
      .then((artistData) => {
        console.log(artistData)
        setArtistData(artistData.reverse());
      });
  }, []);

  return (
    <div>
      <Navbar/>
        <div className='content-heading'>
            <h2 className='heading'>Top 10 Songs</h2>
            <div className='my-button'><Link to='/addsongs'><button  type="button" className="btn btn-secondary" id='add-btn'>+  Add Song</button></Link></div>
        </div>
        <div className='my-table'>
        <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Artwork</th>
      <th scope="col">Song</th>
      <th scope="col">Dateof Release</th>
      <th scope="col">Artist</th>
      <th scope="col">Rate</th>
    </tr>
  </thead>
  
  <tbody>

    

      {songData.map((mysong,index)=>{
        return(
          <>
      <tr>
      <th scope="row"><img src={mysong.artwork} className='artwork-img'/></th>
      <td>{mysong.songname}</td>
      <td>{mysong.date}</td>
      <td>{mysong.artist}</td>
      <td><Star/></td>
      
    </tr>
          </>
        )
      })}

  </tbody>
</table>
<h2 className='heading'>Top 10 Artists</h2>
<table className="table">
  <thead className="thead-light">
    <tr>
      <th scope="col">Artist</th>
      <th scope="col">Date of Birth</th>
      <th scope="col">Songs</th>
      
    </tr>
  </thead>
  <tbody>

  {artistData.map((myartist,index)=>{
        return(
          <>
      <tr>
      <th scope="row">{myartist.artistname}</th>
      <td>{myartist.date}</td>
      <td>{myartist.song}</td>
      
      
    </tr>
          </>
        )
      })}

  </tbody>
</table>
        </div>
    </div>
  )
}