import React, { useState, useEffect } from "react";
import styles from '../styles/pages/MedicineDay.module.scss';
import animate from '../styles/animation/animation.module.css';
import Header from "../Components/Header/header";
import Link from "next/Link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { parseCookies } from "../utils/parseCookies";

const MedicineDay = (req) => {
    //Variables
    const [day, setDay] = useState('');
    const [data, setData] = useState([]);
    const router = useRouter();


    useEffect(() => {
        async function getInformation() {

            try {
                // Get information from url
                const queryString = window.location.search;
                const urlParams = new URLSearchParams(queryString);
                setDay(urlParams.get('day'))

                // Get medicines on localStorage
                const medicines = localStorage.getItem('medicines')
                return setData(JSON.parse(medicines))

            } catch (error) {
                console.log(error)
            }
        }

        getInformation()
    }, [])

    async function deleteMedicine(props) {

        // API connection
        const response = await fetch("http://localhost:3333/deleteMedicine", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                medicineId: props,
            }),
        });

        // login sucess or not
        if (response.status === 200) {

            // Set token
            toast.success("Remédio Deletado com sucesso", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: false,
            });
      
            return router.push('/Medicines');

        } else {
            toast.error("Email ou senha incorretos, tente novamente...", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: false,
            });
        }
    }

    return (
        <div id='container1'>
            <div className='main'>
                <Header />

                <div className={styles.container}>
                    <div className='titlePage'>
                        <img src='/img/icons/medicine.png' />
                        Remédios | {day}
                    </div>

                    <div className={styles.medicinesOnDay}>
                        <h3>Remédios</h3>

                        <div className={`${styles.medicines} ${animate.up}`}>

                            {data.map((medicine) => (
                                <div
                                    className={animate.upSlow}
                                    key={medicine.id}
                                    id={medicine.status === 1 ? 'noTaken' : medicine.status === 0 ? 'taken' : ''}
                                >
                                    <p>{medicine.time}</p>
                                    <hr></hr>
                                    <p>{medicine.name}</p>
                                    <button onClick={() => deleteMedicine(medicine.id)}><img src='img/icons/delete.jpg' /></button>
                                </div>
                            ))}

                        </div>
                    </div>

                    <Link href="addMedicine">
                        <div className={styles.addMedicine}>
                            <img src='/img/icons/add.png' />
                        </div>
                    </Link>

                </div>
            </div>
        </div >
    );
};

export default MedicineDay;