import React from 'react'

const Playlist = ({songs}) => {
    return (
        <section className='playlist'>
            {songs.map((song) => {
                const {id, img, title, genre, artist, desc} = song;
                return <article key={id}>
                    <img src={img} alt="" />
                    <div className="song-title">
                        <h4>{title}</h4>
                        <span>{genre}</span>
                    </div>
                    <div className="song-info">
                        <h4>{artist}</h4>
                        <p>{desc}</p>    
                    </div>
                    
                </article>
            })}
        </section>
    )
}

export default Playlist