import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Content from './Components/Content/Content'
import Addsongs from './Components/Addsongs/Addsongs';
import Addartists from './Components/Addartists/Addartists';
import Navbar from './Components/Navbar/Navbar';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Content}></Route>
          <Route exact path='/addsongs' component={Addsongs}></Route>
          <Route exact path='/addartists' component={Addartists} ></Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}