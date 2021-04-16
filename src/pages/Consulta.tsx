import React, { useState } from "react";
import Header from "../Components/header";
import Layout from "../Layout/Layout";
import styles from '../styles/pages/Appointment.module.css';
import animate from '../styles/animation/animation.module.css';
import titlePage from '../styles/Components/titlePage.module.css';
import AppointmentDescription from "../Components/AppointmentDescription";
import Head from "next/head";
import AppointmentVideo from "../Components/appointmentVideo";
import SearchHospitalLocation from "../Components/searchHospitalLocation";
import AppointmentForm from "../Components/AppointmentForm";



const Appointment = () => {

  

    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <div className={styles.container}>
                <div className={styles.header}>
                    <Header />
                    <AppointmentDescription />
                    <AppointmentVideo/>
                </div>

               <div className={styles.main}>
                   <div className={styles.hospitalSearch}>
                       <div className={styles.mapContainer}>
                           <img src='img/backgrounds/mapBackground.png'/>
                       </div>

                       <SearchHospitalLocation/>
                       
                   </div>

                   <AppointmentForm/>
               </div>

               <div className={styles.finalImage}/>

            </div>

        </>
    );
};

export default Appointment;