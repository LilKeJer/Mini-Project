import React from "react";
import { TabTitle } from "../../utils/GeneralFunctions";
import Navbar from "../navbar";
import Album from "../../assets/image/Album.jpg";
import "../../assets/styles.css";
import { useQuery } from "@apollo/client";
import { DAFTAR_LAGU } from "../../utils/gql";
import ListLagu from "./listLagu.js";

function Index() {
  TabTitle("Album");
  const { data, loading } = useQuery(DAFTAR_LAGU);
  return (
    <div className="albumFont pt-5">
      <Navbar />
      <div className="container my-5 pt-5">
        <div className="row">
          <div className="col-12 col-lg-3">
            <img src={Album} alt="" style={{ height: "250px" }} />
          </div>
          <div className="col-12 col-lg-9">
            <h1 className="fw-bold">Album Terbaik Di Tata Surya</h1>
            <p>Album • Mamang Kesbor • 2020</p>
            <p>12 lagu • 35 menit</p>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="mt-5">
          <p className="text-center progress3"></p>
        </div>
      ) : (
        <ListLagu daftar_lagu={data?.song || []} />
      )}
    </div>
  );
}

export default Index;
