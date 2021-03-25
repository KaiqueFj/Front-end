import { useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";

import Layout from "../Layout/Layout";
import BannerWelcome from "../Components/bannerWelcome";
import OtherLoginOptions from "../Components/otherLoginOptions";

import styles from "../styles/pages/Register.module.css";
import animate from '../styles/animation/animation.module.css';


const Recover = () => {
  // definition of variables
  const [email, setEmail] = useState("");
  const router = useRouter();

  // submit function
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    // API connection
    const login = await fetch("http://localhost:3333/password/recover", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
      }),
    });

    // login sucess or not
    if(login.status === 200){
      return router.push('/');
    } else {
      window.alert("Login Incorreto!")
    }
  };

  return (
    <Layout>
      <form onSubmit={submit} className={styles.form}>
        <h1>Recuperação de senha</h1>

        <div className={styles.inputContainer}>
          <img src="img/userPurple.png" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>

      

        <button type="submit">
          <img src="img/login.png" />
          Login
        </button>
      </form>
      <a href="/Register ">esqueceu sua senha ? clique aqui</a>
    </Layout>
  );
};

export default Recover;