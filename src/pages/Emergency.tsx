import React, { useState } from "react";
import Header from "../Components/Header/header";
import styles from '../styles/pages/Emergency.module.scss';
import animate from '../styles/animation/animation.module.css';


const Emergency = () => {

    return (
        <div className='container'>
            <div className='containerBackground'>
                <Header />

                <div className={styles.container}>
                    <div className='titlePage'>
                        <img src='/img/icons/emergency.png' />
                        Emergência
                    </div>

                    <div className={styles.emergencyGrid}>
                        <div className={`${styles.emergencyItem} ${animate.up}`}>
                            <img src='img/icons/cop.png' />
                        Polícia
                        </div>

                        <div className={`${styles.emergencyItem} ${animate.upSlow}`}>
                            <img src='img/icons/fireman.png' />
                        Bombeiro
                         </div>

                        <div className={`${styles.emergencyItem} ${animate.upMoreSlow}`}>
                            <img src='img/icons/ambulance.png' />
                        Ambulância
                        </div>
                    </div>

                </div>

            </div>
        </div >
    );
};

export default Emergency;