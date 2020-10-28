import React from 'react'
import SearchResults from '../components/SearchResults'
import SearchInput from '../components/SearchInput'
import { connect } from 'react-redux'
import { searchSongs } from '../actions/searchSongs'
import { requestToken } from '../actions/searchSongs'

class SearchContainer extends React.Component {

    componentDidMount () {
        this.props.requestToken()
    }
 
    render() {

        return (
            <div>
                <SearchInput />
                <SearchResults />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        playlists: state.playlists
    }
}

export default connect (mapStateToProps, { searchSongs, requestToken })(SearchContainer)