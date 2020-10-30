
export const addPlaylist = (data) => {
    
    return (dispatch) => {
      fetch('http://localhost:3000/api/playlists', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(playlist => dispatch({type: 'ADD_PLAYLIST', payload: playlist}) )
    }
  
  }

  