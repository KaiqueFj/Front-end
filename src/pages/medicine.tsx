import { useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";

import Layout from "../Layout/Layout";
import BannerWelcome from "../Components/bannerWelcome";
import OtherLoginOptions from "../Components/otherLoginOptions";

import styles from "../styles/pages/Register.module.css";
import animate from '../styles/animation/animation.module.css';


const Event = () => {
  // definition of variables
  const [day, setDay] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const token = localStorage.getItem("token");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const router = useRouter();

  // submit function
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    // API connection
    const login = await fetch("http://localhost:3333/create/medicine", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        day:day,
        title: title,
        location: location,
        date: date,
        time: time,
      }),
    });
    const loginToken = await login.json();
    localStorage.setItem("token", token);

    console.log(loginToken);
    return router.push("/event");
    // login sucess or not
  };

  return (
    <Layout>
      <form onSubmit={submit} className={styles.form}>
        <h1>Login</h1>

        <div className={styles.inputContainer}>
          <img src="img/userPurple.png" />
          <input
            onChange={(e) => setDay(e.target.value)}
            placeholder="dia da semana"
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <img src="img/userPurple.png" />
          <input
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Remédio"
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <img src="img/password.png" />
          <input
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Remédio"
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <img src="img/password.png" />
          <input
            onChange={(e) => setDate(e.target.value)}
            placeholder="dia"
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <img src="img/password.png" />
          <input
            onChange={(e) => setTime(e.target.value)}
            placeholder="horario"
            required
          />
        </div>

        <button type="submit">
          <img src="img/login.png" />
          Criar Usuário
        </button>
      </form>
    </Layout>
  );
};

export default Event;
