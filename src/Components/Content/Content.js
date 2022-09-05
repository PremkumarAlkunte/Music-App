import React from 'react'
import './Content.css'
import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'


export default function Content() {

  // const history=useHistory();

  // const handleClick = () => {
  //   history('/Addsongs');
  // };

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
      <th scope="col">song</th>
      <th scope="col">Dateof Release</th>
      <th scope="col">Artist</th>
      <th scope="col">Rate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

<table className="table">
  <thead className="thead-light">
    <tr>
      <th scope="col">Artist</th>
      <th scope="col">Date of Birth</th>
      <th scope="col">Songs</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      
    </tr>
  </tbody>
</table>
        </div>
    </div>
  )
}
