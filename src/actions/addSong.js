
export const addSong = (playlistId, song = {}) => {
 
   let data = {
        song_name: song.name,
        song_link: song.external_urls.spotify,
        artist_name: song.artists[0].name, 
        artist_link: song.artists[0].external_urls.spotify,
        album_name: song.album.name,
        album_link:  song.album.external_urls.spotify,
        image: song.album.images[0].url, 
        spotify_id: song.id, 
        playlist_id: playlistId 
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
      .then(data => dispatch({type: 'ADD_PLAYLIST', playlists: data}) )
    }
  
  }