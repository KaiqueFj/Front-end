import React, { useState, useEffect } from "react";
import styles from '../styles/pages/MedicineDay.module.scss';
import animate from '../styles/animation/animation.module.css';
import Header from "../Components/Header/header";
import Link from "next/Link";

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
        <div className='container'>
            <div className='containerBackground'>
                <Header />

                <div className={styles.container}>
                    <div className='titlePage'>
                        <img src='/img/icons/medicine.png' />
                        Remédios | {day}
                    </div>

                    <div className={styles.medicinesOnDay}>
                        <h3>Remédios</h3>

                        <div className={`${styles.medicines} ${animate.up}`}>

                            {data.map((medicine) => (
                                <div className={animate.upSlow} key={medicine.id}>
                                    <p>{medicine.time}</p>
                                    <hr></hr>
                                    <p>{medicine.name}</p>
                                    <button><img src='img/icons/delete.jpg' /></button>
                                </div>
                            ))}

                        </div>
                    </div>

                    <Link href="addMedicine">
                        <div className={styles.addMedicine}>
                            <img src='/img/icons/add.png' />
                        </div>
                    </Link>

                </div>
            </div>
        </div >
    );
};

export default MedicineDay;