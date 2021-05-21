import React, { SyntheticEvent, useState } from "react";
import Header from "../Components/Header/header";
import styles from '../styles/pages/updateInformations.module.scss';
import animate from '../styles/animation/animation.module.css';
import { useRouter } from "next/router";
import { parseCookies } from "../utils/parseCookies";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UpdateInformations = ({ req }) => {

    // definition of variables
    const [adress, setAdress] = useState("");
    const [cep, setCep] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [chronicDisease, setChronicDisease] = useState("");

    const router = useRouter();

    // submit function
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const token = parseCookies(req).token;

        // API connection
        const response = await fetch("http://localhost:3333/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': ` Bearer ${token}`
            },
            body: JSON.stringify({
                adress: adress,
                cep: cep,
                phone: phone,
                age: age,
                weight: weight,
                height: height,
                chronicDisease: chronicDisease,
            }),
        });

        // response sucess or not
        if (response.status === 200) {

            toast.success("Dados atualizados com sucesso!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
            });

            return router.push('/');
        } else {

            toast.error("Não foi possível atualizar os dados, tente novamente...", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: false,
            });
        }
    };

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
                <form onSubmit={submit}>
                    <h4>Endereço e Contato</h4>
                    <div className={styles.adressAndNumber}>
                        <input
                            type='text'
                            placeholder='Rua Armando Carvalho, 153'
                            onChange={(e) => setAdress(e.target.value)}
                        />
                        <input
                            type='text'
                            placeholder='CEP: 05870-060'
                            onChange={(e) => setCep(e.target.value)}
                        />
                        <input
                            type='text'
                            placeholder='(11) 95811-2645'
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <h4>Informações Pessoais</h4>
                    <div className={styles.PersonalInformation}>
                        <input
                            type='text'
                            placeholder='Idade:'
                            onChange={(e) => setAge(e.target.value)}
                        />
                        <input
                            type='text'
                            placeholder='Peso:'
                            onChange={(e) => setWeight(e.target.value)}
                        />
                        <input
                            type='text'
                            placeholder='Altura:'
                            onChange={(e) => setHeight(e.target.value)}
                        />
                    </div>

                    <h4>Possui alguma doença crônica?</h4>
                    <div className={styles.checkbox}>
                        <div>
                            <input type='checkbox' name="fooby[2][]" />
                        Sim
                    </div>

                        <div>
                            <input type='checkbox' name="fooby[2][]" />
                        Não
                    </div>
                    </div>
                    <textarea placeholder='Detalhe para a gente...' onChange={(e) => setChronicDisease(e.target.value)} />
                    <button type='submit'>Salvar Informações</button>
                </form>

            </div>
        </div >
    );
};

export default UpdateInformations;