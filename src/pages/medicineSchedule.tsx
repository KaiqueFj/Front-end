import React, { useState } from "react";
import Layout from "../Layout/Layout";
import styles from '../styles/pages/medicine.module.css';

const medicineSchedule = () => {
    //Variables
    const [data, setData] = useState([]);
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");

    async function teste() {

        // Get token in LocalStorage
        const token = localStorage.getItem('token')

        // API connection
        const indexLogged = await fetch('http://localhost:3333/medicine', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        // Get JSON information and save in variables line (7-9)
        const indexInformationJSON = await indexLogged.json();
        return setData(indexInformationJSON);
    }

    console.log(data)


    return (
        <Layout>
            <button onClick={teste}>dadasd</button>

            {data.map((medicine) => (
                <div className={styles.container}>
                    <p>id: {medicine.id}</p>
                    <p>username: {medicine.username}</p>
                    <p>email: {medicine.email}</p>
                </div>
            ))}

        </Layout >
    );
};

export default medicineSchedule;