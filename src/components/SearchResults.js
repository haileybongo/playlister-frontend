import React from 'react'
import PlaylistLink from './PlaylistLink'
import {Link} from 'react-router-dom'
//import ReactDOM from 'react-dom';

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

            return  <div class="row" >
            <div class="col-sm-2"></div>
            <div class="col-sm-2" >
                {results.map(result => 
                <div id={result.id} >
                     
                <iframe src={`https://open.spotify.com/embed/track/${result.id}`} width="56%" height="90" frameborder="0" allowtransparency="true" allow="encrypted-media" ></iframe>

                             
                </div>)}
                </div>
            <div class="col-sm-2">
           
                {results.map(result => 
                    <div className="container" >
                       <br/>
                       <br/>
                    <form onSubmit={(event) => this.handleOnSubmit(event, result)} >
                        <select onChange={(event) => this.handleChange(event)} style={{width: '200px'}}>
                        <option value = "" disabled selected hidden> Choose Playlist</option>
                        {this.displayPlaylists(this.props.playlists)}
                        </select>
                        <input type="submit" value="Add Song!" style={{backgroundColor:'rgba(0,0,0,0.0)'}}/>
                    </form> 
                    <br/>
                   
                    </div>
                    
                )}
                
            </div>
          </div> 
                

               
        }
                

 
    render() {

        if (this.props.results !== undefined){
        return (
            <div>
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

// let playlist = this.props.playlists.filter(playlist => playlist.id == this.state.playlistId)[0]

//<iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>