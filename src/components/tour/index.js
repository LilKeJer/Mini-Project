import React, { useEffect } from "react";
import { TabTitle } from "../../utils/GeneralFunctions";
import Navbar from "../navbar";
import ListTour from "./listTour";
import "../../assets/styles.css";
import { DAFTAR_TOUR, TAMBAH_INTERESTED_TOUR } from "../../utils/gql";
import { useQuery, useMutation } from "@apollo/client";

function Index() {
  TabTitle("Tour");
  const { data, loading } = useQuery(DAFTAR_TOUR);
  const [addInterestedTour, { data: dataTour, loading: loadingAdd }] =
    useMutation(TAMBAH_INTERESTED_TOUR);
  const tambahInterestedTour = (id) => {
    const user = localStorage.getItem("user");
    if (user) {
      alert(` Tour Berhasil Ditambahkan`);
      addInterestedTour({
        variables: {
          id_user: localStorage.getItem("user"),
          id_tour: id,
        },
      });
    } else {
      alert(` Login terlebih dahalu`);
    }
  };

  return (
    <div className="tourFont text-center my-5 pt-5">
      <Navbar />
      <p className="fontTTS">TOUR TATA SURYA</p>
      {loading ? (
        <div className="progress4 container"></div>
      ) : (
        <ListTour
          daftar_tour={data?.tour || []}
          tambahInterestedTour={tambahInterestedTour}
        />
      )}
    </div>
  );
}

export default Index;
