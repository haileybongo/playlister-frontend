import React from 'react'


const Song = (props) => {

        return (
            <div>
               <iframe src={`https://open.spotify.com/embed/track/${props.song.spotify_id}`} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        )
    
}

export default Song