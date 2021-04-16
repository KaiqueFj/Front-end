import styles from '../styles/Components/AppointmentForm.module.css';

export default function AppointmentForm() {

    return (
        <div className={styles.container}>
            <h3>Prencha o Formulário</h3>
            <p>
                Insira suas informações no formulário
                e envie para marcar a consulta.
            </p>

            <form>
                <h4>Informações Pessoais</h4>
                <input type='text' placeholder='Nome:' required />
                <div className={styles.PersonalInformationRow}>
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

                <h4>Qual a especialidade desejada?</h4>
                <select className={styles.select}>
                    <option value="Endocrinologista">Endocrinologista</option>
                    <option value="Clínico Geral">Clínico Geral</option>
                    <option value="Otorrino">Otorrino</option>
                    <option value="Pediatra">Pediatra</option>
                </select>

                <h4>Seleciona uma das datas possíveis</h4>
                <select className={styles.select}>
                    <option value="12-03-2020">12-03-2020</option>
                    <option value="18-05-2021">18-05-2021</option>
                    <option value="20-05-2021">20-05-2021</option>
                    <option value="22-05-2021">22-05-2021</option>
                </select>


                <h4>Selecione um dos horários possíveis</h4>
                <select className={styles.select}>
                    <option value="12:00">12:00</option>
                    <option value="15:00">15:00</option>
                    <option value="14:00">14:00</option>
                    <option value="07:00">07:00</option>
                </select>

                <button type='submit'>
                    Enviar
                </button>

            </form>
        </div>

    )
}