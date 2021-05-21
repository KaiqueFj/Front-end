import { useRouter } from "next/router";
import React from "react";
import Header from "../Components/Header/header";
import NoMedicines from "../Components/NoMedicine/NoMedicines";
import { useApp } from "../Contexts/AppContexts";
import animate from "../styles/animation/animation.module.css";
import styles from "../styles/pages/Medicines.module.scss";
import { concatWithWithoutStatus } from "../utils/concatWithWithoutStatus";
import { medicinesOnDay } from "../utils/medicinesOnDay";
import { parseCookies } from "../utils/parseCookies";

const Medicine = (props) => {

  //Variables
  const {
    getAllMedicinesOfDay,
  } = useApp();

  const router = useRouter();
  const today = getAllMedicinesOfDay(props.data);

  function setInformation() {
    
    // Select link clicked and set this medicines on localStorage
    document.querySelectorAll("a").forEach((a) => {
      a.onclick = (event) => {
        localStorage.setItem('medicines', JSON.stringify(props.data[Number(today)]));
        const dayClicked = a.querySelector('span').innerHTML
        router.push(`/MedicineDay?day=${dayClicked}`)
      }
    })
  }

  return (
    <div id='container1'>
      <div className="main">
        <Header />

        <div className={styles.container}>
          <div className={styles.emergencyContainer}>

            {/* Show div of each day in week */}
            {props.daysWeek.map((days) => (

              <div
                key={props.daysWeek.indexOf(days)}
                className={`${styles.emergencyItem} ${animate.up}`}
                id={
                  props.daysWeek.indexOf(days) === today ? 'today' : ''
                    || props.daysWeek.indexOf(days) < today ? 'inactive' : ''
                }
              >
                <h3>{days}</h3>

                {/* if no has medicine in this day, show <NoMedicines/> */}
                {props.data[props.daysWeek.indexOf(days)].length > 0 ? (
                  <>
                    <div className={`${styles.medicines} ${animate.upSlow}`}>

                      {/* show each medicine of this day */}
                      {props.data[props.daysWeek.indexOf(days)].map((medicine) => (

                        <div
                          className={animate.upMoreSlow}
                          key={medicine.id}
                          id={medicine.status === 1 ? 'noTaken' : medicine.status === 0 ? 'taken' : ''}
                        >
                          <p>{medicine.time}</p>
                          <hr></hr>
                          <p>{medicine.name}</p>
                          <hr></hr>
                        </div>
                      ))}

                    </div>

                    <a onClick={setInformation}>
                      <img className={styles.seeMoreBTN} src="/img/icons/seeMore.png" />
                      <span>{days}</span>
                    </a>
                  </>

                ) : (
                  <NoMedicines />
                )}

              </div>
            ))}

          </div>
        </div>
      </div>
    </div >
  );
};

export default Medicine;



export async function getServerSideProps({ req }) {
  // Get token in cookies
  const token = parseCookies(req).token;

  // API connection
  const response = await fetch('http://localhost:3333/showMedicine', {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': ` Bearer ${token}`
    },
  });

  const responseJSON = await response.json()

  // All Medicines
  const array = [];
  for (var i = 0; i < responseJSON[0].length; i++) {

    // Show only "YYYY-MM-DD"
    const initialDate = responseJSON[0][i].initialDate.toString().replace('T03:00:00.000Z', '');
    const finalDate = responseJSON[0][i].finalDate.toString().replace('T03:00:00.000Z', '');

    // Data to show
    array.push({
      'name': responseJSON[0][i].name,
      'id': responseJSON[0][i].id,
      'time': responseJSON[0][i].time,
      'initialDate': initialDate,
      'finalDate': finalDate,
      'status': 2,
    })
  }

  //Medicines Status
  const arrayOfStatusMedicines = []
  for (var i = 0; i < responseJSON[1].length; i++) {

    // Show only "YYYY-MM-DD"
    const initialDate = responseJSON[1][i].initialDate.toString().replace('T03:00:00.000Z', '');
    const finalDate = responseJSON[1][i].finalDate.toString().replace('T03:00:00.000Z', '');
    const date = responseJSON[1][i].date.toString().replace('T03:00:00.000Z', '');

    // Data to show
    arrayOfStatusMedicines.push({
      'name': responseJSON[1][i].name,
      'id': responseJSON[1][i].id,
      'time': responseJSON[1][i].time,
      'status': responseJSON[1][i].status,
      'date': date
    })
  }

  // calls the function to handle the data
  const data = medicinesOnDay(array);

  // const dataStatus = medicinesOnDay(arrayOfStatusMedicines);
  const dataFinal = concatWithWithoutStatus({ data, arrayOfStatusMedicines })

  return {
    props: {
      data: dataFinal,
      daysWeek: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
      ,
    }
  }
}