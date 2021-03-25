import styles from '../styles/Components/otherLoginOptions.module.css';

export default function OtherLoginOptions() {

    return (
        <div className={styles.container}>

            <hr/>
            {/* <p className={styles.legend}>Outras Opções de Login</p> */}

            <a href='#'>
                <div className={styles.googleLogin}>
                    <img src='/img/google.png' />
                    Conecte-se com o Google
                </div>
            </a>

            <a href='#'>
                <div className={styles.facebookLogin}>
                    <img src='/img/facebook.png' />
                    Conecte-se com o Facebook
                </div>
            </a>

        </div >
    )
}