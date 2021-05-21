import styles from './styles.module.scss';
import animate from '../../styles/animation/animation.module.css';
import PlayVideo from '../playVideo/playVideo';
import { useApp } from '../../Contexts/AppContexts';
import Link from 'next/Link';

export default function NotLogged() {

    const { theme } = useApp();

    return (
        <div className="container">
            <div className={styles.notLoggedContainer}>
                <div className={`${styles.loggedContainer} ${animate.upSlow}`}>
                    <img className={styles.accountLogo} src="img/icons/userPurple3.png" />
                    <img className={styles.accountLogo} src={theme === 'light' ? "img/icons/userPurple4.png" : "img/icons/userPurple3.png"} />


                    <div className={styles.buttonsContainer}>
                        <Link href='/Register'><p>Registrar-se</p></Link>
                        <Link href='/Login'>
                            <div>
                                <img src="img/icons/loginPurple.png" />
                                <p>Login</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className={`${styles.aboutUs} ${animate.upMoreSlow}`}>
                    <div className={styles.aboutUsImageContainer}>
                        <img src='img/icons/logo.png' />
                        <p>
                            O preenchimento das seguintes informações são opcionais,
                            elas servem para agilizar o preenchimento dos formulários
                            de consulta e uma melhor usabilidade do site.
                        </p>
                        <img src='/img/backgrounds/purpleShadow.png' />
                    </div>
                    <PlayVideo />
                </div>
            </div>
        </div>
    )
}