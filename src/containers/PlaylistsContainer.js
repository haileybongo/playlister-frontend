import React, {useEffect} from 'react'
import Playlists from '../components/Playlists'
import PlaylistInput from '../components/PlaylistInput'
import {fetchPlaylists} from '../actions/fetchPlaylists'
import {Route, Switch} from 'react-router-dom'
import Playlist from '../components/Playlist'
import { useDispatch, useSelector } from 'react-redux'


function PlaylistContainer (){

    const dispatch = useDispatch()

    const playlists = useSelector(state => state.playlists);

    useEffect(() => {
        dispatch(fetchPlaylists())

    })

        return (
            <div>
                <Switch>
                    <Route path='/playlists/new' component={PlaylistInput}/>                
                    <Route path='/playlist/:id' render={(routerProps) => <Playlist {...routerProps} playlists={playlists} />}/>
                    <Route path='/playlists'  render={(routerProps) => <Playlists {...routerProps} playlists={playlists} />}/>              
                </Switch>
            </div>
        )

}

export default PlaylistContainer