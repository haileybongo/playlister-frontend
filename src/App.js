import React from 'react';
import {fetchPlaylists} from './actions/fetchPlaylists'
import { connect } from 'react-redux'
import PlaylistsContainer from './containers/PlaylistsContainer'
import SongsContainer from './containers/SongsContainer'
import SearchContainer from './containers/SearchContainer'

class App extends React.Component {

  componentDidMount () {
      this.props.fetchPlaylists()
  }

  render(){
  return (
    <div className="App" >
      <PlaylistsContainer />
      <SearchContainer />
    </div>
  );}
}

export default connect (null, { fetchPlaylists })(App);


