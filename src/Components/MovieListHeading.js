import React from 'react';

const MovieListHeading = (props) => {
	return (
		<div style={{color:"white"}} className='col'>
			<h1>{props.heading}</h1>
		</div>
	);
};

export default MovieListHeading;