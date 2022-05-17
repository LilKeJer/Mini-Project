import React, { useState, useRef, useEffect } from "react";
import PlayerControl from "./playerControl";
import Playerdetail from "./playerdetail";

function Player(props) {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });

  useEffect(() => {
    props.setCurrentSongIndex(() => {
      let temp = props?.play;
      console.log(temp);
      temp--;
      if (temp < 0) {
        temp = props.songs.length - 1;
      }
      console.log(temp);
      return temp;
    });
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        console.log(temp);
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }
        console.log(temp);
        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <div className="border-top border-warning border-3 mt-5 container-flex">
      {console.log(props.play)}

      <audio
        src={props.songs[props.currentSongIndex].url}
        ref={audioElement}
      ></audio>

      <div className="row m-5">
        <div className="col-12 col-lg-4">
          <Playerdetail song={props.songs[props.currentSongIndex]} />
        </div>
        <div className="col-12 col-lg-8">
          <PlayerControl
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            SkipSong={SkipSong}
          />
        </div>
      </div>
    </div>
  );
}

export default Player;
