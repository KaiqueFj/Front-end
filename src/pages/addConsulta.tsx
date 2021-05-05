import React, { SyntheticEvent, useState } from "react";
import Layout from "../Layout/Layout";
import titlePage from "../styles/Components/titlePage.module.scss";
import styles from "../styles/pages/addMedicine.module.scss";
import animate from "../styles/animation/animation.module.css";
import Head from "next/head";
import Header from "../Components/Header/header";
import moment from "moment";
import { useRouter } from "next/router";

const Medicine = () => {
  //Variables
  const router = useRouter();
  const [initialDate, setInitialDate] = useState("");
  const [datef, setInitialDateF] = useState("");
  const [doctor, setDoctor] = useState("");
  const [schedule, setSchedule] = useState("");
  const [location, setLocation] = useState("");
  const [color, setColor] = useState("");

  function newTime() {
    const container = document.querySelector(".timeDiv");
    container.insertAdjacentHTML(
      "beforeend",
      "<hr></hr><input type='time' required/>"
    );
  }

  const time = [];
  function getTime() {
    const container = document
      .querySelector(".timeDiv")
      .querySelectorAll("input");
    for (var i = 0; i < container.length; i++) {
      time.push(container[i].value);
    }
  }

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    //Get Hours
    getTime();
    console.log(time);

    // Get token in LocalStorage
    const token = localStorage.getItem("token");

    // API connection
    const addconsulta = await fetch("http://localhost:3333/create/schedule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        doctor: doctor,
        schedule: schedule,
        location: location,
        dateI: initialDate,
        dateF: datef,
        time: time.toString(),
        // color: color
      }),
    });

    console.log(initialDate);
    console.log(datef);


    const data = addconsulta;
    if (data.status === 200) {
      // Get token
      return router.push("/Consulta");
    } else {
      window.alert(
        "Não foi possível adicionar este medicamento... tente novamente!"
      );
    }
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="path/to/font-awesome/css/font-awesome.min.css"
        />
      </Head>

      <Layout>
        <div className="containerBackground">
          <Header />

          <div className={styles.container}>
            <div className={titlePage.titlePage}>
              <img src="/img/icons/medicine.png" />
              Agendar Consulta
            </div>

            <form onSubmit={submit} className={styles.addMedicine}>
              <div className={`${styles.hoursContainer} ${animate.up}`}>
                <div className="timeDiv">
                  <input type="time" required />
                </div>

                <button type="button">
                  <img src="img/icons/add.png" onClick={newTime} />
                </button>
              </div>

              <div className={`${styles.specificDate} ${animate.upSlow}`}>
                <h3 className={styles.legend}>Data Específica</h3>
                <button>
                  <div></div>
                </button>
              </div>

              <div className={`${styles.date} ${animate.upSlow}`}>
                <input
                  type="date"
                  name="initialDate"
                  placeholder="Data de início:"
                  onChange={(e) => setInitialDate(e.target.value)}
                />

                  <input
                  type="date"
                  name="finalDate"
                  placeholder="Data de início:"
                  onChange={(e) => setInitialDateF(e.target.value)}
                />      
              </div>

              <input
                onChange={(e) => setDoctor(e.target.value)}
                className={animate.upSlow}
                type="text"
                name="medicineName"
                placeholder="Doutor"
                required
              />
              <input
                onChange={(e) => setSchedule(e.target.value)}
                className={animate.upSlow}
                type="text"
                name="medicineName"
                placeholder="Motivo da consulta:"
                required
              />

              <input
                onChange={(e) => setLocation(e.target.value)}
                className={animate.upSlow}
                type="text"
                name="medicineName"
                placeholder="Hospital:"
                required
              />

              <button
                type="submit"
                className={`${styles.submitButton} ${animate.upMoreSlow}`}
              >
                <img src="/img/icons/add.png" />
                Adicionar novo remédio
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Medicine;
