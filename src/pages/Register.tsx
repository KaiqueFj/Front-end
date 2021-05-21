import React, { SyntheticEvent, useEffect } from "react";
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/pages/login_register.module.scss';
import BannerWelcome from "../Components/bannerWelcome/bannerWelcome";
import animate from '../styles/animation/animation.module.css';
import Head from "next/Head";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useApp } from "../Contexts/AppContexts";
import Link from "next/Link";

const Register = () => {

    // definition of variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imagePerfil, setImagePerfil] = useState('')
    const router = useRouter();

    // Open input file and change image
    function upload() {
        document.getElementById('uploadImage').click();
    }

    function uploadFile(inputElement) {
        var file = document.getElementById('uploadImage').files[0];
        
        var reader = new FileReader();
        reader.onloadend = function () {
            /******************* for Binary ***********************/
            var data = (reader.result).split(',')[1];
            var binaryBlob = atob(data);
            setImagePerfil(binaryBlob)
            document.querySelector('#imageSRC').src = 'data:image/jpeg;base64,' + btoa(binaryBlob);
        }

        reader.readAsDataURL(file);
    }

    // submit function
    const submit = async (e: SyntheticEvent) => {
        try {
            e.preventDefault();

            // API connection
            const register = await fetch('http://localhost:3333/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: name,
                    email: email,
                    password: password,
                    imagePerfil: imagePerfil
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

    const {theme} = useApp();

    return (
        <div className="container">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <div className={styles.rowContainer}>

                <BannerWelcome />


                <form onSubmit={submit} className={`${styles.form} ${animate.upSlow}`}>

                    <div className={styles.legend}>
                        <h1>Registre-se</h1>
                        <p>Caso tenha uma conta, volte para
                    <Link href='/Login'> Login</Link>
                        </p>
                    </div>

                    <div className={styles.imageProfile}>
                        <img id="imageSRC" 
                        src={(theme === 'light') ? "img/icons/userPurple4.png" : "img/icons/userPurple.png"} 
                        />
                        <button type='button' onClick={upload}>
                            <input
                                id="uploadImage"
                                onChange={uploadFile}
                                type="file"
                            />

                            Selecinar Imagem
                        </button>

                    </div>


                    <div className={styles.inputContainer}>
                        <img src={(theme === 'light') ? "img/icons/userPurple4.png" : "img/icons/userPurple.png"}  />
                        <input
                            onChange={e => setName(e.target.value)}
                            placeholder="Lurdes"
                            required
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <img src={(theme === 'light') ? "img/icons/userPurple4.png" : "img/icons/userPurple.png"}  />
                        <input
                            onChange={e => setEmail(e.target.value)}
                            placeholder="lurdes@gmail.com"
                            required
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <img src={(theme === 'light') ? "img/icons/password2.png" : "img/icons/password.png"} />
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
        </div>

    );
};

export default Register;