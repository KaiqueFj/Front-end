import { useState } from 'react';
import Layout from '../Layout/Layout';

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

  teste()

  return (
    <Layout>

      {areLogged ? (
        <div>
          <h1>Welcome to page {username}</h1>
          <h1>Your Email is: {email}</h1>
          <h1>id: {id}</h1>
        </div>
      ) : (
        <div>
          <h1>Faça login</h1>
          <a href="/Register">Registrar-se</a>
          <a href="/Login">Login</a>
        </div>
      )}


    </Layout>
  )
}
