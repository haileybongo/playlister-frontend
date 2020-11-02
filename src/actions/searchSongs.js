export const searchSongs = (data= {}, token) =>{
  
    return (dispatch) => {
      dispatch({type: 'LOADING_RESULTS'})

    let url = "https://api.spotify.com/v1/recommendations?market=US&seed_genres=" + data.selectedGenres
    
    if(data.acousticness !== ''){
        let acousticness
        if (data.acousticness < 10 ){
         acousticness = data.acousticness / 10 }
         else {acousticness = data.acousticness}
        url = url.concat("&target_acousticness=" + acousticness)
    }

    if(data.danceability !== ''){
        let danceability
        if (data.danceability < 10 ){
            danceability = data.danceability / 10 }
         else {danceability = data.danceability}
        url = url.concat("&target_danceability=" + danceability)
    }

    if(data.energy !== ''){
        let energy
        if (data.energy < 10 ){
            energy = data.energy / 10 }
         else {energy = data.energy}
        url = url.concat("&target_energy=" + energy)
    }

    if(data.popularity !== ''){
        url = url.concat("&target_popularity=" + data.popularity)
    }



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




// "https://api.spotify.com/v1/recommendations?market=US&seed_genres=" + data.selectedGenres + "&target_acousticness=" + data.acousticness + 
//       "&target_danceability=" + data.danceability + "&target_energy=" + data.energy + "&target_popularity=" + data.popularity

// let genres = data.selectedGenres
// let acousticness = "0.5"
// let danceability = "0.4"
// let energy = "0.5"
// let popularity = "70"
