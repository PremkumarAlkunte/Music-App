import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from './Components/Content/Content'
import AddSongs from './Components/Addsongs/Addsongs';
import AddArtists from './Components/Addartists/Addartists';

export default function App() {
  return (
    <div className='App'>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={Content}></Route>
        </Routes>
      </BrowserRouter> */}
      {/* <Content/> */}
      <AddSongs/>
          
      </div>
  )
}