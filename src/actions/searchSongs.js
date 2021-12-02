export const searchSongs = (data= {}, token) =>{

  debugger

    return (dispatch) => {
      dispatch({type: 'LOADING_RESULTS'})

    let url = "https://api.spotify.com/v1/recommendations?market=US&seed_genres=" + data.selectedGenres
    
    if(data.acousticness !== ''){
        url = url.concat("&target_acousticness=" + data.acousticness / 10)
    }

    if(data.danceability !== ''){ 
        url = url.concat("&target_danceability=" + data.danceability / 10)
    }

    if(data.energy !== ''){
        url = url.concat("&target_energy=" + data.energy / 10)
    }

    if(data.popularity !== ''){
        url = url.concat("&target_popularity=" + data.popularity)
    }

    debugger


      fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`
          }})
          .then(response => { return response.json()
      }).then(data => dispatch({type: 'ADD_RESULTS', payload: data.tracks} ))
    }
}

