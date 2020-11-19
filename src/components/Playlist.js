import React from 'react'
import Song from './Song'

const Playlist = (props) => {

    let playlist = props.playlists.filter(playlist => playlist.id === props.match.params.id)[0]

        return (
            <div>
              <h1 style={{fontWeight:'bold', color: 'white', textAlign:'center', fontSize:'30pt'}}>{playlist ? playlist.attributes.name : null}</h1>
              {playlist ? <p style={{fontFamily:'Quicksand', fontWeight:'bold', color: 'white', textAlign:'center', fontSize:'20pt'}}> {playlist.attributes.description}</p> : null}<br/><br/>
              {playlist ? playlist.attributes.songs.map(song => <Song song = {song} playlist={playlist}/>) : null}
             
            </div>
        )
    

}

export default Playlist
