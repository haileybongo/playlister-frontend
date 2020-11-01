import React from 'react'
import {Route, Link} from 'react-router-dom'
import Song from './Song'

const Playlist = (props) => {

    let playlist = props.playlists.filter(account => account.id == props.match.params.id)[0]

        return (
            <div>
              {playlist ? playlist.attributes.name : null}<br/>
              {playlist ? playlist.attributes.description : null}<br/>
             
            </div>
        )
    

}

export default Playlist
// {props.playlist.attributes.songs.map(song => <Song song = {song}/>)}