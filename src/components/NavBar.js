  
import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (

        <div className= "navbar">
            
        <Link to='/' style={{fontSize: '40px',   float:'left', fontWeight: '900'}} className="siteName"><img src="https://img.icons8.com/ios-glyphs/30/000000/earbud-headphones.png"/> Playlister  </Link>
        <Link to='/playlists/new' style={{paddingRight: '10px', paddingTop:'40px', color: 'black'}} className="navbar-item"> Create</Link>
        <Link to='/playlists' style={{paddingRight: '10px', paddingTop:'40px', color: 'black'}} className="navbar-item"> Browse </Link>
        <Link to='/search/new' style={{paddingRight: '10px', paddingTop:'40px', color: 'black'}} className="navbar-item"> Search</Link>
        </div>


  )
}

export default NavBar


