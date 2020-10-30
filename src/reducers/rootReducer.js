
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    playlists: playlistReducer,
    songs: songsReducer,
    search: searchReducer

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
            return {
                state: action.playlists.data,
                loading: false
            }
        case 'DELETE_PLAYLIST':
            const idx = state.findIndex(playlist => playlist.id === action.id);
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
        // case 'LOADING_RESULTS':
        //     return {
        //     state,
        //     loading: true}
        case 'FETCH_RESULTS':
   
            return {
                results: action.results.data,
                loading: false
            }
        case 'ADD_TOKEN':
            return{
                ...state,
                token: action.payload
               }
        case 'ADD_RESULTS':
            return{
                ...state,
                results: action.payload
            }
              
      default:
        return state;
        }
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