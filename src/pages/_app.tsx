import { UserProvider } from '../Contexts/UserContext'
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp