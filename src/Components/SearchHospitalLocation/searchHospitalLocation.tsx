import styles from './styles.module.scss';

export default function SearchHospitalLocation() {

    return (
        <div className={styles.container}>
            <h3>Selecione o local</h3>
            <p>
                Digite qual especialidade deseja e selecione 
                um dos locais que apareceram no mapa
            </p>

            <div>
                <input type='text' placeholder='Qual especialidade você deseja?'/>
                <img src='/img/icons/search.png'/>
            </div>
        </div>

    )
}