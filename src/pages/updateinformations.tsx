import React, { useState } from "react";
import Header from "../Components/Header/header";
import styles from '../styles/pages/updateInformations.module.scss';
import animate from '../styles/animation/animation.module.css';


const UpdateInformations = () => {
    return (
        <div className={styles.container}>
            <div className={styles.backgroundImage} />
            <Header />

            <div className={styles.banner}>
                <img src="/teste.png" />
                <p>
                    O preenchimento das seguintes informações são opcionais,
                    elas servem para agilizar o preenchimento dos formulários
                    de consulta e uma melhor usabilidade do site.
                </p>
            </div>

            <div className={styles.informations}>
                <form>
                    <h4>Endereço e Contato</h4>
                    <div className={styles.adressAndNumber}>
                        <input type='text' placeholder='Endereço:' required />
                        <input type='text' placeholder='CEP:' required />
                        <input type='text' placeholder='Celular:' required />
                    </div>

                    <h4>Informações Pessoais</h4>
                    <div className={styles.PersonalInformation}>
                        <input type='text' placeholder='Idade:' required />
                        <input type='text' placeholder='Peso:' required />
                        <input type='text' placeholder='Altura:' required />
                    </div>

                    <h4>Possui alguma doença crônica?</h4>
                    <div className={styles.checkbox}>
                        <div>
                            <input type='checkbox' name="fooby[2][]" required />
                        Sim
                    </div>

                        <div>
                            <input type='checkbox' name="fooby[2][]" required />
                        Não
                    </div>
                    </div>
                    <textarea placeholder='Detalhe para a gente...' />
                    <button>Salvar Informações</button>
                </form>

            </div>
        </div >
    );
};

export default UpdateInformations;