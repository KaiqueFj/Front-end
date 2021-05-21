import React, { useState } from "react";
import Header from "../Components/Header/header";
import styles from '../styles/pages/firstAid.module.scss';
import animate from '../styles/animation/animation.module.css';


const FirstAidPage = () => {

    return (
        <div id='container1'>
            <div className="main">

                <Header />

                <div className={styles.container}>

                    <div className='titlePage'>
                        Desmaio
                    </div>

                    <div className={styles.firstAidContainer}>
                        <div className={styles.videoContainer}>
                            <img src="https://i.ytimg.com/vi/1MtKw-uP1NM/maxresdefault.jpg" />
                            <a href='#'>
                                <img src="img/icons/playIcon.png" alt="Iníciar Video" />
                            </a>
                        </div>

                        <div className={styles.legend}>
                            <p>
                                Deite a pessoa no chão, de barriga para cima, e eleve as pernas dela em relação ao corpo e a cabeça;
                                Coloque a cabeça da vítima de lado, para assim, facilitar a respiração e evitar asfixia devido ao risco de vômito;
                                Afrouxe as roupas <hr />

                                Deite a pessoa no chão, de barriga para cima, e eleve as pernas dela em relação ao corpo e a cabeça;
                                Coloque a cabeça da vítima de lado, para assim, facilitar a respiração e evitar asfixia devido ao risco de vômito;
                                Afrouxe as roupas <hr />

                                Deite a pessoa no chão, de barriga para cima, e eleve as pernas dela em relação ao corpo e a cabeça;
                                Coloque a cabeça da vítima de lado, para assim, facilitar a respiração e evitar asfixia devido ao risco de vômito;
                                Afrouxe as roupas <hr />

                                Deite a pessoa no chão, de barriga para cima, e eleve as pernas dela em relação ao corpo e a cabeça;
                                Coloque a cabeça da vítima de lado, para assim, facilitar a respiração e evitar asfixia devido ao risco de vômito;
                                Afrouxe as roupas <hr />

                                Deite a pessoa no chão, de barriga para cima, e eleve as pernas dela em relação ao corpo e a cabeça;
                                Coloque a cabeça da vítima de lado, para assim, facilitar a respiração e evitar asfixia devido ao risco de vômito;
                                Afrouxe as roupas <hr />

                                Deite a pessoa no chão, de barriga para cima, e eleve as pernas dela em relação ao corpo e a cabeça;
                                Coloque a cabeça da vítima de lado, para assim, facilitar a respiração e evitar asfixia devido ao risco de vômito;
                                Afrouxe as roupas <hr />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstAidPage;