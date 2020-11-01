import React from 'react'
import {Route, Link} from 'react-router-dom'
import Playlist from '../components/Playlist'


const Playlists = (props) => {



        return (
            <div>
              {props.playlists.map(playlist => <Playlist key = {playlist.id} playlist={playlist} /> )}
            </div>
        )
    
}

export default Playlists

//{props.playlists.map(playlist => <Playlist playlist={playlist} /> )}