import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RemoveFavourites from './Components/RemoveFavourites';
import { MovieList } from './Components/MovieList';
import MovieListHeading from './Components/MovieListHeading';
import FilterSearch from './Components/FilterSearch';
import MovieFavourite from './Components/MovieFavourite';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('avengers')
  const getMovieApi = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=50932de0`;

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }


  };

  useEffect(() => {
    getMovieApi(searchValue);
  }, [searchValue]);

  const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		
	};

  const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		
	};

  return (
    <div className='container-fluid movies-show' >
      <div className='row d-flex align-items-center mt-2 mb-2'>
        <MovieListHeading heading="Movies" />
        <FilterSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='row'>
        <MovieList movies={movies} handleFavouritesClick={addFavouriteMovie} MyFavouriteMovie={MovieFavourite} />
      </div>
      <div className='row d-flex align-items-center mt-2 mb-2'>
        <MovieListHeading heading="My Favourites" />
      
      </div>
      <div className='row'>
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					MyFavouriteMovie={RemoveFavourites}
				/>
			</div>
    </div>
  );
}


export default App;
