import React, {useState} from 'react'
import Collapsible from 'react-collapsible';
import { addSong } from '../actions/addSong'
import { useDispatch} from 'react-redux'

function SearchResults (props){

    const [playlistId, setPlaylistId] = useState('')
    const dispatch = useDispatch()

    const displayPlaylists = (playlists) => {

       return playlists.map(playlist => <option value={playlist.id}> {playlist.attributes.name} </option>)
   }



   const handleChange = (event) => {
      setPlaylistId(event.target.value)    
  }

    const handleOnSubmit = (event, result) => {
    event.preventDefault();

    dispatch(addSong(playlistId, result));
    setPlaylistId('')

    setTimeout(function(){ event.target.children[1].value = "Added!"; }, 2000)

  }

    const displayResults = (results) => { 
 
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
                        <Collapsible trigger="+" class="Collapsible">
                        <form onSubmit={(event) => handleOnSubmit(event, result)} >
                            <select onChange={(event) => handleChange(event)} style={{width: '200px'}}>
                            <option value = "" disabled selected hidden> Choose Playlist</option>
                            {displayPlaylists(props.playlists)}
                            </select>
                            <input type="submit" value="Add Song!" style={{backgroundColor:'rgba(0,0,0,0.0)'}}/>
                        </form> 
                        </Collapsible>
                    </div>
                    <div class="col-sm-4" >
                    </div>
                    </div>
                    
                )
                
        
             
        }
                

 
        if (props.results !== undefined){
        return (
            <div class="container" id="resultsContainer" >

               {displayResults(props.results)}

            </div>
        )}
        else {
            return(
                <div id="resultsContainer">

                </div>
        )
    }
}



export default SearchResults
