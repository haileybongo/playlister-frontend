
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    playlists: playlistReducer,
    songs: songsReducer,
    search: searchReducer,
    genres: genreReducer
  });
   
export default rootReducer;

function playlistReducer(state = [], action)  {
    switch (action.type) {
        case 'FETCH_PLAYLISTS':
            return (
                action.playlists.data
            )
        case 'ADD_PLAYLIST':
            return (
                action.playlists.data
            )
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
   
            return (
                action.songs.data,
                {loading: false}
            )
        case 'ADD_SONG':
            return (
                action.playlists.data,
                {loading: false}
            )

      
        case 'DELETE_REVIEW':
               
        const idx = state.findIndex(review => review.id === action.id);
        return [...state.slice(0,idx), ...state.slice(idx+1)]  
  
      default:
        return state;
    }
  }

  function searchReducer(state = {loading: false }, action)  {
    switch (action.type) {
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

    function genreReducer( state = []) {
        state =  ["acoustic",
        "afrobeat",
        "alt-rock",
        "alternative",
        "ambient",
        "anime",
        "black-metal",
        "bluegrass",
        "blues",
        "bossanova",
        "brazil",
        "breakbeat",
        "british",
        "cantopop",
        "chicago-house",
        "children",
        "chill",
        "classical",
        "club",
        "comedy",
        "country",
        "dance",
        "dancehall",
        "death-metal",
        "deep-house",
        "detroit-techno",
        "disco",
        "disney",
        "drum-and-bass",
        "dub",
        "dubstep",
        "edm",
        "electro",
        "electronic",
        "emo",
        "folk",
        "forro",
        "french",
        "funk",
        "garage",
        "german",
        "gospel",
        "goth",
        "grindcore",
        "groove",
        "grunge",
        "guitar",
        "happy",
        "hard-rock",
        "hardcore",
        "hardstyle",
        "heavy-metal",
        "hip-hop",
        "holidays",
        "honky-tonk",
        "house",
        "idm",
        "indian",
        "indie",
        "indie-pop",
        "industrial",
        "iranian",
        "j-dance",
        "j-idol",
        "j-pop",
        "j-rock",
        "jazz",
        "k-pop",
        "kids",
        "latin",
        "latino",
        "malay",
        "mandopop",
        "metal",
        "metal-misc",
        "metalcore",
        "minimal-techno",
        "movies",
        "mpb",
        "new-age",
        "new-release",
        "opera",
        "pagode",
        "party",
        "philippines-opm",
        "piano",
        "pop",
        "pop-film",
        "post-dubstep",
        "power-pop",
        "progressive-house",
        "psych-rock",
        "punk",
        "punk-rock",
        "r-n-b",
        "rainy-day",
        "reggae",
        "reggaeton",
        "road-trip",
        "rock",
        "rock-n-roll",
        "rockabilly",
        "romance",
        "sad",
        "salsa",
        "samba",
        "sertanejo",
        "show-tunes",
        "singer-songwriter",
        "ska",
        "sleep",
        "songwriter",
        "soul",
        "soundtracks",
        "spanish",
        "study",
        "summer",
        "swedish",
        "synth-pop",
        "tango",
        "techno",
        "trance",
        "trip-hop",
        "turkish",
        "work-out",
        "world-music"] 
        return state;
    }


