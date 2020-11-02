  
import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/playlists' style={{paddingRight: '10px'}}> Browse Playlists  </Link>
      <Link to='/search/new'> New Search</Link>
    </div>

  )
}

export default NavBar