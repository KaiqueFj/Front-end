import { useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";

import Layout from "../Layout/Layout";
import BannerWelcome from "../Components/bannerWelcome";
import OtherLoginOptions from "../Components/otherLoginOptions";

import styles from "../styles/pages/Register.module.css";
import animate from '../styles/animation/animation.module.css';




const Event = () => {
  //Variables
  //   const [day, setDay] = useState("");
  //   const [title, setTitle] = useState("");
  //   const [location, setLocation] = useState("");
  //   const [date, setDate] = useState("");
  //   const [time, setTime] = useState("");

  const [array, setarray] = useState([]);

  async function event_list() {
    const token = localStorage.getItem("token");
    const indexLogged = await fetch("http://localhost:3333/show/medicine", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    // Get JSON information and save in variables line (7-9)
    const data = await indexLogged.json();

    setarray(data);
    // setDay(data.day);
    // setTitle(data.title);
    // setLocation(data.location);
    // setDate(data.date);
    // setTime(data.time);

    // console.log(data);
    return data;
  }
  // Get token in LocalStorage
  //event_list();
  console.log(array.length);

  // API connection

  return (
    <Layout>
      <button onClick={event_list}>safadinha</button>
      
      {array.map((medicine) => (
                <div className={styles.container}>
                    <p>id: {medicine.day}</p>
                    <p>titulo: {medicine.title}</p>
                    <p>Tipo de remédio: {medicine.location}</p>
                    <p>data: {medicine.data}</p>
                    <p>horario: {medicine.time}</p>
                </div>
            ))}

    </Layout>
  );
};

export default Event;
