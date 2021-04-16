import styles from '../styles/Components/appointmentVideo.module.css';
import animate from '../styles/animation/animation.module.css';
import PlayVideo from './playVideo';


export default function AppointmentVideo() {

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <PlayVideo />
            </div>
        </div>

    )
}