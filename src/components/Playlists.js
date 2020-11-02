import {Link} from 'react-router-dom'
import React, { Component } from 'react';


class Playlists extends Component {

render(){
        return (
            <div>
             {this.props.playlists.map( playlist =>
                <div>
                     <Link to={`/playlist/${playlist.id}`}>{playlist.attributes.name} </Link>
                </div>)}
            </div>
        )
    
        }
}

export default Playlists

// {this.props.playlists.map(playlist => <div> <Playlist key = {playlist.id} playlist={playlist} /> </div> )}