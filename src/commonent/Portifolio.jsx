// import React from "react";
import React, { useState } from "react";
import styles from "../assets/css/portifolio.module.css";
import port1 from "../assets/images/poert1.png";
import port2 from "../assets/images/port2.png";
import port3 from "../assets/images/port3.png";
import { Helmet } from "react-helmet";

export default function Portifolio() {
  const layer = document.getElementById(`${styles.above_layer}`);
  const [LayerVisible, setLayerVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const clickItem = (imageSrc) => {
    setLayerVisible(true);
    setSelectedImage(imageSrc);
  };

  document.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target === layer) {
      setLayerVisible(false);
      layer.classList.add("d-none");
    }
  });

  return (
    <>
      <Helmet>
        <title>PORTFOLIO</title>
      </Helmet>
      <div id={`${styles.contact}`}>
        <div className="container py-4 mx-auto text-center  w-100  d-flex justify-content-center align-items-center flex-column ">
          <h1>PORTFOLIO COMPONENT</h1>
          <div className={`d-flex justify-content-center align-items-center`}>
            <div className={`${styles.line}`}></div>
            <i class={`fa-solid fa-star ${styles.icon}`}></i>
            <div className={`${styles.line}`}></div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row gy-5">
            {[port1, port2, port3 ,port1,port2,port3].map((image, index) => (
              <div
                key={index}
                className={`col-lg-4 col-md-6 col-12  overflow-hidden   ${styles.parent_layer}`}
                onClick={() => clickItem(image)}
              >
                <div className="w-100 h-100  position-relative">
                  <img
                    src={image}
                    alt={`port${index + 1}`}
                    className="rounded h-100 w-100 "
                  />
                  <div
                    className={`rounded ${styles.layer} d-flex justify-content-center align-items-center `}
                  >
                    <i class={`fa-solid fa-plus ${styles.icons} text-light `}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          id={`${styles.above_layer}`}
          className={LayerVisible ? "" : "d-none"}
        >
          <div id={`${styles.inner_layer}`}>
            {selectedImage && (
              <img
                src={selectedImage}
                alt=""
                className="h-100 w-100"
              />
            )}
          </div>
        </div>

      </div>
    </>
  );
}
