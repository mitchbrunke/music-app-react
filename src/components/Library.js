import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  libraryStatus,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            setSongs={setSongs}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={audioRef}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
