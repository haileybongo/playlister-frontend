import React from 'react'
import Playlists from '../components/Playlists'
import PlaylistInput from '../components/PlaylistInput'
import { connect } from 'react-redux'
import {fetchPlaylists} from '../actions/fetchPlaylists'
import Song from '../components/Song'
import {Route, Link} from 'react-router-dom'
import Playlist from '../components/Playlist'

class PlaylistContainer extends React.Component {

    componentDidMount () {
        this.props.fetchPlaylists()
    }
 
    render() {



        return (
            <div>
                < PlaylistInput />
                <Playlists playlists={this.props.playlists} />
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