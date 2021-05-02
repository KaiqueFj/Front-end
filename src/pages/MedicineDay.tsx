import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import titlePage from '../styles/Components/titlePage.module.css';
import styles from '../styles/pages/MedicineDay.module.css';
import animate from '../styles/animation/animation.module.css';
import Header from "../Components/Header/header";

const MedicineDay = () => {
    //Variables
    const [day, setDay] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getInformation() {

            try {

                // Get information from url
                const queryString = window.location.search;
                const urlParams = new URLSearchParams(queryString);
                setDay(urlParams.get('day'))

                // Get medicines on localStorage
                const medicines = localStorage.getItem('medicines')
                return setData(JSON.parse(medicines))

            } catch (error) {
                console.log(error)
            }
        }

        getInformation()
    }, [])

    return (
        <Layout>
            <div className='containerBackground'>
                <Header />

                <div className={styles.container}>
                    <div className={titlePage.titlePage}>
                        <img src='/img/icons/medicine.png' />
                        Remédios | {day}
                    </div>

                    <div className={styles.medicinesOnDay}>
                        <h3>Remédios</h3>

                        <div className={`${styles.medicines} ${animate.upSlow}`}>

                            {data.map((medicine) => (
                                <div className={animate.upMoreSlow}>
                                    <p>{medicine.time}</p>
                                    <hr></hr>
                                    <p>{medicine.medicine}</p>
                                    <button><img src='img/icons/delete.jpg' /></button>
                                </div>
                            ))}

                        </div>
                    </div>

                    <a href="addMedicine">
                        <div className={styles.addMedicine}>
                            <img src='/img/icons/add.png' />
                        </div>
                    </a>

                </div>
            </div>
        </Layout >
    );
};

export default MedicineDay;