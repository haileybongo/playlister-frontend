
export function fetchPlaylists(){
    return(dispatch) => {
        dispatch({type: 'LOADING_PLAYLISTS'})
    fetch('http://localhost:3000/api/playlists')
    .then(response => response.json())
    .then(data => {dispatch({
        type: 'FETCH_PLAYLISTS', playlists: data})
        })
    }}
    



