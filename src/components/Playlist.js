import React from 'react'
import Song from './Song'

const Playlist = (props) => {

    let playlist = props.playlists.filter(playlist => playlist.id === props.match.params.id)[0]

        return (
            <div>
              <h1>{playlist ? playlist.attributes.name : null}</h1>
              {playlist ? playlist.attributes.description : null}<br/><br/>
              {playlist ? playlist.attributes.songs.map(song => <Song song = {song}/>) : null}
             
            </div>
        )
    

}

export default Playlist
