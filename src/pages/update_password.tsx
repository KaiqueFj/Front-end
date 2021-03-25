import { useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";

import Layout from "../Layout/Layout";
import BannerWelcome from "../Components/bannerWelcome";
import OtherLoginOptions from "../Components/otherLoginOptions";

import styles from "../styles/pages/Register.module.css";
import animate from '../styles/animation/animation.module.css';


const login = () => {
  // definition of variables
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");

  const router = useRouter();
  // submit function
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    // API connection
    await fetch("http://localhost:3333/password/update/:id", {
      method: "PUT",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        email: email,
        password: password,
        newPassword: newPassword
      }),
    });
  };

  return (
    <Layout>
      <form onSubmit={submit} className={styles.form}>
        <h1>Troca de senha</h1>

        <div className={styles.inputContainer}>
          <img src="img/userPurple.png" />
          <input
            onChange={(e) => setemail(e.target.value)}
            placeholder="email"
            required
          />
        </div>

      
        <div className={styles.inputContainer}>
          <img src="img/password.png" />
          <input
            onChange={(e) => setnewPassword(e.target.value)}
            type="password"
            placeholder="Nova senha"
            required
          />
        </div>

        <button type="submit">
          <img src="img/login.png" />
          Trocar senha
        </button>
      </form>
    </Layout>
  );
};

export default login;
