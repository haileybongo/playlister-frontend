import React from 'react'
import {Route, Link} from 'react-router-dom'
import Song from './Song'

const Playlist = (props) => {

    let playlist = props.playlists[props.match.params.id]
    debugger


        return (
            <div>
              {this.playlist.attributes.name}<br/>
              {props.playlist.attributes.description}<br/>
              {props.playlist.attributes.songs.map(song => <Song song = {song}/>)}
            </div>
        )
    

}

export default Playlist
