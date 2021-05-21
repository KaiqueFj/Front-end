import React from "react";
import Header from "../Components/Header/header";
import animate from "../styles/animation/animation.module.css";
import styles from "../styles/pages/History.module.scss";

const History = () => {

    return (
        <div id="container1">
            <Header />

            <div className={styles.scroll}>
                <div className={styles.historyContainer}>
                    <img className={styles.state} src='/img/icons/done.png' />
                    <tr>
                        <th>
                            <img className={styles.doctor} src="https://blog.medicalway.com.br/wp-content/uploads/2019/09/original-b85459ba631c4f58b23e7be9c78dfa84-780x450.jpg" />
                        </th>
                        <th>Dr. Rubéns</th>
                        <th>Hospital Family</th>
                        <th>Oftalmologista</th>
                        <th>14:30</th>
                        <th>28/04/2021</th>
                    </tr>
                </div>

                <div className={styles.historyContainer}>
                    <img className={styles.state} src='/img/icons/loading.png' />
                    <tr>
                        <th>
                            <img src="https://blog.medicalway.com.br/wp-content/uploads/2019/09/original-b85459ba631c4f58b23e7be9c78dfa84-780x450.jpg" />
                        </th>
                        <th>Dr. Rubéns</th>
                        <th>Hospital Family</th>
                        <th>Oftalmologista</th>
                        <th>14:30</th>
                        <th>28/04/2021</th>
                    </tr>
                </div>

                <div className={styles.historyContainer}>
                    <img className={styles.state} src='/img/icons/canceled.png' />
                    <tr>
                        <th>
                            <img src="https://blog.medicalway.com.br/wp-content/uploads/2019/09/original-b85459ba631c4f58b23e7be9c78dfa84-780x450.jpg" />
                        </th>
                        <th>Dr. Rubéns</th>
                        <th>Hospital Family</th>
                        <th>Oftalmologista</th>
                        <th>14:30</th>
                        <th>28/04/2021</th>
                    </tr>
                </div>

                <div className={styles.historyContainer}>
                    <tr>
                        <th>
                            <img src="https://blog.medicalway.com.br/wp-content/uploads/2019/09/original-b85459ba631c4f58b23e7be9c78dfa84-780x450.jpg" />
                        </th>
                        <th>Dr. Rubéns</th>
                        <th>Hospital Family</th>
                        <th>Oftalmologista</th>
                        <th>14:30</th>
                        <th>28/04/2021</th>
                    </tr>
                </div>

                <div className={styles.historyContainer}>
                    <tr>
                        <th>
                            <img src="https://blog.medicalway.com.br/wp-content/uploads/2019/09/original-b85459ba631c4f58b23e7be9c78dfa84-780x450.jpg" />
                        </th>
                        <th>Dr. Rubéns</th>
                        <th>Hospital Family</th>
                        <th>Oftalmologista</th>
                        <th>14:30</th>
                        <th>28/04/2021</th>
                    </tr>
                </div>

                <div className={styles.historyContainer}>
                    <tr>
                        <th>
                            <img src="https://blog.medicalway.com.br/wp-content/uploads/2019/09/original-b85459ba631c4f58b23e7be9c78dfa84-780x450.jpg" />
                        </th>
                        <th>Dr. Rubéns</th>
                        <th>Hospital Family</th>
                        <th>Oftalmologista</th>
                        <th>14:30</th>
                        <th>28/04/2021</th>
                    </tr>
                </div>

                <div className={styles.historyContainer}>
                    <tr>
                        <th>
                            <img src="https://blog.medicalway.com.br/wp-content/uploads/2019/09/original-b85459ba631c4f58b23e7be9c78dfa84-780x450.jpg" />
                        </th>
                        <th>Dr. Rubéns</th>
                        <th>Hospital Family</th>
                        <th>Oftalmologista</th>
                        <th>14:30</th>
                        <th>28/04/2021</th>
                    </tr>
                </div>

                <div className={styles.historyContainer}>
                    <tr>
                        <th>
                            <img src="https://blog.medicalway.com.br/wp-content/uploads/2019/09/original-b85459ba631c4f58b23e7be9c78dfa84-780x450.jpg" />
                        </th>
                        <th>Dr. Rubéns</th>
                        <th>Hospital Family</th>
                        <th>Oftalmologista</th>
                        <th>14:30</th>
                        <th>28/04/2021</th>
                    </tr>
                </div>

            </div>
        </div>
    );
};

export default History;