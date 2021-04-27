import styles from './styles.module.scss';
import PlayVideo from '../playVideo/playVideo';

export default function AppointmentVideo() {

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <PlayVideo />
            </div>
        </div>

    )
}