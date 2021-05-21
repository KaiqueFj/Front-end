import styles from './styles.module.scss';

export default function OtherLoginOptions() {

    return (
        <div className={styles.container}>

            <a href='#'>
                <div className={styles.googleLogin}>
                    <img src='img/icons/google.png' />
                </div>
            </a>

            <a href='#'>
                <div className={styles.facebookLogin}>
                    <img src='img/icons/facebook.png' />
                </div>
            </a>

        </div >
    )
}