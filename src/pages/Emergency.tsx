import React, { useState } from "react";
import Header from "../Components/Header/header";
import styles from '../styles/pages/Emergency.module.scss';
import animate from '../styles/animation/animation.module.css';


const Emergency = () => {

    return (
        <div id='container1'>
            <div className='main'>
                <Header />

                <div className={styles.container}>

                    <div className={styles.emergencyGrid}>
                        <div className={`${styles.emergencyItem} ${animate.up}`}>
                            <div>
                                <img src='/img/icons/copBanner.jpg'/>
                                <img src='img/icons/cop.png' />
                            </div>
                            <p>Polícia</p>
                        </div>

                        <div className={`${styles.emergencyItem} ${animate.upSlow}`}>
                            <div>
                                <img src='/img/icons/firemanBanner.jpg'/>
                                <img src='img/icons/fireman.png' />
                            </div>
                            <p>Bombeiro</p>
                        </div>

                        <div className={`${styles.emergencyItem} ${animate.upMoreSlow}`}>
                            <div>
                                <img src='/img/icons/ambulanceBanner.jpg'/>
                                <img src='img/icons/ambulance.png' />
                            </div>
                            <p>Ambulância</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Emergency;