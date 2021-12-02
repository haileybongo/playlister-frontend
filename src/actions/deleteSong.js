
export const deleteSong = (playlist, song) => {

    let data = {
         spotify_id: song.spotify_id, 
         playlist_id: playlist.id
     }
     
     
     return (dispatch) => {
       fetch('http://localhost:3000/api/songs/' + `${song.id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
         method: 'DELETE',
         body: JSON.stringify(data)
       })
       .then(response => response.json())
       .then(data => dispatch({type: 'FETCH_PLAYLISTS', playlists: data}) )
     }
   
   }