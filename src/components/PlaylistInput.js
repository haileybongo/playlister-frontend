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
      }
 
    render() {
        return (
            <div>
                Create New Playlist!
                <br/>
              
                <form onSubmit={(event) => this.handleSubmit(event)}><br/>
                <label> Name: </label> <br/>
                <input type="text" value ={this.state.name} name="name" onChange={(event) => this.handleChange(event)}/>
                <br/>
                <br/>
                <label> Description: </label><br/>
                <input type="text" value ={this.state.description} name="description" onChange={(event) => this.handleChange(event)}/>
                <br/>
                <input type="submit" />
                </form>
                <br/>
                <br/>

            
            </div>
        )
    }
}

export default connect(null, {addPlaylist})(PlaylistInput)