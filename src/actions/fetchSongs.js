
export function fetchSongs(){
    return(dispatch) => {
        dispatch({type: 'LOADING_SONG'})
    fetch('http://localhost:3000/api/songs')
    .then(response => response.json())
    .then(data => {dispatch({
        type: 'FETCH_SONGS', songs: data})
        })
    }}
    