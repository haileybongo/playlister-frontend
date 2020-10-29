import React from 'react'
import SearchResults from '../components/SearchResults'
import SearchInput from '../components/SearchInput'
import { connect } from 'react-redux'
import { searchSongs } from '../actions/searchSongs'


class SearchContainer extends React.Component {

    // componentDidMount () {
    //     this.props.searchSongs()
    // }
 
    render() {

        return (
            <div>
                <SearchInput searchSongs= {searchSongs}/>
                <SearchResults />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        playlists: state.playlists,

    }
}

export default connect (mapStateToProps, { searchSongs })(SearchContainer)