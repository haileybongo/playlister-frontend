export const requestToken = () => {
    let SpotifyWebApi = require('spotify-web-api-node');


    let spotifyApi = new SpotifyWebApi({
      clientId: 'b41ae126e56548848ff926c613d59933',
      clientSecret: '3c9a5b40395d451395f25e0f2008c4ee',
    });
    debugger

    }


export const searchSongs = (data) => {
    return (dispatch) => {
        let genres = "indie"
        let acousticness = ".5"
        let danceability = ".4"
        let energy = ".5"
        let popularity = ".7"
        let tempo = ".5"
      dispatch({type: 'LOADING_RESULTS'})
      fetch(`https://api.spotify.com/v1/recommendations?seed_genres=`+`${genres}`+`&target_acousticness=`+`
      ${acousticness}`+`&target_danceability=`+`${danceability}`+`&target_energy=`+`${energy}`+
      `&target_popularity=`+`${popularity}`+`&target_tempo=`+`${tempo}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json', 
            'Authorization': 'Basic b41ae126e56548848ff926c613d59933:3c9a5b40395d451395f25e0f2008c4ee'
          }}).then(response => {
        return response.json()
      }).then(data => {debugger})
    }
  }



//   const spotifyApi = new SpotifyWebApi({
//     clientId: process.env.SPOTIFY_CLIENT_ID,
//     clientSecret: process.env.SPOTIFY_CLIENT_SECRET
// });


//   {dispatch({
//     type: 'FETCH_SONGS', songs: data})
//     } 


// JSON.stringify('grant_type=client_credentials')


//   return (dispatch) => {
//     fetch(`http://localhost:3000/api/v1/accounts/${accountId}/transactions`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(transaction)
//     })
//     .then(response => response.json())


//   "https://api.spotify.com/v1/recommendations?market=US&
//   seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=indie&
//   seed_tracks=0c6xIDDpzE81m2q797ordA&min_acousticness=0&
//   max_acousticness=1&target_acousticness=.8&target_danceability=.5&
//   min_energy=0.4&min_popularity=50" 
  
//    "Accept: application/json" 
//    "Content-Type: application/json" 
//   -H "Authorization: Bearer BQBUom_DR3U-C1P0RyBXbsOC3LIZCw2YFjuza0Lm_SVlEUKNXgbKHb3lwC_4fRFMm0N7EvzMJaSe9jTsuAnRsvBacnvY8Ky2WCxr_tl4vCm3lFhntbmAML7LXopb3RefkAhLjFNa5VKnYgg"