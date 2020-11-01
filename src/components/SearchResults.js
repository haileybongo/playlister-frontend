import React from 'react'

class SearchResults extends React.Component {

   displayPlaylists = (playlists) => {

       return playlists.map(playlist => <option value={playlist.id}> {playlist.attributes.name} </option>)
   }

    displayResults = (results) => { 
        debugger
            return results.map(result => 
                <section>
                <iframe src={`https://open.spotify.com/embed/track/${result.id}`} width="250" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    <form onSubmit={(event) => this.props.handleOnSubmit(event, result)}>
                        <select onChange={(event) => this.props.handleChange(event)}>
                        <option value = "" disabled selected hidden> Choose Playlist</option>
                        {this.displayPlaylists(this.props.playlists)}
                        </select>
                        <input type="submit" value="Add Song!" />
                    </form>            


                </section>
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