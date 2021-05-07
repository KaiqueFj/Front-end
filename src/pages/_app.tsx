import { UserProvider } from '../Contexts/AppContexts'
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp