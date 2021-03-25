import { useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";

import Layout from "../Layout/Layout";
import BannerWelcome from "../Components/bannerWelcome";
import OtherLoginOptions from "../Components/otherLoginOptions";

import styles from "../styles/pages/Register.module.css";
import animate from '../styles/animation/animation.module.css';


const Login = () => {

  // definition of variables
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  // submit function
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    // API connection
    const login = await fetch("http://localhost:3333/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    console.log(login)

    // login sucess or not
    if (login.status === 200) {

      // Get token
      const { token } = await login.json();
      console.log(token)
      localStorage.setItem('token', token);

      return router.push('/');
    } else {
      window.alert("Login Incorreto!")
    }
  };

  return (
    <Layout>

      <div className={`${styles.rowContainer} ${animate.up}`}>

        <BannerWelcome />

        <form onSubmit={submit} className={styles.form}>

          <div className={styles.legend}>
            <h1>Login</h1>
            <p>Caso não tenha uma conta...
                <a href='/Register'> Registre-se</a>
            </p>
          </div>

          <div className={styles.inputContainer}>
            <img src="img/userPurple.png" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="lurdes@gmail.com"
              required
            />
          </div>

          <div className={styles.inputContainer}>
            <img src="img/password.png" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="**********"
              required
            />
          </div>

          <div className={styles.forgotPassword}>
            <a href='/Recover'>Esqueceu a senha?</a>
          </div>

          <button type="submit">
            <img src="img/login.png" />
              Login
          </button>

          <OtherLoginOptions/>
        </form>


      </div>

    </Layout>
  );
};

export default Login;