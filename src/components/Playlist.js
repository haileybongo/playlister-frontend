import React from 'react'
import {Route, Link} from 'react-router-dom'
import Song from './Song'

class Playlist extends React.Component {

    render(){

        return (
            <div>
              {this.props.playlist.attributes.name}<br/>
              {this.props.playlist.attributes.description}<br/>
              {this.props.playlist.attributes.songs.map(song => <Song song = {song}/>)}
            </div>
        )
    
}
}

export default Playlist
