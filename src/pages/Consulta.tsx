import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import titlePage from "../styles/Components/titlePage.module.css";
import styles from "../styles/pages/Medicines.module.css";
import animate from "../styles/animation/animation.module.css";
import Header from "../Components/header";
import NoMedicines from "../Components/noConsultas";
import moment from "moment";
import { useRouter } from "next/router";
import NoConsultas from "../Components/noConsultas";

const Medicine = () => {
  //Variables
  const [data, setData] = useState([]);
  const router = useRouter();

  //Return the date of days of week
  var currentDate = moment();
  var weekStart = currentDate.clone().startOf("week");

  var days = [];
  for (var i = 0; i <= 6; i++) {
    days.push(moment(weekStart).add(i, "days").format("YYYY-MM-DD"));
  }

  // Filter data of days week
  const segunda = data.filter((consulta) =>
    moment(days[1]).isBetween(consulta.dateI, consulta.dateF, null, "[]")
  );
  const terca = data.filter((consulta) =>
    moment(days[2]).isBetween(consulta.dateI, consulta.dateF, null, "[]")
  );
  const quarta = data.filter((consulta) =>
    moment(days[3]).isBetween(consulta.dateI, consulta.dateF, null, "[]")
  );
  const quinta = data.filter((consulta) =>
    moment(days[4]).isBetween(consulta.dateI, consulta.dateF, null, "[]")
  );
  const sexta = data.filter((consulta) =>
    moment(days[5]).isBetween(consulta.dateI, consulta.dateF, null, "[]")
  );
  const sabado = data.filter((consulta) =>
    moment(days[6]).isBetween(consulta.dateI, consulta.dateF, null, "[]")
  );
  const domingo = data.filter((consulta) =>
    moment(days[0]).isBetween(consulta.dateI, consulta.dateF, null, "[]")
  );

  // variables to use in mapFunction
  const daysWeek = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
    "Domingo",
  ];
  var consultasOnDay = [segunda, terca, quarta, quinta, sexta, sabado, domingo];

  // Order medicines of day by time
  const array = [];
  for (var i = 0; i < consultasOnDay.length; i++) {
    if (consultasOnDay[i].length > 0) {
      const x = consultasOnDay[i].sort(function (a, b) {
        const n1 = parseInt(b.time.replace(":", ""));
        const n2 = parseInt(a.time.replace(":", ""));
        return n2 - n1;
      });
      array.push(x);
    } else {
      array.push([]);
    }
  }

  // medicinesOnDay ordered
  consultasOnDay = array;

  useEffect(() => {
    async function teste() {
      try {
        // Get token in LocalStorage
        const token = localStorage.getItem("token");

        // API connection
        const indexLogged = await fetch("http://localhost:3333/show/schedule", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: ` Bearer ${token}`,
          },
        });

        // Get JSON information and save in variables line (7-9)
        const dataJson = await indexLogged.json();

        const data = [];
        for (var i = 0; i < dataJson.length; i++) {
          // Show only "YYYY-MM-DD"
          const initialDate = dataJson[i].dateI
            .toString()
            .replace("T03:00:00.000Z", "");
          const finalDate = dataJson[i].dateF
            .toString()
            .replace("T03:00:00.000Z", "");

          // Data to show
          data.push({
            doctor: dataJson[i].doctor,
            id: dataJson[i].id,
            time: dataJson[i].time,
            schedule: dataJson[i].schedule,
            location: dataJson[i].location,
            dateI: initialDate,
            dateF: finalDate,
          });
        }

        return setData(data);
      } catch (error) {
        console.log("deu merda");
      }
    }

    teste();
  }, []);

  function setInformation() {
    // Select link clicked and set this medicines on localStorage
    document.querySelectorAll("a").forEach((a) => {
      a.onclick = (event) => {
        const dayClicked = a.querySelector("span").innerHTML;
        localStorage.setItem(
          "consultas",
          JSON.stringify(consultasOnDay[daysWeek.indexOf(dayClicked)])
        );

        router.push(`/MedicineDay?day=${dayClicked}`);
      };
    });
  }
  return (
    <Layout>
      <div className="containerBackground">
        <Header />

        <div className={styles.container}>
          <div className={titlePage.titlePage}>
            <img src="/img/icons/medicine.png" />
            Consultas
          </div>

          <div className={styles.emergencyContainer}>
            {/* Show div of each day in week */}
            {daysWeek.map((days) => (
              <div className={`${styles.emergencyItem} ${animate.up}`}>
                <h3>{days}</h3>

                {/* if no has medicine in this day, show <NoMedicines/> */}
                {consultasOnDay[daysWeek.indexOf(days)].length > 0 ? (
                  <>
                    <div className={`${styles.medicines} ${animate.upSlow}`}>
                      {/* show each medicine of this day */}
                      {consultasOnDay[daysWeek.indexOf(days)].map(
                        (consultas) => (
                          <div className={animate.upMoreSlow}>
                            <p>{consultas.time}</p>
                            <hr></hr>
                            <p>{consultas.schedule}</p>
                          </div>
                        )
                      )}
                    </div>

                    <a onClick={setInformation}>
                      <img
                        className={styles.seeMoreBTN}
                        src="/img/icons/seeMore.png"
                      />
                      <span>{days}</span>
                    </a>
                  </>
                ) : (
                  <NoConsultas/>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Medicine;
