import styles from '../styles/Components/header.module.css';
import animate from '../styles/animation/animation.module.css';
import { useState } from 'react';


export default function Header() {

    return (


        <div className={`${styles.container}`}>
                <a href='/'>
                    <img src='/img/icons/back.png'/>
                </a>
                <div>
                    <img src='/img/teste.jpg' />
                  {/*  <h3>Dona Lurdes</h3>*/}
                </div>
        </div>
    )
}