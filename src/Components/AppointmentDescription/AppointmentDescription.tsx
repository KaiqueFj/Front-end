import styles from './styles.module.scss';
import animate from '../styles/animation/animation.module.css';


export default function AppointmentDescription() {

    return (
        <div className={styles.container}>
            <div className={styles.containerInformation}>

                <div className={styles.title}>
                    <img src='/img/icons/consultas.png' />
                    <h3> Marcar Consulta</h3>
                </div>

                <p>
                    Para marcar uma consulta, digite qual  a especialidade,
                    selecione o local desejado no mapa e preencha  o formulário
                    com suas informações e envie.
                </p>

            </div>
        </div>

    )
}