import React from 'react'


const Song = (props) => {

        return (
            <div class="container">
                 <div class="row" style={{borderBottom: '1px solid white'}}>

                        <div class="col-sm-1" >
                        <iframe src={`https://open.spotify.com/embed/track/${props.song.spotify_id}`} width="80" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media" ></iframe>
                        </div>
                        <div class="col-sm-3" >
                            <br/>
                        <p style={{fontFamily: 'Quicksand', fontWeight:'bold', color: 'white', textAlign:'center'}}> {props.song.song_name} </p>
                        <p style={{fontFamily: 'Quicksand', color:'white', textAlign:'center'}}>{props.song.artist_name} </p>
                        </div>
                        <div class="col-sm-3" >
                        <br/>
                        </div>
                        <div class="col-sm-4" >
                        </div>
                        </div>
            </div>
        )
    
}

export default Song