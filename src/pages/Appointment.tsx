import React, { useState } from "react";
import Header from "../Components/Header/header";
import styles from '../styles/pages/Appointment.module.scss';
import animate from '../styles/animation/animation.module.css';
import AppointmentDescription from "../Components/AppointmentDescription/AppointmentDescription";
import Head from "next/Head";
import AppointmentVideo from "../Components/AppointmentVideo/appointmentVideo";
import SearchHospitalLocation from "../Components/SearchHospitalLocation/searchHospitalLocation";
import AppointmentForm from "../Components/AppointmentForm/AppointmentForm";
import Map from "../Components/Map/mapa";
import { parseCookies } from "../utils/parseCookies";
import { useApp } from "../Contexts/AppContexts";

const Appointment = (props) => {

    const {getUserInformation} = useApp();
    getUserInformation(props.data);

    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <div className={styles.container}>
                <div className={styles.header}>
                    <Header />
                    <AppointmentDescription />
                    <AppointmentVideo />
                </div>

                <div className={styles.main}>
                    <div className={styles.hospitalSearch}>
                        <div className={styles.mapContainer}>
                            <img src='img/backgrounds/mapBackground.png' />
                        </div>

                        <SearchHospitalLocation />
                        <Map />
                    </div>

                    <AppointmentForm />
                </div>

                <div className={styles.finalImage} />

            </div>

        </>
    );
};

export default Appointment;

export async function getServerSideProps({ req }) {
    //get token on cookies
    const { token } = parseCookies(req);

    // API connection
    const response = await fetch('http://localhost:3333/showUser', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });

    const {
        adress,
        age,
        cep,
        chronicDisease,
        height,
        phoneNumber,
        weight
    } = await response.json();

    return {
        props: {
            data: {
                adress: adress,
                age: age,
                cep: cep,
                chronicDisease: chronicDisease,
                height: height,
                phoneNumber: phoneNumber,
                weight: weight,
            }
        }
    }

}