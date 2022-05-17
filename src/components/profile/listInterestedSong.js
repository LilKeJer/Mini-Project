import React from "react";

function ListInterestedSong({ interested_song, ubahLove, loadingSong }) {
  return (
    <div>
      <div className="container mb-5">
        <p className="mb-5" style={{ fontSize: "36px" }}>
          Interested song
        </p>
        {loadingSong ? (
          <p className="dots mt-5"></p>
        ) : (
          <>
            {interested_song?.map((song) => {
              if (song.interested === true) {
                return (
                  <div className="container mt-5">
                    <div className="row border-bottom border-warning border-3">
                      <div className="col-2">
                        <p>{song.song.id_song}</p>
                      </div>
                      <div className="col-4">
                        <p>{song.song.title}</p>
                      </div>
                      <div className="col-3">
                        <p>{song.song.time}</p>
                      </div>
                      <div className="col-3 pb-3 text-center">
                        <button
                          className="loveButton"
                          onClick={() => {
                            ubahLove(song.interested, song.song.id_song);
                          }}
                        >
                          <i className="bi bi-suit-heart-fill love"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </>
        )}
      </div>

      <div className="container mb-5">
        <p className="mb-5" style={{ fontSize: "36px" }}>
          Not Interested Song
        </p>
        {loadingSong ? (
          <p className="dots mt-5"></p>
        ) : (
          <>
            {interested_song?.map((song) => {
              if (song.interested === false) {
                return (
                  <div className="container mt-5">
                    <div className="row border-bottom border-warning border-3">
                      <div className="col-2">
                        <p>{song.song.id_song}</p>
                      </div>
                      <div className="col-4">
                        <p>{song.song.title}</p>
                      </div>
                      <div className="col-3">
                        <p>{song.song.time}</p>
                      </div>
                      <div className="col-3 pb-3 text-center">
                        <button
                          className="loveButton"
                          onClick={() => {
                            ubahLove(song.interested, song.song.id_song);
                          }}
                        >
                          <i className="bi bi-heart notLove"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </>
        )}
      </div>
      {console.log(interested_song)}
    </div>
  );
}

export default ListInterestedSong;
