import React from 'react'
import PlaylistLink from './PlaylistLink'
import {Link} from 'react-router-dom'
import Collapsible from 'react-collapsible';

class SearchResults extends React.Component {

    state = {
        playlistId: '',
      }

   displayPlaylists = (playlists) => {

       return playlists.map(playlist => <option value={playlist.id}> {playlist.attributes.name} </option>)
   }



   handleChange = (event) => {
    this.setState({
      playlistId: event.target.value,
    })
  }

handleOnSubmit = (event, result) => {
    event.preventDefault();

    this.props.addSong(this.state.playlistId, result);
    //let playlist = this.props.playlists.filter(playlist => playlist.id == this.state.playlistId)[0]
    this.setState({
        playlistId: ''
    });

    setTimeout(function(){ event.target.children[1].value = "Added!"; }, 2000);
    //setTimeout(function(){ event.target.children[1].value = "Add Song!"; }, 4000)
    //setTimeout(function(){ event.target[0].value = "Choose Playlist"; }, 4000)

  }

    displayResults = (results) => { 

            return  results.map(result =>
                <div class="row" style={{borderBottom: '1px solid white'}}>
                     <div class="col-sm-1" >
                        <iframe src={`https://open.spotify.com/embed/track/${result.id}`} width="80" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media" ></iframe>
                    </div>
                    <div class="col-sm-3" >
                       <p style={{fontFamily: 'Quicksand', fontWeight:'bold', color: 'white', textAlign:'center'}}> {result.name} </p>
                       <p style={{fontFamily: 'Quicksand', color:'white', textAlign:'center'}}>{result.artists[0].name} </p>
                    </div>
                    <div class="col-sm-3" >
                        <br/>
                        <Collapsible trigger="+">
                        <form onSubmit={(event) => this.handleOnSubmit(event, result)} >
                            <select onChange={(event) => this.handleChange(event)} style={{width: '200px'}}>
                            <option value = "" disabled selected hidden> Choose Playlist</option>
                            {this.displayPlaylists(this.props.playlists)}
                            </select>
                            <input type="submit" value="Add Song!" style={{backgroundColor:'rgba(0,0,0,0.0)'}}/>
                        </form> 
                        </Collapsible>
                    </div>
                    <div class="col-sm-5" >
                    </div>
                    </div>
                )
                
        
             
        }
                

 
    render() {

        if (this.props.results !== undefined){
        return (
            <div clann="container">
               {this.displayResults(this.props.results)}
              
            </div>
        )}
        else {
            return(
                <div>

                </div>
        )
    }
}
}


export default SearchResults
