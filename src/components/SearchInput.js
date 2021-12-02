import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { searchSongs } from '../actions/searchSongs'

function SearchInput(props){
 
    // state = {
    //     genres: this.props.genres,
    //     selectedGenres: [],
    //     acousticness: '5',
    //     danceability: '5',
    //     energy: '5',
    //     popularity: '5'
    //   }

      const dispatch = useDispatch()

      const [genres] = useState(props.genres);
      const [selectedGenres, setGenres] = useState([]);
      const [acousticness, setAcousticness] = useState('5');
      const [danceability, setDanceability] = useState('5');
      const [energy, setEnergy] = useState ('5');
      const [popularity, setPopularity] = useState ('5');

      let state =  {
            selectedGenres: selectedGenres,
            acousticness: acousticness,
            danceability: danceability,
            energy: energy,
            popularity: popularity
          }

      function createGenres() {
        return(
            genres.map(genre => <option key={genre.index} value ={genre} onChange={(event) => handleGenres(event)} > {genre.charAt(0).toUpperCase() + genre.slice(1)} </option>)      
        )
    }
    
      function handleGenres(event) {
        let newState = selectedGenres.concat(event.target.value)
        event.target.style = "border-style:inset; background-color:white"
        setGenres(newState)
      }

      //  const handleChange = (event) => {
      //   this.setState({
      //     [event.target.name]: event.target.value
      //   })
      // }
    
    
      const handleOnSubmit =(event) =>  {
        event.preventDefault();

        dispatch(searchSongs(state, props.token))

        setGenres([])
        setAcousticness('5')
        setDanceability('5')
        setEnergy('5')
        setPopularity('5')
        // this.setState({
        //     genres: this.props.genres,
        //     selectedGenres: [],
        //     acousticness: '5',
        //     danceability: '5',
        //     energy: '5',
        //     popularity: '5'
        // });
      }


    

        return (
          <div>
            <span style={{position: 'absolute', left: '50%', transform: 'translate(-50%,-50%)', fontWeight: 'bold'}}> Select Genres </span>
            <br/>
            <br/>

            <div class="row" >
                    <div class="col-sm-2" ></div>
                    <div class="col-sm-1" ></div>
                    <div class="col-sm-2" >
                        <select onChange={(event) => handleGenres(event)}>
                            <option value = "" disabled selected hidden> Genre 1</option>
                            {createGenres()}
                        </select>
                    </div>

                    <div class="col-sm-2">
                        <select onChange={(event) => handleGenres(event)}>
                            <option value = "" disabled selected hidden> Genre 2</option>
                            {createGenres()}
                        </select>
                    </div>

                    <div class="col-sm-2">
                         <select onChange={(event) => handleGenres(event)}>
                            <option value = "" disabled selected hidden>  Genre 3</option>
                            {createGenres()}
                        </select>
                    </div>
                    <div class="col-sm-2" ></div>
            </div>        
            
            <br/>
            <br/>
            <div className="slidecontainer" className="container" width="10%">
            <label> Acousticness</label>

                <div className="range-field" >
                    <input type="range" min="0" max="10" name="acousticness" step="1" className = "slider" value={acousticness} onChange={(event) => setAcousticness(event.target.value)}/>
                </div>

            <br/>
            <br/>
            <label> Danceability  </label>

                <div class="range-field">
                    <input type="range" min="0" max="10" name="danceability" className = "slider" value={danceability} onChange={(event) => setDanceability(event.target.value)}/>
                </div>
            
            <br/>
            <br/>
            <label> Energy </label>

                <div class="range-field">
                    <input type="range" min="0" max="10" name="energy" className = "slider" value={energy} onChange={(event) => setEnergy(event.target.value)}/>
                </div>

            <br/>
            <br/>
            <label> Popularity</label>
                <div class="range-field">
                    <input type="range" min="0" max="10" name="popularity" className = "slider" value={popularity} onChange={(event) => setPopularity(event.target.value)}/>
                </div>
            </div>
            <form style={{float:'center'}}onSubmit={(event) => handleOnSubmit(event)}>
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

    export default SearchInput




