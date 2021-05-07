import React, { useState } from "react";
import Header from "../Components/Header/header";
import styles from "../styles/pages/Hospital.module.scss";
import animate from "../styles/animation/animation.module.css";
import Hospitalform from "../Components/hospitalForm/hospitalForm";
import Head from "next/Head";

import Map from "../Components/Map/maap";

const Appointment = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.container}>
        <Header />

        <div className={styles.screen}>
          <Hospitalform />
          <div className={styles.mapContainer}>
            <Map />
            <img  src="img/backgrounds/mapBackground.png" />
          </div>
        </div>


      </div>

      <div className={styles.finalImage} />
    </>
  );
};

export default Appointment;
