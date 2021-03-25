import styles from '../styles/Components/bannerWelcome.module.css';

export default function BannerWelcome() {

    return (
        <div className={styles.bannerContainer}>
            <div>
                <h1>Bem-Vindo.</h1>
                <p>Lorem Ipsum é simplesmente <br></br>
                     uma simulação de texto da  <br></br>
                    indústria.</p>
            </div>

        </div>
    )
}