import Navbar from "@/components/Navbar"
import "@/styles/globals.css"
import styles from "@/styles/Navbar.module.css"

const App = ({ Component, pageProps }) => (
  <>
    <Navbar />
    <main className={styles.main}>
      <Component {...pageProps} />
    </main>
  </>
)
export default App
