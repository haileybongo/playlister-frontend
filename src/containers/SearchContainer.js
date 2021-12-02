import React, {useEffect}  from 'react'
import SearchResults from '../components/SearchResults'
import SearchInput from '../components/SearchInput'
import { getToken } from  '../actions/getToken'
import { addSong } from '../actions/addSong'
import {Route,} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function SearchContainer (){

    const dispatch = useDispatch()

    const state = useSelector(state => state);

    useEffect(() => {
        dispatch(getToken())

    }, []);

          
        return (
            <div>
              
                <Route path='/search/new' render={() => <SearchInput token={state.search.token} getToken={getToken} genres={state.genres}/>}/>
                <Route path='/search/new' render={() =><SearchResults results={state.search.results} playlists={state.playlists} addSong={addSong}/>}/>                          
                
            </div>
        )
    }



export default SearchContainer