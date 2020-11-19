import React from 'react'
import { deleteSong } from '../actions/deleteSong'
import Collapsible from 'react-collapsible';
import { connect } from 'react-redux'

class Song extends React.Component {

    handleOnSubmit = (event) => {
        event.preventDefault();
    
        this.props.deleteSong(this.props.playlist, this.props.song);
    
      }

        render () {
            return(
            <div class="container">
                 <div class="row" style={{borderBottom: '1px solid white'}}>

                        <div class="col-sm-1" >
                        <iframe src={`https://open.spotify.com/embed/track/${this.props.song.spotify_id}`} width="80" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media" ></iframe>
                        </div>
                        <div class="col-sm-3" >
                            <br/>
                        <p style={{fontFamily: 'Quicksand', fontWeight:'bold', color: 'white', textAlign:'center'}}> {this.props.song.song_name} </p>
                        <p style={{fontFamily: 'Quicksand', color:'white', textAlign:'center'}}>{this.props.song.artist_name} </p>
                        </div>
                        <div class="col-sm-3" >
                        <Collapsible trigger="-" class="Collapsible">
                        <form onSubmit={(event) => this.handleOnSubmit(event)} >
                            <input type="submit" value="Remove Song" style={{backgroundColor:'rgba(0,0,0,0.0)'}}/>
                        </form> 
                        </Collapsible>
                        </div>
                        <div class="col-sm-4" >
                        </div>
                        </div>
            </div>
            )}
    
}

export default connect (null,{ deleteSong })(Song)