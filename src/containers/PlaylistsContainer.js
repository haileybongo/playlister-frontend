import React from 'react'
import Playlists from '../components/Playlists'
import PlaylistInput from '../components/PlaylistInput'
import { connect } from 'react-redux'
import {fetchPlaylists} from '../actions/fetchPlaylists'
import {Route, Switch} from 'react-router-dom'
import Playlist from '../components/Playlist'


class PlaylistContainer extends React.Component {

    componentDidMount () {
        this.props.fetchPlaylists()
    }
 
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/playlists/new' component={PlaylistInput}/>                
                    <Route path='/playlist/:id' render={(routerProps) => <Playlist {...routerProps} playlists={this.props.playlists} />}/>
                    <Route path='/playlists'  render={(routerProps) => <Playlists {...routerProps} playlists={this.props.playlists} />}/>              
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        playlists: state.playlists,
        songs: state.songs
    }
}

export default connect (mapStateToProps, { fetchPlaylists })(PlaylistContainer)