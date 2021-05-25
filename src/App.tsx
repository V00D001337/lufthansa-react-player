import React, { useState } from 'react';
import { PlaylistsView } from './playlists/containers/PlaylistsView';


import { NavigationBar } from './NavigationBar';
import { ArtistSearchView } from './music-search/containers/ArtistSearchView';
import { MusicSearchView } from './music-search/containers/MusicSearchView';

function App() {
  const [mode, setMode] = useState<'playlists' | 'searchAlbums' | 'searchArtists'>('playlists')

  return (
    <div>
      {/* .container>.row>.col */}
      <div className="container">
        <div className="row">
          <div className="col">

            <h1>MusicApp</h1>
            <NavigationBar changeMode = {setMode}/>
            <br/>
            {mode === 'playlists' && <PlaylistsView />}
            {mode === 'searchAlbums' && <MusicSearchView/>}
            {mode === 'searchArtists' && <ArtistSearchView/>}
          </div>
        </div>
      </div>
      </div>
      );
    }

  export default App;