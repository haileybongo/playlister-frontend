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
            this.state.genres.map(genre => <option key={genre.index} value ={genre} onChange={(event) => this.handleGenres(event)} > {genre.charAt(0).toUpperCase() + genre.slice(1)} </option>)      
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
            <span style={{position: 'absolute', left: '50%', transform: 'translate(-50%,-50%)', fontWeight: 'bold'}}> Select Genres </span>
            <br/>
            <br/>

            <div class="row" >
                    <div class="col-sm-2" ></div>
                    <div class="col-sm-1" ></div>
                    <div class="col-sm-2" >
                        <select onChange={(event) => this.handleGenres(event)}>
                            <option value = "" disabled selected hidden> Genre 1</option>
                            {this.createGenres()}
                        </select>
                    </div>

                    <div class="col-sm-2">
                        <select onChange={(event) => this.handleGenres(event)}>
                            <option value = "" disabled selected hidden> Genre 2</option>
                            {this.createGenres()}
                        </select>
                    </div>

                    <div class="col-sm-2">
                         <select onChange={(event) => this.handleGenres(event)}>
                            <option value = "" disabled selected hidden>  Genre 3</option>
                            {this.createGenres()}
                        </select>
                    </div>
                    <div class="col-sm-2" ></div>
            </div>        
            
            <br/>
            <br/>
            <div className="slidecontainer" className="container" width="10%">
            <label> Acousticness</label>

                <div className="range-field" >
                    <input type="range" min="0" max="10" name="Acousticness" className = "slider " onChange={(event) => this.handleChange(event)}/>
                </div>

            <br/>
            <br/>
            <label> Danceability  </label>

                <div class="range-field">
                    <input type="range" min="0" max="10" name="danceability" className = "slider " onChange={(event) => this.handleChange(event)}/>
                </div>
            
            <br/>
            <br/>
            <label> Energy </label>

                <div class="range-field">
                    <input type="range" min="0" max="10" name="Energy" className = "slider " onChange={(event) => this.handleChange(event)}/>
                </div>

            <br/>
            <br/>
            <label> Popularity</label>
                <div class="range-field">
                    <input type="range" min="0" max="10" name="Popularity" className = "slider " onChange={(event) => this.handleChange(event)}/>
                </div>
            </div>
            <form style={{float:'center'}}onSubmit={(event) => this.handleOnSubmit(event)}>
            <br/>
            <br/>

              <input type="submit"   style={{background:' rgba(0,0,0,0)', padding: '10px', position: 'absolute',
                left: '50%', transform: 'translate(-50%,-50%)'}}/>
            </form>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
          </div>
        );
      }
    }

    export default connect(null, {searchSongs})(SearchInput)




