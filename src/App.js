import React from 'react';
import PlaylistsContainer from './containers/PlaylistsContainer'
import SongsContainer from './containers/SongsContainer'
import SearchContainer from './containers/SearchContainer'

class App extends React.Component {



  render(){
  return (
    <div className="App" >
      <PlaylistsContainer />
      <SearchContainer />
    </div>
  );}
}

export default App;


