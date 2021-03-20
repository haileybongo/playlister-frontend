import {Link} from 'react-router-dom'
import React, { Component } from 'react';


class Playlists extends Component {

render(){
    
        return (
            <div className="playlistTiles"> 
             {this.props.playlists.map( playlist =>
                <div style={{padding:'20px', border: '2px solid white', borderRadius: '5px', textAlign:'center', height:'220px', width:'220px', background:'rgba(0, 0, 0, 0.1)'}}>
                    {playlist.attributes.songs[0] ? <img src={playlist.attributes.songs[0].image} style={{border:'2px solid white', borderRadius: '5px'}} width="80" height="80"/> : <div><br/><br/></div> }
                     
                     <p><Link to={`/playlist/${playlist.id}`} style={{ fontWeight:'bold', color: 'white', textAlign:'center', fontSize:'12pt'}}>{playlist.attributes.name} </Link></p>
                    <p style={{fontFamily: 'Quicksand', fontWeight:'bold', color: 'white', textAlign:'center', fontSize:'12pt'}}> {playlist.attributes.description}</p>
                </div>)}
            </div>
        )
    
        }
}

export default Playlists

