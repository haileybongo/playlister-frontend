import React from 'react'
import Playlists from '../components/Playlist'
import PlaylistInput from '../components/PlaylistInput'
import { connect } from 'react-redux'


class PlaylistContainer extends React.Component {
 
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

export default connect (mapStateToProps,)(PlaylistContainer)