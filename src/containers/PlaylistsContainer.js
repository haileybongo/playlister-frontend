import React from 'react'
import Playlist from '../components/Playlist'
import PlaylistInput from '../components/PlaylistInput'
import { connect } from 'react-redux'
import { fetchPlaylists } from '../actions/fetchPlaylists'
import { addPlaylist } from '../actions/addPlaylist'

class PlaylistContainer extends React.Component {
 
    render() {



        return (
            <div>
                < PlaylistInput />
                <Playlist />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        playlists: state.playlists
    }
}

export default connect (mapStateToProps, { fetchPlaylists, addPlaylist })(PlaylistContainer)