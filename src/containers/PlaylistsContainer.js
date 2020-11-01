import React from 'react'
import Playlists from '../components/Playlists'
import PlaylistInput from '../components/PlaylistInput'
import { connect } from 'react-redux'
import {fetchPlaylists} from '../actions/fetchPlaylists'


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