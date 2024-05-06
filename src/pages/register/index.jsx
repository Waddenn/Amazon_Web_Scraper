import { useState } from "react"
import styles from "@/styles/login.module.css"
import Cookies from "js-cookie"

const RegisterPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleRegister = async (e) => {
    e.preventDefault()

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })

    if (response.ok) {
      const data = await response.json()
      Cookies.set("username", username, { expires: 1, path: "/" })
      window.location.href = "/"
    } else {
      setError("Impossible de créer le compte")
    }
  }

  return (
    <div className={styles.pageBackground}>
      <div className={styles.loginContainer}>
        <form onSubmit={handleRegister}>
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
              Créer un compte
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
