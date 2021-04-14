import animate from '../styles/animation/animation.module.css';
import styles from "../styles/pages/Medicines.module.css";

export default function NoConsultas() {

  return (
    <div className={`${styles.noMedicines} ${animate.upMoreSlow}`}>
      <a href="addConsulta"><img src="img/icons/noMedicines.png" /></a>
      <h2>Sem Consultas hoje :</h2>
    </div >

  )
}