import styles from './styles.module.scss';

export default function OtherLoginOptions() {

    return (
        <div className={styles.container}>

            <hr/>
            {/* <p className={styles.legend}>Outras Opções de Login</p> */}

            <a href='#'>
                <div className={styles.googleLogin}>
                    <img src='img/icons/google.png' />
                    Conecte-se com o Google
                </div>
            </a>

            <a href='#'>
                <div className={styles.facebookLogin}>
                    <img src='img/icons/facebook.png' />
                    Conecte-se com o Facebook
                </div>
            </a>

        </div >
    )
}