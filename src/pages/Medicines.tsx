import { useRouter } from "next/router";
import React from "react";
import Header from "../Components/Header/header";
import NoMedicines from "../Components/NoMedicine/NoMedicines";
import { useApp } from "../Contexts/UserContext";
import animate from "../styles/animation/animation.module.css";
import styles from "../styles/pages/Medicines.module.scss";
import { concatWithWithoutStatus } from "../utils/concatWithWithoutStatus";
import { medicinesOnDay } from "../utils/medicinesOnDay";
import { parseCookies } from "../utils/parseCookies";

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
  const segunda = data.filter((medicine) =>
    moment(days[1]).isBetween(medicine.dateI, medicine.dateF, null, "[]")
  );
  const terca = data.filter((medicine) =>
    moment(days[2]).isBetween(medicine.dateI, medicine.dateF, null, "[]")
  );
  const quarta = data.filter((medicine) =>
    moment(days[3]).isBetween(medicine.dateI, medicine.dateF, null, "[]")
  );
  const quinta = data.filter((medicine) =>
    moment(days[4]).isBetween(medicine.dateI, medicine.dateF, null, "[]")
  );
  const sexta = data.filter((medicine) =>
    moment(days[5]).isBetween(medicine.dateI, medicine.dateF, null, "[]")
  );
  const sabado = data.filter((medicine) =>
    moment(days[6]).isBetween(medicine.dateI, medicine.dateF, null, "[]")
  );
  const domingo = data.filter((medicine) =>
    moment(days[0]).isBetween(medicine.dateI, medicine.dateF, null, "[]")
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
  var medicinesOnDay = [segunda, terca, quarta, quinta, sexta, sabado, domingo];

  // Order medicines of day by time
  const array = [];
  for (var i = 0; i < medicinesOnDay.length; i++) {
    if (medicinesOnDay[i].length > 0) {
      const x = medicinesOnDay[i].sort(function (a, b) {
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
  medicinesOnDay = array;

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
            medicine: dataJson[i].medicine,
            id: dataJson[i].id,
            time: dataJson[i].time,
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
          "medicines",
          JSON.stringify(medicinesOnDay[daysWeek.indexOf(dayClicked)])
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
            Remédios
          </div>

          <div className={styles.emergencyContainer}>
            {/* Show div of each day in week */}
            {daysWeek.map((days) => (
              
              <div className={`${styles.emergencyItem} ${animate.up}`}
              >
                <h3>{days}</h3>

                {/* if has no medicine in this day, show <NoMedicines/> */}
                {medicinesOnDay[daysWeek.indexOf(days)].length > 0 ? (
                  <>
                    <div className={`${styles.medicines} ${animate.upSlow}`}>
                      {/* show each medicine of this day */}
                      {medicinesOnDay[daysWeek.indexOf(days)].map(
                        (medicine) => (
                          <div className={animate.upMoreSlow} >

                           
                            <p>{medicine.time}</p>
                            <hr></hr>
                            <p>{medicine.medicine}</p>
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
                  <NoMedicines />
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
