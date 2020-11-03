import React from 'react';
import PlaylistsContainer from './containers/PlaylistsContainer'
import SongsContainer from './containers/SongsContainer'
import SearchContainer from './containers/SearchContainer'
import NavBar from './components/NavBar'
import Home from './components/Home'
import {Route,} from 'react-router-dom'

class App extends React.Component {



  render(){
  return (
    <div className="App" >
      <NavBar/>
      <PlaylistsContainer />
      <SearchContainer />
      <Route exact path='/' component={Home}/> 
    </div>
  );}
}

export default App;


