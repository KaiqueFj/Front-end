import { useCookies } from 'react-cookie';
import NotLogged from '../Components/NotLogged/notLogged';
import animate from '../styles/animation/animation.module.css';
import styles from '../styles/pages/index.module.scss';
import { initialProfile, profileHover } from '../utils/indexMenu';
import { parseCookies } from '../utils/parseCookies';
import Link from 'next/Link'

export default function Home(props) {
  const [cookie, setCookie] = useCookies(["token"])

  function logout() {
    setCookie("token", "");
    document.location.reload(true);
  }

  return (
    <>
      {props.isLogged ? (
        <div className='container'>
          <div className='containerBackground'>

            <div className={`${styles.header}`} id="header" onMouseLeave={initialProfile}>
              <div id="textProfile" className={styles.textProfile}>
                <p>Bem-Vindo(a)</p>
                <h3>{props.username}</h3>
              </div>

              <div id="profile" onMouseOver={profileHover}>
                <img src='/img/teste.jpg' />
              </div>

              <div className={styles.headerMenu} id="headerMenu">
                <Link href="#">
                  <h3>Configurações</h3>
                </Link>
                <hr></hr>

                <Link href="/updateInformations">
                  <h3>Editar Informações</h3>
                </Link>
                <hr></hr>

                <button onClick={logout}>
                  <img src="/img/icons/sair.png" />
                  Sair
                </button>
              </div>
            </div>

            <div className={`${styles.menuContainer}`}>

              <div className={`${animate.up} ${styles.menuItem}`}>
                <a href="/Emergency">
                  <div>
                    <img src='img/icons/emergency.png' />
                  Emergência
                </div>
                </a>
              </div>

              <div className={`${animate.up} ${styles.menuItem}`}>
                <a href="/Medicines">
                  <div>
                    <img src='img/icons/medicine.png' />
                  Remédios
                </div>
                </a>
              </div>

              <div className={`${animate.up} ${styles.menuItem}`}>
                <a href="Appointment">
                  <div>
                    <img src='img/icons/consultas.png' />
                  Consultas
                </div>
                </a>
              </div>

              <div className={`${animate.upSlow} ${styles.menuItem}`}>
                <a href="Recipes">
                  <div>
                    <img src='img/icons/recipe.png' />
                  Receitas
                </div>
                </a>
              </div>

              <div className={`${animate.upSlow} ${styles.menuItem}`}>
                <a href="FirstAid">
                  <div>
                    <img src='img/icons/firstAid.png' />
                  Socorros
                </div>
                </a>
              </div>

              <div className={`${animate.upSlow} ${styles.menuItem}`}>
                <a href="Help">
                  <div>
                    <img src='img/icons/help.png' />
                  Ajuda
                </div>
                </a>
              </div>

            </div>
          </div>
        </div>

      ) : (
        <NotLogged />
      )}
    </>
  )
}

export async function getServerSideProps({ req }) {

  //get token on cookies
  const { token } = parseCookies(req);

  // API connection
  const response = await fetch('http://localhost:3333/users/home', {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });

  if (response.status === 200) {
    const { username } = await response.json();

    return {
      props: {
        isLogged: true,
        username: username.charAt(0).toUpperCase() + username.slice(1),
      }
    }

  } else
    return {
      props: {
        isLogged: false,
      }
    }
  }