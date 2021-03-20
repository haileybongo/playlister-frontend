import React from 'react'
import { connect } from 'react-redux'
import { searchSongs } from '../actions/searchSongs'

class SearchInput extends React.Component {
 
    state = {
        genres: this.props.genres,
        selectedGenres: [],
        acousticness: '5',
        danceability: '5',
        energy: '5',
        popularity: '5'
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
            genres: this.props.genres,
            selectedGenres: [],
            acousticness: '5',
            danceability: '5',
            energy: '5',
            popularity: '5'
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
                    <input type="range" min="0" max="10" name="acousticness" step="1" className = "slider" value={this.state.acousticness} onChange={(event) => this.handleChange(event)}/>
                </div>

            <br/>
            <br/>
            <label> Danceability  </label>

                <div class="range-field">
                    <input type="range" min="0" max="10" name="danceability" className = "slider" value={this.state.danceability} onChange={(event) => this.handleChange(event)}/>
                </div>
            
            <br/>
            <br/>
            <label> Energy </label>

                <div class="range-field">
                    <input type="range" min="0" max="10" name="energy" className = "slider" value={this.state.energy} onChange={(event) => this.handleChange(event)}/>
                </div>

            <br/>
            <br/>
            <label> Popularity</label>
                <div class="range-field">
                    <input type="range" min="0" max="10" name="popularity" className = "slider" value={this.state.popularity} onChange={(event) => this.handleChange(event)}/>
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




