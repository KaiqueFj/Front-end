import styles from './styles.module.scss';

export default function Header() {

    return (
        <div className={`${styles.container}`}>
                <a href='/'>
                    <img src='/img/icons/back.png'/>
                </a>
                <div>
                    <img src='/img/teste.jpg' />
                </div>
        </div>
    )
}