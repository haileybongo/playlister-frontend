import React from 'react'
import { connect } from 'react-redux'
import { addPlaylist } from '../actions/addPlaylist'

class PlaylistInput extends React.Component {

    state = {
        name: '',
        description: ''
      }
    
      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    
      handleSubmit = (event) => {
        event.preventDefault()
        this.props.addPlaylist(this.state)
        this.setState({
          name: '',
          description: ''
        })
        setTimeout(function(){ event.target.parentElement.innerHTML =  "Saved"; }, 1000);
      }
 
    render() {
        return (
            <div className="container" style={{position:"relative"}}>
                <br/>
                <br/>
            <div className="playlistForm">
                <br/>
                <label style={{fontSize: '20pt'}}>Create Playlist</label>
                <br/>
                <form onSubmit={(event) => this.handleSubmit(event)} style={{borders: '1px solid white'}}><br/>
                <label style={{fontFamily: 'Quicksand'}}> Name: </label> <br/>
                <input className= "inputForm" type="text" value ={this.state.name} name="name" onChange={(event) => this.handleChange(event)}/>
                <br/>
                <br/>
                <label style={{fontFamily: 'Quicksand'}}> Description: </label><br/>
                <input className= "inputForm" type="textarea" value ={this.state.description} name="description" onChange={(event) => this.handleChange(event)}/>
                <br/>
                <input type="submit" style={{fontFamily: 'Quicksand'}} value="CREATE"/>
                </form>
                <br/>
                <br/>
                </div>
                </div>
        )
    }
}

export default connect(null, {addPlaylist})(PlaylistInput)