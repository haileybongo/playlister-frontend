export const searchSongs = (data= {}, token) =>{
  
    return (dispatch) => {
        debugger
      dispatch({type: 'LOADING_RESULTS'})
      fetch("https://api.spotify.com/v1/recommendations?market=US&seed_genres=" + data.selectedGenres + "&target_acousticness=" + data.acousticness + 
      "&target_danceability=" + data.danceability + "&target_energy=" + data.energy + "&target_popularity=" + data.dispatchpopularity, {
          method: 'GET',
          headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json', 
            "Authorization": "Bearer " + token
          }})
          .then(response => { return response.json()
      }).then(data => {debugger} )
    }
}

// let genres = data.selectedGenres
// let acousticness = "0.5"
// let danceability = "0.4"
// let energy = "0.5"
// let popularity = "70"
