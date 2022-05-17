import React from "react";
import "../../assets/styles.css";
import { TabTitle } from "../../utils/GeneralFunctions";
import Navbar from "../navbar";
import ListInterestedSong from "./listInterestedSong";
import ListInterestedTour from "./listInterestedTour";
import { useMutation, useSubscription } from "@apollo/client";
import {
  INTERESTED_SONG_SUBS,
  LOVE,
  INTERESTED_TOUR_SUBS,
  DELETE_INTERESTED_TOUR,
} from "../../utils/gql";
import { useNavigate } from "react-router-dom";
function Index() {
  TabTitle("Profile");
  const { data: dataSong, loading: loadingSong } = useSubscription(
    INTERESTED_SONG_SUBS,
    {
      variables: {
        id: localStorage.getItem("user"),
      },
    }
  );
  const [editLove] = useMutation(LOVE);
  const [deleteTour, { data: deleteData }] = useMutation(
    DELETE_INTERESTED_TOUR
  );

  const { data: dataTour, loading: loadingTour } = useSubscription(
    INTERESTED_TOUR_SUBS,
    {
      variables: {
        id: localStorage.getItem("user"),
      },
    }
  );

  const ubahLove = (condition, id) => {
    console.log(condition);
    console.log(id);
    editLove({
      variables: {
        id: id,
        interested: !condition,
      },
    });
  };
  const hapusTour = (id) => {
    console.log(id);
    deleteTour({
      variables: {
        id: id,
      },
    });
  };
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/Login");
  };

  return (
    <div className="tourFont pt-5">
      {console.log(deleteData)}
      <Navbar />
      {console.log(dataTour)}
      <div className=" pt-5 mt-5">
        <p className="fontTTS text-center">PROFIL</p>
        <div className="container me-1">
          <div className="row ms-5 ps-5">
            <div className="col-1 col-lg-6 fontTTS text-center">
              <p className="ps-12" style={{ letterSpacing: "6px" }}>
                Selamat Datang
              </p>
            </div>
            <div className="col-12 col-lg-3 pe-5">
              {loadingSong ? (
                <p className="dots mt-5"></p>
              ) : (
                <p className="fontTTS me-5">
                  {dataSong?.interested_song[0].user.nama}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <ListInterestedSong
        interested_song={dataSong?.interested_song || []}
        ubahLove={ubahLove}
        loadingSong={loadingSong}
      />
      <ListInterestedTour
        interested_tour={dataTour?.interested_tour || []}
        hapusTour={hapusTour}
        loadingTour={loadingTour}
      />
      <div className="text-center">
        <button
          className="homeButton "
          onClick={() => {
            logout();
          }}
        >
          <p
            className=""
            style={{
              fontSize: "30px",
            }}
          >
            Logout
          </p>
        </button>
      </div>
    </div>
  );
}

export default Index;
