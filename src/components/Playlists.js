import { render } from '@testing-library/react'
import {Route, Link} from 'react-router-dom'
import Playlist from './Playlist'
import React, { Component } from 'react';


class Playlists extends Component {

render(){
        return (
            <div>
              {this.props.playlists.map(playlist => <div> <Playlist key = {playlist.id} playlist={playlist} /> </div> )}
            </div>
        )
    
        }
}

export default Playlists

