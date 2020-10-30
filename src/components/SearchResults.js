import React from 'react'

class SearchResults extends React.Component {

   

    displayResults = (results) => { 
            results.map(result => 
                <img src={result.album.images[0].url}/>
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

