import React from 'react'
import SearchResults from '../components/SearchResults'
import SearchInput from '../components/SearchInput'
import { connect } from 'react-redux'
import { getToken } from  '../actions/getToken'
import { addSong } from '../actions/addSong'


class SearchContainer extends React.Component {

    componentDidMount () {

        this.props.getToken()

    }

    state = {
        playlistId: '',

      }


      handleChange = (event) => {
        this.setState({
          playlistId: event.target.value,
        })
      }

    handleOnSubmit(event, result) {
        event.preventDefault();
        debugger
        this.props.addSong(this.state.playlistId, result);
        this.setState({
            playListId: ''
        });
      }

 
    render() {
           
        return (
            <div>
                <SearchInput token={this.props.search.token} getToken={getToken}/>
                <SearchResults results={this.props.search.results} playlists={this.props.playlists} handleOnSubmit={this.handleOnSubmit} handleChange={this.handleChange}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        playlists: state.playlists,
        search: state.search

    }
}



export default connect (mapStateToProps, {  getToken, addSong })(SearchContainer)