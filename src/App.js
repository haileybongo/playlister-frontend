import React from 'react';
import PlaylistsContainer from './containers/PlaylistsContainer'
import SongsContainer from './containers/SongsContainer'
import SearchContainer from './containers/SearchContainer'
import NavBar from './components/NavBar'

class App extends React.Component {



  render(){
  return (
    <div className="App" >
      <NavBar/>
      <PlaylistsContainer />
      <SearchContainer />
    </div>
  );}
}

export default App;


