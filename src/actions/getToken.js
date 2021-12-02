export const getToken = () => {
    return (dispatch) => {

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
            debugger
            dispatch({type: 'ADD_TOKEN', payload: body.access_token})
        }
    })
}
}
