import React from 'react';
import Genres from './components/Genres';
import Playlist from './components/Playlist';
//import songs from './data'

function App() {
  return (
    <main>
      <h2>RhumbaX Music</h2>
      <Genres/>
      <Playlist/>
    </main>
  );
}

export default App;
