import React from "react";

function ListTour({ daftar_tour, tambahInterestedTour }) {
  return (
    <div>
      {console.log(tambahInterestedTour)}
      {daftar_tour?.map((tour) => (
        <div className="container mt-5">
          <div className="row border-bottom border-warning border-3">
            <div className="col-3">
              <p>{tour.tanggal}</p>
            </div>
            <div className="col-5">
              <p>{tour.tempat}</p>
            </div>
            <div className="col-4 pb-3">
              <button
                className="infoButton"
                onClick={() => tambahInterestedTour(tour.id_tour)}
              >
                Dapatkan Info
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListTour;
