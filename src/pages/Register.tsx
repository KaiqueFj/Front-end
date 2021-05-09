import React, { SyntheticEvent } from "react";
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/pages/login_register.module.scss';
import BannerWelcome from "../Components/bannerWelcome/bannerWelcome";
import animate from '../styles/animation/animation.module.css';
import Head from "next/Head";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    //const {data} = useContext(ChallengesContext)

    // definition of variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    // submit function
    const submit = async (e: SyntheticEvent) => {
        try {
            e.preventDefault();

            // API connection
            const register = await fetch('http://localhost:3333/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: name,
                    email: email,
                    password: password
                })
            });

            toast.success("Cadastro feito com sucesso!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
            });
            return router.push('/Login')

        } catch (error) {
            toast.error("Não foi possível fazer o cadastro, tente novamente...", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: false,
            });
        }
    }

    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <div className={styles.rowContainer}>

                <BannerWelcome />


                <form onSubmit={submit} className={`${styles.form} ${animate.upSlow}`}>

                    <div className={styles.legend}>
                        <h1>Registre-se</h1>
                        <p>Caso tenha uma conta, volte para
                    <a href='/Login'> Login</a>
                        </p>
                    </div>


                    <div className={styles.inputContainer}>
                        <img src="img/icons/userPurple.png" />
                        <input
                            onChange={e => setName(e.target.value)}
                            placeholder="Insira seu Nome"
                            required
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <img src="img/icons/userPurple.png" />
                        <input
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Insira seu E-mail"
                            required
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <img src="img/icons/password.png" />
                        <input
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            placeholder="********"
                            required
                        />
                    </div>

                    <button type="submit">
                        <img src="img/icons/login.png" />
                        Registrar-se
                    </button>

                </form>
            </div>
        </>

    );
};

export default Register;