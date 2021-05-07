import moment from 'moment';
import { useRouter } from 'next/router';
import { useApp } from '../../Contexts/AppContexts';
import { parseCookies } from '../../utils/parseCookies';
import styles from './styles.module.scss';
import animate from '../../styles/animation/animation.module.css';

export default function Status() {

    // Variables
    const router = useRouter();
    const slugData = router.query.slug;
    const currentDate = moment().format("YYYY-MM-DD");

    // true -> play audio | false -> stop audio
    function setPlayingState(state: boolean) {
        return;
    }
    setPlayingState(true);

    // Handle Date
    function splitString(stringToSplit, separator) {
        var arrayOfStrings = stringToSplit.split(separator);
        return arrayOfStrings
    }
    const data = splitString(slugData, "&")

    // Send Status to API
    async function submit(props, req) {

        // Get token in cookies
        const { token } = parseCookies(req)

        // API connection
        const response = await fetch('http://localhost:3333/status', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                medicineId: data[0],
                status: props,
                date: currentDate,
            })
        });

        // Stop alarm and go to Medicines page
        setPlayingState(false);
        router.push('/Medicines')
    }

    return (

        <div className='container'>
            <div className={`${styles.container} ${animate.up}`}>
                <div className={styles.titlePage}>
                    <div>
                        <img src="/img/icons/medicine.png" />
                        <p> Hora de tomar <br />remédio!</p>
                    </div>
                </div>

                <div className={`${styles.medicineContainer} ${animate.upSlow}`}>
                    <p>{data[2]}</p>
                    <hr></hr>
                    <p>{data[1]}</p>
                </div>

                <div className={`${styles.buttons} ${animate.upMoreSlow}`}>
                    <button onClick={() => submit(1)}>
                        Não tomei
                    </button>
                    <button onClick={() => submit(0)}>
                        Tomei
                    </button>
                </div>
            </div>

            <audio id="timer-beep"
                autoPlay
                onPlay={() => setPlayingState(true)}
                onPause={() => setPlayingState(false)}
                src="/alarm.mp3"
            />
        </div>

    )
}