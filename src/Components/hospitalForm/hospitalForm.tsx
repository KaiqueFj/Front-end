import styles from "./styles.module.scss";

export default function Hospitalform() {
  return (
    <div className={styles.container}>
      <h3>Hospital do Taboão</h3>

      <form>
          <img className={styles.mainImage} src="../img/hospitals/family.png" />
        

        <div className={styles.otherimages}>
          <img src="../img/hospitals/family.png" />
          <img src="../img/hospitals/family.png" />
          <img src="../img/hospitals/family.png" />
          <img src="../img/hospitals/family.png" />
          <img src="../img/hospitals/family.png" />
          <img src="../img/hospitals/family.png" />

        </div>

        <div className={styles.info}>
          <h4>Hospital campo limpo</h4>
          <p>
            Rua Ametista Carvalho, número: 3000 - São Paulo, Taboão da Serra
          </p>
        </div>

        <h4>Especialidades</h4>
        <div className={styles.list}>
          
            <div className={styles.specialities}>
          <ul>

            <li> Endocrinologista </li>
            <li> Pediatria </li>
            <li> Clinico Geral </li>
            <li> Ginecologia </li>
            <li> Oftalmologista </li>
          </ul>

          <ul>

            <li> Endocrinologista </li>
            <li> Pediatria </li>
            <li> Clinico Geral </li>
            <li> Ginecologia </li>
            <li> Oftalmologista </li>

          </ul>
        </div>
        </div>

        <div className={styles.info}>
            <p>Para entrar em contato com a intituição,
                 clique em ‘Entrar em contato’ 
                 que você será direcionado para
                 o Whatsapp do local.</p>
        </div>

        <button type="submit">Nos envie uma mensagem</button>
      </form>
    </div>
  );
}
