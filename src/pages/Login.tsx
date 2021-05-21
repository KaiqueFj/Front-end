import React, { SyntheticEvent, useState } from "react";
import { useRouter } from "next/router";

import BannerWelcome from "../Components/bannerWelcome/bannerWelcome";
import OtherLoginOptions from "../Components/OtherLoginOptions/otherLoginOptions";

import styles from "../styles/pages/login_register.module.scss";
import animate from '../styles/animation/animation.module.css';
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [cookie, setCookie] = useCookies(["token"])

  // definition of variables
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  // submit function
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    // API connection
    const response = await fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    console.log(response.status )

    // login sucess or not
    if (response.status === 200) {

      // Set token
      const { token } = await response.json();
      setCookie("token", token, {
        path: "/",
        maxAge: 60 * 60 * 24, // Expires after 24hr
        sameSite: true,
      });

      return router.push('/');

    } else {
      toast.error("Email ou senha incorretos, tente novamente...", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false,
      });
    }
  };

  return (
    <>
      <div className={styles.rowContainer}>

        <BannerWelcome />

        <form onSubmit={submit} className={`${styles.form} ${animate.upSlow}`}>

          <div className={styles.legend}>
            <h1>Login</h1>
            <p>Caso não tenha uma conta...
                <a href='/Register'> Registre-se</a>
            </p>
          </div>

          <div className={styles.inputContainer}>
            <img src="img/icons/userPurple.png" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="lurdes@gmail.com"
              required
            />
          </div>

          <div className={styles.inputContainer}>
            <img src="img/icons/password.png" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="**********"
              required
            />
          </div>

          <div className={styles.forgotPassword}>
            <a href='#'>Esqueceu a senha?</a>
          </div>

          <button type="submit">
            <img src="img/icons/login.png" />
              Login
          </button>

          <OtherLoginOptions />
        </form>


      </div>

    </>
  );
};

export default Login;