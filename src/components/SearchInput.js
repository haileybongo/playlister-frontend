import React from 'react'

class SearchInput extends React.Component {
 
    state = {
        text: ''
      }
    
      handleOnChange(event) {
        this.setState({
          text: event.target.value,
        });
      }
    
      handleOnSubmit(event) {
        event.preventDefault();
        this.props.addRestaurant(this.state.text);
        this.setState({
          text: '',
        });
      }
    
      render() {
        return (
          <div>
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
              <label> Add Restaurant </label>
              <input
                type="text"
                value={this.state.text}
                onChange={(event) => this.handleOnChange(event)} />
              <input type="submit" />
            </form>
          </div>
        );
      }
    }

export default SearchInput




// "acoustic",
// "afrobeat",
// "alt-rock",
// "alternative",
// "ambient",
// "anime",
// "black-metal",
// "bluegrass",
// "blues",
// "bossanova",
// "brazil",
// "breakbeat",
// "british",
// "cantopop",
// "chicago-house",
// "children",
// "chill",
// "classical",
// "club",
// "comedy",
// "country",
// "dance",
// "dancehall",
// "death-metal",
// "deep-house",
// "detroit-techno",
// "disco",
// "disney",
// "drum-and-bass",
// "dub",
// "dubstep",
// "edm",
// "electro",
// "electronic",
// "emo",
// "folk",
// "forro",
// "french",
// "funk",
// "garage",
// "german",
// "gospel",
// "goth",
// "grindcore",
// "groove",
// "grunge",
// "guitar",
// "happy",
// "hard-rock",
// "hardcore",
// "hardstyle",
// "heavy-metal",
// "hip-hop",
// "holidays",
// "honky-tonk",
// "house",
// "idm",
// "indian",
// "indie",
// "indie-pop",
// "industrial",
// "iranian",
// "j-dance",
// "j-idol",
// "j-pop",
// "j-rock",
// "jazz",
// "k-pop",
// "kids",
// "latin",
// "latino",
// "malay",
// "mandopop",
// "metal",
// "metal-misc",
// "metalcore",
// "minimal-techno",
// "movies",
// "mpb",
// "new-age",
// "new-release",
// "opera",
// "pagode",
// "party",
// "philippines-opm",
// "piano",
// "pop",
// "pop-film",
// "post-dubstep",
// "power-pop",
// "progressive-house",
// "psych-rock",
// "punk",
// "punk-rock",
// "r-n-b",
// "rainy-day",
// "reggae",
// "reggaeton",
// "road-trip",
// "rock",
// "rock-n-roll",
// "rockabilly",
// "romance",
// "sad",
// "salsa",
// "samba",
// "sertanejo",
// "show-tunes",
// "singer-songwriter",
// "ska",
// "sleep",
// "songwriter",
// "soul",
// "soundtracks",
// "spanish",
// "study",
// "summer",
// "swedish",
// "synth-pop",
// "tango",
// "techno",
// "trance",
// "trip-hop",
// "turkish",
// "work-out",
// "world-music"