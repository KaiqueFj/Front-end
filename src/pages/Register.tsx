import React, { SyntheticEvent } from "react";
import Layout from "../Layout/Layout";
import { useRouter } from 'next/router';
import { useState } from 'react';
import BannerWelcome from "../Components/bannerWelcome";
import styles from '../styles/pages/Register.module.css';
import animate from '../styles/animation/animation.module.css';



const Register = () => {

    //const {data} = useContext(ChallengesContext)

    // definition of variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    // submit function
    const submit = async (e: SyntheticEvent) => {

        e.preventDefault();

        // API connection
        const register = await fetch('http://localhost:3333/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: name,
                email: email,
                password: password
            })
        });

        const data = await register.json();
        const dataConvert = JSON.stringify(data);
        console.log(dataConvert)

        return router.push('/Login')
    }

    return (
        <Layout>
            <div className={`${animate.up} ${styles.rowContainer}`}>

                <BannerWelcome />


                <form onSubmit={submit} className={styles.form}>

                    <div className={styles.legend}>
                        <h1>Registre-se</h1>
                        <p>Caso tenha uma conta, volte para
                        <a href='/Login'> Login</a>
                        </p>
                    </div>


                    <div className={styles.inputContainer}>
                        <img src="img/userPurple.png" />
                        <input
                            onChange={e => setName(e.target.value)}
                            placeholder="Lurdes"
                            required
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <img src="img/userPurple.png" />
                        <input
                            onChange={e => setEmail(e.target.value)}
                            placeholder="dona_lurdes@gmail.com"
                            required
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <img src="img/password.png" />
                        <input
                            onChange={e => setPassword(e.target.value)}
                            type="text"
                            placeholder="********"
                            required
                        />
                    </div>

                    <button type="submit">
                        <img src="img/login.png" />
                        Registrar-se
                    </button>

                </form>
            </div>
        </Layout>

    );
};

export default Register;