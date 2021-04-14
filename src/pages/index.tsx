import { useState } from 'react';
import header from '../styles/Components/header.module.css';
import NotLogged from '../Components/NotLogged';
import Layout from '../Layout/Layout';
import styles from '../styles/pages/index.module.css';
import animate from '../styles/animation/animation.module.css';


export default function Home() {

  // variables
  const [areLogged, setAreLogged] = useState(false);
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  async function teste() {

    try {

      // Get token in LocalStorage
      const token = localStorage.getItem('token')

      // API connection
      const indexLogged = await fetch('http://localhost:3333/users/home', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      // Get JSON information and save in variables line (7-9)
      const indexInformationJSON = await indexLogged.json();

      setId(indexInformationJSON.id);
      setUsername(indexInformationJSON.username);
      setEmail(indexInformationJSON.email);

      return setAreLogged(true);

    } catch {
      setAreLogged(false)
    }

  }

  function logout() {
    localStorage.clear()
    document.location.reload(true);
  }
console.log(id)
  teste()

  return (
    <Layout>
      {areLogged ? (
        <div className='containerBackground'>

          <div className={`${header.container}`}>
            <div>
              <img src='/img/teste.jpg' />
              <h3>Dona Lurdes</h3>
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
            <a href="/Consulta">
                <div>
                  <img src='img/icons/consultas.png' />
                  Consultas
                </div>
              </a>
            </div>

            <div className={`${animate.upSlow} ${styles.menuItem}`}>
              <a href="#">
                <div>
                  <img src='img/icons/recipe.png' />
                  Receitas
                </div>
              </a>
            </div>

            <div className={`${animate.upSlow} ${styles.menuItem}`}>
              <a href="#">
                <div>
                  <img src='img/icons/firstAid.png' />
                  Socorros
                </div>
              </a>
            </div>

            <div className={`${animate.upSlow} ${styles.menuItem}`}>
              <a href="#">
                <div>
                  <img src='img/icons/help.png' />
                  Ajuda
                </div>
              </a>
            </div>

          </div>
        </div>

      ) : (
        <NotLogged />
      )}


    </Layout>
  )
}
