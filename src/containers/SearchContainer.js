import React from 'react'
import SearchResults from '../components/SearchResults'
import SearchInput from '../components/SearchInput'
import { connect } from 'react-redux'
import { getToken } from  '../actions/getToken'

class SearchContainer extends React.Component {

    componentDidMount () {

        this.props.getToken()

    }

 
    render() {
           
        return (
            <div>
                <SearchInput token={this.props.search.token} getToken={getToken}/>
                <SearchResults results={this.props.search.results}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        playlists: state.playlists,
        search: state.search

    }
}



export default connect (mapStateToProps, {  getToken })(SearchContainer)