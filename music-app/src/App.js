import React, {useState} from 'react';
import Genres from './components/Genres';
import Playlist from './components/Playlist';
import songs from './data'

//list all genres
//use Set to remain with unique set values 
const allGenres = ['all', ...new Set(songs.map((song) => song.genre))];

//log to test
console.log(allGenres);


function App() {
  const [playlistSongs, setPlaylistSongs] = useState(songs);
  const [genres, setGenres] = useState(allGenres);

  //categorizes songs into genres
  const filterSongs = (genre) => {
    if(genre === 'all'){
      setPlaylistSongs(songs);
      return;
    }
    const newSongs = songs.filter((song) => song.genre === genre);
    setPlaylistSongs(newSongs);
  };

  return (
    <main>
      <div className="title">
        <h3>RhumbaX</h3>
        <div className="underline"></div>
      </div>
      
      {/* components */}
      <Genres genres={genres} filterSongs={filterSongs} />
      <Playlist songs={playlistSongs}/>
    </main>
  );
}

export default App;
