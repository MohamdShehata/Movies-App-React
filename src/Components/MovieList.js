import React from 'react'
import MovieFavourite from './MovieFavourite'
export const MovieList = (props) => {
    const MyFav=props.MyFavouriteMovie;
    return (
        <>
            {
                props.movies.map((movies, index) => (

                    <div className='image-container d-flex justify-content-start m-3'>
                       <img src={movies.Poster} alt='movies'></img>
					<div
						onClick={() => props.handleFavouritesClick(movies)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<MyFav/>
					</div>
				</div>
                )
                )}

        </>
    )
}