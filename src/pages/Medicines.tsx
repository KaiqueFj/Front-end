import React, { useState } from "react";
import Layout from "../Layout/Layout";
import titlePage from "../styles/Components/titlePage.module.css";
import styles from "../styles/pages/Medicines.module.css";
import animate from "../styles/animation/animation.module.css";
import Header from "../Components/header";
import NoMedicines from "../Components/noMedicines";

const Medicine = () => {
  //Variables
  const [data, setData] = useState([]);
  const segunda = data.filter((medicine) => medicine.day === "Segunda");
  const terca = data.filter((medicine) => medicine.day === "Terça");
  const quarta = data.filter((medicine) => medicine.day === "Quarta");
  const quinta = data.filter((medicine) => medicine.day === "Quinta");
  const sexta = data.filter((medicine) => medicine.day === "Sexta");
  const sabado = data.filter((medicine) => medicine.day === "Sábado");
  const domingo = data.filter((medicine) => medicine.day === "Domingo");

  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");

  async function teste() {
    // Get token in LocalStorage
    const token = localStorage.getItem("token");

    // API connection
    const indexLogged = await fetch("http://localhost:3333/show/medicine", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    // Get JSON information and save in variables line (7-9)
    const indexInformationJSON = await indexLogged.json();
    return setData(indexInformationJSON);
  }
  teste();

  return (
    <Layout>
      <div className="containerBackground">
        <Header />

        <div className={styles.container}>
          <div className={titlePage.titlePage}>
            <img src="/img/icons/medicine.png" />
            Remédios
          </div>

          <div className={styles.emergencyContainer}>
            <div className={`${styles.emergencyItem} ${animate.up}`}>
              <h3>Domingo</h3>

              {quarta.length > 0 ? (
                <>
                  <div className={`${styles.medicines} ${animate.upSlow}`}>
                    {quarta.map((medicine) => (
                      <div className={animate.upMoreSlow}>
                        <p>12:15</p>
                        <hr></hr>
                        <p>{medicine.location}</p>
                      </div>
                    ))}
                  </div>
                  <a href="MedicineDay">
                    <img src="/img/icons/seeMore.png" />
                  </a>
                </>
              ) : (
                <NoMedicines />
              )}
            </div>

            
            <div className={`${styles.emergencyItem} ${animate.up}`}>
              <h3>Segunda</h3>
              {segunda.length > 0 ? (
                <>
                  <div className={`${styles.medicines} ${animate.upSlow}`}>
                    {segunda.map((medicine) => (
                      <div className={animate.upMoreSlow}>
                        <p>12:15</p>
                        <hr></hr>
                        <p>{medicine.location}</p>
                      </div>
                    ))}
                  </div>
                  <a href="MedicineDay">
                    <img src="/img/icons/seeMore.png" />
                  </a>
                </>
              ) : (
                <NoMedicines />
              )}
            </div>

            <div className={`${styles.emergencyItem} ${animate.up}`}>
              <h3>Terça</h3>

              {terca.length > 0 ? (
                <>
                  <div className={`${styles.medicines} ${animate.upSlow}`}>
                    {terca.map((medicine) => (
                      <div className={animate.upMoreSlow}>
                        <p>12:15</p>
                        <hr></hr>
                        <p>{medicine.location}</p>
                      </div>
                    ))}
                  </div>
                  <a href="MedicineDay">
                    <img src="/img/icons/seeMore.png" />
                  </a>
                </>
              ) : (
                <NoMedicines />
              )}
            </div>

            <div className={`${styles.emergencyItem} ${animate.up}`}>
              <h3>Quarta</h3>

              {quarta.length > 0 ? (
                <>
                  <div className={`${styles.medicines} ${animate.upSlow}`}>
                    {quarta.map((medicine) => (
                      <div className={animate.upMoreSlow}>
                        <p>12:15</p>
                        <hr></hr>
                        <p>{medicine.location}</p>
                      </div>
                    ))}
                  </div>
                  <a href="MedicineDay">
                    <img src="/img/icons/seeMore.png" />
                  </a>
                </>
              ) : (
                <NoMedicines />
              )}
            </div>

            <div className={`${styles.emergencyItem} ${animate.up}`}>
              <h3>Quinta</h3>

              {quinta.length > 0 ? (
                <>
                  <div className={`${styles.medicines} ${animate.upSlow}`}>
                    {quinta.map((medicine) => (
                      <div className={animate.upMoreSlow}>
                        <p>12:15</p>
                        <hr></hr>
                        <p>{medicine.location}</p>
                      </div>
                    ))}
                  </div>
                  <a href="MedicineDay">
                    <img src="/img/icons/seeMore.png" />
                  </a>
                </>
              ) : (
                <NoMedicines />
              )}
            </div>

            <div className={`${styles.emergencyItem} ${animate.up}`}>
              <h3>Sexta</h3>

              {sexta.length > 0 ? (
                <>
                  <div className={`${styles.medicines} ${animate.upSlow}`}>
                    {sexta.map((medicine) => (
                      <div className={animate.upMoreSlow}>
                        <p>12:15</p>
                        <hr></hr>
                        <p>{medicine.location}</p>
                      </div>
                    ))}
                  </div>
                  <a href="MedicineDay">
                    <img src="/img/icons/seeMore.png" />
                  </a>
                </>
              ) : (
                <NoMedicines />
              )}
            </div>
            <div className={`${styles.emergencyItem} ${animate.upMoreSlow}`}>
              <h3>Sábado</h3>

              {sabado.length > 0 ? (
                <>
                  <div className={`${styles.medicines} ${animate.upSlow}`}>
                    {sabado.map((medicine) => (
                      <div className={animate.upMoreSlow}>
                        <p>12:15</p>
                        <hr></hr>
                        <p>{medicine.location}</p>
                      </div>
                    ))}
                  </div>
                  <a href="MedicineDay">
                    <img src="/img/icons/seeMore.png" />
                  </a>
                </>
              ) : (
                <NoMedicines />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Medicine;
