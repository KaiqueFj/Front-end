import React, { useState } from "react";
import Header from "../Components/Header/header";
import styles from '../styles/pages/firstAid.module.scss';
import animate from '../styles/animation/animation.module.css';
import Link from "next/Link";


const FirstAid = () => {

    return (
        <div id='container1'>
            <div className="main">
                <Header />

                <div className={styles.container}>

                    <div className='titlePage'>
                        <img src='/img/icons/firstAid.png' />
                        Primeiros Socorros
                    </div>

                    <div className={styles.firstAidItems}>
                        <Link href="FirstAidPage">
                            <div>
                                Desmaio
                            </div>
                        </Link>

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