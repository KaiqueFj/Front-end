import { AppContextProvider } from '../Contexts/AppContexts';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {

  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>

  )
}

export default MyApp