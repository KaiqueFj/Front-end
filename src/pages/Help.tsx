import React, { useState } from "react";
import Header from "../Components/Header/header";
import styles from '../styles/pages/help.module.scss';
import animate from '../styles/animation/animation.module.css';


const Help = () => {

    return (
        <div className='container'>
            <div className="containerBackground">
                <Header />

                <div className={styles.container}>

                    <div className='titlePage'>
                        <img src='/img/icons/help.png' />
                        Ajuda
                    </div>

                    <div className={styles.helpItems}>
                        <a>
                            <div>
                                Ajude-me
                            </div>
                        </a>

                        <a>
                            <div>
                                Ajude-me
                            </div>
                        </a>

                        <a>
                            <div>
                                Ajude-me
                            </div>
                        </a>

                        <a>
                            <div>
                                Ajude-me
                            </div>
                        </a>

                        <a>
                            <div>
                                Ajude-me
                            </div>
                        </a>

                        <a>
                            <div>
                                Ajude-me
                            </div>
                        </a>

                        <a>
                            <div>
                                Ajude-me
                            </div>
                        </a>

                        <a>
                            <div>
                                Ajude-me
                            </div>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Help;