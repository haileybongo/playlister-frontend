import React from 'react'
import { connect } from 'react-redux'
import { searchSongs } from '../actions/searchSongs'

class SearchInput extends React.Component {
 
    state = {
        genres: ["acoustic",
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
        "world-music"
      ],
        selectedGenres: [],
        acousticness: '',
        danceability: '',
        energy: '',
        popularity: ''
      }

      createGenres() {
        return(
            this.state.genres.map(genre => <button key={genre.index} value ={genre} onClick={(event) => this.handleGenres(event)} > {genre.charAt(0).toUpperCase() + genre.slice(1)} </button> )      
        )
    }
    
      handleGenres(event) {
        let newState = this.state.selectedGenres.concat(event.target.value)
        event.target.style = "border-style:inset; background-color:white"
        this.setState({
          selectedGenres:  newState
        });
      }

      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    
    
      handleOnSubmit(event) {
        event.preventDefault();
        this.props.searchSongs(this.state, this.props.token);
        this.setState({
            genres: ["acoustic",
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
            "world-music"
          ],
            selectedGenres: [],
            acousticness: '',
            danceability: '',
            energy: '',
            popularity: ''
        });
      }


    
      render() {
        return (
          <div>
            <label> Select Genres </label>
            <br/>
            {this.createGenres()}
            <br/>
            <br/>
            <label> Acousticness Level(1-10) </label>
            <input type="number" min="1" max="10" value ={this.state.acousticness} name="acousticness" onChange={(event) => this.handleChange(event)}/>
            <br/>
            <br/>
            <label> Danceability Level (1-10) </label>
            <input type="number" min="1" max="10" value ={this.state.danceability} name="danceability" onChange={(event) => this.handleChange(event)}/>
            <br/>
            <br/>
            <label> Energy Level (1-10) </label>
            <input type="number" min="1" max="10" value ={this.state.energy} name="energy" onChange={(event) => this.handleChange(event)}/>
            <br/>
            <br/>
            <label> Popularity Level (1-10) </label>
            <input type="number" min="1" max="10" value ={this.state.popularity} name="popularity" onChange={(event) => this.handleChange(event)}/>

            <form onSubmit={(event) => this.handleOnSubmit(event)}>


              <input type="submit" />
            </form>
            
          </div>
        );
      }
    }

    export default connect(null, {searchSongs})(SearchInput)




