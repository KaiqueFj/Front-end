import React, { useState } from "react";
import Header from "../Components/Header/header";
import styles from '../styles/pages/firstAid.module.scss';
import animate from '../styles/animation/animation.module.css';


const FirstAid = () => {

    return (
        <div className='container'>
            <div className="containerBackground">
                <Header />

                <div className={styles.container}>

                    <div className='titlePage'>
                        <img src='/img/icons/firstAid.png' />
                        Primeiros Socorros
                    </div>

                    <div className={styles.firstAidItems}>
                        <a href="FirstAidPage">
                            <div>
                                Desmaio
                            </div>
                        </a>

                        <a>
                            <div>
                                Desmaio
                            </div>
                        </a>

                        <a>
                            <div>
                                Desmaio
                            </div>
                        </a>

                        <a>
                            <div>
                                Desmaio
                            </div>
                        </a>

                        <a>
                            <div>
                                Desmaio
                            </div>
                        </a>

                        <a>
                            <div>
                                Desmaio
                            </div>
                        </a>

                        <a>
                            <div>
                                Desmaio
                            </div>
                        </a>

                        <a>
                            <div>
                                Desmaio
                            </div>
                        </a>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstAid;