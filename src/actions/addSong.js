
export const addSong = (playlistId, song = {}) => {
        debugger
    let data = {
        playlistId, song 
    }
    
    return (dispatch) => {
      fetch('http://localhost:3000/api/songs', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => dispatch({type: 'ADD_SONG', playlists: data}) )
    }
  
  }