import uuid from 'react-uuid';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    playlists: playlistReducer,
    songs: songsReducer,

  });
   
  export default rootReducer;

function playlistReducer(state = {loading: false }, action)  {
    switch (action.type) {
        case 'LOADING_PLAYLIST':
            return {
            state,
            loading: true}
        case 'FETCH_PLAYLISTS':
            return {
                state: action.playlists.data,
                loading: false
            }

      case 'ADD_PLAYLIST':
        return state.concat({id: uuid(),
            text: action.text}) 
    case 'DELETE_PLAYLIST':
        const idx = state.findIndex(restaurant => restaurant.id === action.id);
        return [...state.slice(0,idx), ...state.slice(idx+1)]  
      default:
        return state;
    }
  }

function songsReducer(state = {loading: false }, action)  {
    switch (action.type) {
        case 'LOADING_SONGS':
            return {
            state,
            loading: true}
        case 'FETCH_SONGS':
   
            return {
                state: action.songs.data,
                loading: false
            }

      
        case 'DELETE_REVIEW':
               
        const idx = state.findIndex(review => review.id === action.id);
        return [...state.slice(0,idx), ...state.slice(idx+1)]  
  
      default:
        return state;
    }
  }

  function searchReducer(state = {loading: false }, action)  {
    switch (action.type) {
        case 'LOADING_RESULTS':
            return {
            state,
            loading: true}
        case 'FETCH_RESULTS':
   
            return {
                state: action.results.data,
                loading: false
            }
        }
    }

    const spotifyReducer = (state = []) => {

        let SpotifyWebApi = require('spotify-web-api-node');


        let spotifyApi = new SpotifyWebApi({
        clientId: 'b41ae126e56548848ff926c613d59933',
        clientSecret: '3c9a5b40395d451395f25e0f2008c4ee',
    });

    return state = [...spotifyApi]

    }







//   const catsReducer = (state = { cats: [], loading: false }, action) => {
//     switch(action.type) {
//       case 'LOADING_CATS':
//         return {
//           ...state,
//           cats: [...state.cats],
//           loading: true
//         }
//       case 'ADD_CATS':
//         return {
//           ...state,
//           cats: action.cats,
//           loading: false
//         }
//       default:
//         return state;
//     }
//   }
  
//   export default catsReducer;