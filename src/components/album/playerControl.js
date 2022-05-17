import React from "react";

function PlayerControl(props) {
  return (
    <div>
      <div className="row text-center">
        <div className="col-3 col-lg-4">
          <button
            className=" playerButton"
            onClick={() => props.SkipSong(false)}
          >
            <i className="bi bi-skip-start-fill player"></i>
          </button>
        </div>
        <div className="col-3 col-lg-4">
          <button
            className="playerButton player"
            onClick={() => props.setIsPlaying(!props.isPlaying)}
          >
            <i
              className={
                props.isPlaying
                  ? "bi bi-play-circle-fill "
                  : "bi bi-pause-circle-fill "
              }
            ></i>
          </button>
        </div>
        <div className="col-3 col-lg-4">
          <button className="playerButton" onClick={() => props.SkipSong()}>
            <i className="bi bi-skip-end-fill player"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerControl;
