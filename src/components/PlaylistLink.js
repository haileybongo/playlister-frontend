import React from 'react'
import {Link} from 'react-router-dom'


const PlaylistLink = (props) => {
    debugger

    return(
        <div>
            Song Added to <Link to={`/playlist/${props.id}`}>{props.attributes.name} </Link>
        </div>

    )


}

export default PlaylistLink