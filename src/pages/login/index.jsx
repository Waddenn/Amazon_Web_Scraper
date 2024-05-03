import { useState } from "react"
import users from "../../data/users.json"
import styles from "../../styles/login.module.css"
import Cookies from "js-cookie"

// eslint-disable-next-line max-lines-per-function
const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const handleLogin = (e) => {
    e.preventDefault()

    const user = users.find(
      (u) => u.username === username && u.password === password,
    )

    if (user) {
      Cookies.set("username", username, {
        expires: 1,
        path: "/",
      })
      window.location.href = "/"
    } else {
      setError("Identifiants incorrects")
    }
  }

  return (
    <div className={styles.pageBackground}>
      <div className={styles.loginContainer}>
        <form onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.formLabel}>
              Nom d&apos;utilisateur
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.formInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.formLabel}>
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.formInput}
            />
          </div>
          {error && <p className={styles.errorMessage}>{error}</p>}
          <div className={styles.formGroup}>
            <button type="submit" className={styles.submitButton}>
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
