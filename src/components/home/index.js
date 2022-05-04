import React from "react";
import Foto from "../../assets/image/foto.png";
import Foto2 from "../../assets/image/1.png";
import Album from "../../assets/image/Album.jpg";
import { TabTitle } from "../../utils/GeneralFunctions";
import "./style.css";
function index() {
  TabTitle("Home");
  return (
    <>
      <div
        className="container-fluid fontMK "
        style={{
          // backgroundImage: `url(${Foto2})`,
          backgroundColor: "#E6D031",
          height: "508px",
        }}
      >
        <div className="row pt-5 text-center ">
          <div className="col pt-1 ">
            <p>MAMANG</p>
            <p>KESBOR</p>
          </div>
          <div className="col">
            <img
              src={Foto}
              alt="Mardiaal"
              style={{
                height: "460px",
              }}
            />
          </div>
        </div>
        {/* batas */}
      </div>
      <div
        className="container-fluid fontAll"
        style={{
          // backgroundImage: `url(${Foto2})`,
          backgroundColor: "#171717",
          height: "411px",
        }}
      >
        <div className="row  text-center">
          <div className="col">
            <img
              src={Album}
              alt="Album"
              style={{
                height: "330px",
              }}
            />
          </div>
          <div className="col ">
            <p style={{ fontSize: "64px" }}>DENGARKAN SEKARANG</p>
            <p className="" style={{ fontSize: "54px" }}>
              ALBUM TERBAIK DI TATA SURYA
            </p>
            <button className="allButton">ALBUM</button>
          </div>
        </div>

        <div className="row text-center ">
          <div className="col-6 ">
            <p style={{ fontSize: "74px" }}>OFFICIAL</p>
            <p style={{ fontSize: "66px" }}>MUSIC</p>
            <p style={{ fontSize: "54px" }}>VIDEO</p>
          </div>
          <div className="col-6 mt-4   ">
            <div
              id="carouselExampleDark"
              className="carousel carousel-light slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={10000}>
                  <iframe
                    width={620}
                    height={375}
                    src="https://www.youtube.com/embed/tkt5-PFZfXg"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                  <iframe
                    width={620}
                    height={375}
                    src="https://www.youtube.com/embed/qFaQfF2RZx8 "
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="carousel-item" data-bs-interval={3000}>
                  <iframe
                    width={620}
                    height={375}
                    src="https://www.youtube.com/embed/IeLt_sdN3S8"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="carousel-item" data-bs-interval={3000}>
                  <iframe
                    width={620}
                    height={375}
                    src="https://www.youtube.com/embed/Kw-iFZ6R4HI"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6"></div>
          <div className="col-6">
            <div className="">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="me-2 vidButton"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                className="me-2 vidButton"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                className="me-2 vidButton"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="3"
                aria-label="Slide 4"
                className="me-2 vidButton"
              ></button>
            </div>
          </div>
          <p className=" " style={{ fontSize: "64px" }}>
            TOUR TATA SURYA
          </p>
          <div
            className="text-center pb-5 fontAll"
            style={{
              // backgroundImage: `url(${Foto2})`,
              backgroundColor: "#171717",
            }}
          >
            <button className="allButton">INFO</button>
            <p className="pt-4" style={{ fontSize: "48px" }}>
              DAPATKAN PEMBERITAHUAN TENTANG
            </p>
            <p className="pt-4" style={{ fontSize: "48px" }}>
              TOUR TATA SURYA
            </p>
            <div className="row pt-4">
              <div className="col-5 ps-5">
                <button className="ms-5 allButton">Register</button>
              </div>
              <div className="col-2">
                <p style={{ fontSize: "32px" }}>ATAU</p>
              </div>
              <div className="col-5 pe-5">
                <button className="me-5 allButton"> LOGIN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{
          // backgroundImage: `url(${Foto2})`,
          backgroundColor: "#E6D031",
          height: "700px",
        }}
      ></div>
    </>
  );
}

export default index;
