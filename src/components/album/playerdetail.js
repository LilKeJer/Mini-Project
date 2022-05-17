import React from "react";
import Album from "../../assets/image/Album.jpg";

function Playerdetail(props) {
  return (
    <div>
      <div className="row ">
        <div className="col-11 col-lg-4">
          <img src={Album} alt="" style={{ height: "80px" }} />
        </div>
        <div className="col-12 col-lg-8">
          <div>{props.song.title}</div>
          <div className="mt-4">Mamang Kesbor</div>
        </div>
      </div>
    </div>
  );
}

export default Playerdetail;
