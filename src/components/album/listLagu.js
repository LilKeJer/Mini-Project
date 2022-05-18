import React, { useState, useEffect } from "react";
import Player from "./player";

function ListLagu({ daftar_lagu }) {
  const [songs] = useState(daftar_lagu);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);
  const [play, setPlay] = useState(0);
  return (
    <div>
      {daftar_lagu?.map((song) => (
        <div className="container mt-5">
          <div className="row border-bottom border-warning border-3">
            <div className="col-3">
              {song.id_song}
              <button
                className="playerButton2"
                onClick={() => setPlay(song.id_song)}
              >
                <i className="bi bi-skip-end-fill player2"></i>
              </button>
            </div>
            <div className="col-6">
              <p>{song.title}</p>
            </div>
            <div className="col-3">{song.time}</div>
          </div>
        </div>
      ))}
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
        play={play}
      />
    </div>
  );
}

export default ListLagu;
