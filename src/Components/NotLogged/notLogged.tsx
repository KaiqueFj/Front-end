import styles from './styles.module.scss';
import animate from '../../styles/animation/animation.module.css';
import PlayVideo from '../playVideo/playVideo';

export default function NotLogged() {

    return (
        <div className="container">
            <div className={styles.notLoggedContainer}>
                <div className={`${styles.loggedContainer} ${animate.upSlow}`}>
                    <img className={styles.accountLogo} src="img/icons/userPurple2.png" />

                    <div className={styles.buttonsContainer}>
                        <a href='/Register'>Registrar-se</a>
                        <a href='/Login'>
                            <div>
                                <img src="img/icons/loginPurple.png" />
                        Login
                        </div>
                        </a>
                    </div>
                </div>

                <div className={`${styles.aboutUs} ${animate.upMoreSlow}`}>
                    <div className={styles.aboutUsImageContainer}>
                        <img src='img/teste.jpg' />
                    </div>
                    <PlayVideo />
                </div>
            </div>
        </div>
    )
}