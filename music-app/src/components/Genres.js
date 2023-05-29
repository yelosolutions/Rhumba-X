import React from 'react'

const Genres = ({genres, filterSongs}) => {
    return (
        <div className='btn-container'>
            {genres.map((genre) => {
                return(
                    <button 
                    type='button' 
                    onClick={() => filterSongs(genre)}
                    >
                        {genre}
                    </button>
                )
            })}
            
        </div>
    );
};

export default Genres; 