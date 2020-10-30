import React from 'react'

class SearchResults extends React.Component {

   

    displayResults = (results) => { 
            return results.map(result => 
                
                <iframe src={`https://open.spotify.com/embed/track/${result.id}`} width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
             
                )
    }
 
    render() {

        if (this.props.results !== undefined){
        return (
            <div>
               {this.displayResults(this.props.results)}
            </div>
        )}
        else {
            return(
                <div>

                </div>
        )
    }
}
}


export default SearchResults

//<iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>