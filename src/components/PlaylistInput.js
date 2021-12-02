import React, {useState} from 'react'
import { connect } from 'react-redux'
import { addPlaylist } from '../actions/addPlaylist'
import { useDispatch } from 'react-redux'

function PlaylistInput(props){

      const dispatch = useDispatch()

       const [name, setName] = useState ('')
       const [description, setDescription] = useState ('')

       const state = {
        name: name,
        description: description
      }
    
    
      const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addPlaylist(state))
        setName('')
        setDescription('')
        
        setTimeout(function(){ event.target.parentElement.innerHTML =  "Saved"; }, 1000);
      }
 

        return (
            <div className="container" style={{position:"relative"}}>
                <br/>
                <br/>
            <div className="playlistForm">
                <br/>
                <label style={{fontSize: '20pt'}}>Create Playlist</label>
                <br/>
                <form onSubmit={(event) => handleSubmit(event)} style={{borders: '1px solid white'}}><br/>
                <label style={{fontFamily: 'Quicksand'}}> Name: </label> <br/>
                <input className= "inputForm" type="text" value ={name} name="name" onChange={(event) => setName(event.target.value)}/>
                <br/>
                <br/>
                <label style={{fontFamily: 'Quicksand'}}> Description: </label><br/>
                <input className= "inputForm" type="textarea" value ={description} name="description" onChange={(event) => setDescription(event.target.value)}/>
                <br/>
                <input type="submit" style={{fontFamily: 'Quicksand'}} value="CREATE"/>
                </form>
                <br/>
                <br/>
                </div>
                </div>
        )
}

export default PlaylistInput