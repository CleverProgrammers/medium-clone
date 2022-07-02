import '../styles/globals.css'
import '../components/editor/editorStyles.css'
import { MediumProvider } from '../context/MediumContext'

function MyApp({ Component, pageProps }) {
  return (
    <MediumProvider>
      <Component {...pageProps} />
    </MediumProvider>
  )
}

export default MyApp
