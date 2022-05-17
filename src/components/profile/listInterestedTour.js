import React from "react";

function ListInterestedTour({ interested_tour, hapusTour, loadingTour }) {
  return (
    <div className="my-5">
      {console.log(interested_tour)}
      {console.log(hapusTour)}
      <div className="container">
        <p className="mb-5" style={{ fontSize: "36px" }}>
          Interested Tour
        </p>
        {loadingTour ? (
          <p className="dots mt-5"></p>
        ) : (
          <>
            {interested_tour?.map((tour) => (
              <div className="container mt-5">
                <div className="row border-bottom border-warning border-3">
                  <div className="col-1">
                    <p>{tour.tour.tanggal}</p>
                  </div>
                  <div className="col-5">
                    <p>{tour.tour.tempat}</p>
                  </div>
                  <div className="col-3">
                    <a href={tour.tour.tiket} className="tiketFont ">
                      Tiket
                    </a>
                  </div>
                  <div className="col-3">
                    <button
                      className="infoButton"
                      onClick={() => hapusTour(tour.id_interested_tour)}
                    >
                      Hapus tour
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default ListInterestedTour;
