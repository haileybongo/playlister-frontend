export const searchSongs = (data) => {
 
    return (dispatch) => {
        debugger
        let request = require('request'); 

        let client_id =  process.env.REACT_APP_CLIENT_ID
        let client_secret =  process.env.REACT_APP_CLIENT_SECRET


        let authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
        },
        form: {
            grant_type: 'client_credentials'
        },
        json: true
        };

        request.post(authOptions, function(error, response, body) {
            
        if (!error && response.statusCode === 200) {

            let token = body.access_token;
            let genres = "indie"
            debugger
            let acousticness = "0.5"
            let danceability = "0.4"
            let energy = "0.5"
            let popularity = "70"
          dispatch({type: 'LOADING_RESULTS'})
          fetch("https://api.spotify.com/v1/recommendations?market=US&seed_genres=" + genres + "&target_acousticness=" + acousticness + 
          "&target_danceability=" + danceability + "&target_energy=" + energy + "&target_popularity=" + popularity, {
              method: 'GET',
              headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json', 
                "Authorization": "Bearer " + token
              }})
              .then(response => { return response.json()
          }).then(data => {debugger})

            
        }
        });
        }}


