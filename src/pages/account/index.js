import { useState } from "react"
import styles from "@/styles/login.module.css"
import Cookies from "js-cookie"

const AccountSettingsPage = () => {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const handleChangePassword = async (e) => {
    e.preventDefault()

    // Vérifier si les mots de passe correspondent
    if (newPassword !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas")
      return
    }

    const response = await fetch("/api/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ oldPassword, newPassword }),
    })

    if (response.ok) {
      setSuccessMessage("Mot de passe modifié avec succès")
    } else {
      setError("Impossible de modifier le mot de passe")
    }
  }

  const handleDeleteAccount = async () => {
    const response = await fetch("/api/delete-account", {
      method: "POST",
    })

    if (response.ok) {
      Cookies.remove("username")
      window.location.href = "/"
    } else {
      setError("Impossible de supprimer le compte")
    }
  }

  return (
    <div className={styles.pageBackground}>
      <div className={styles.loginContainer}>
        <form onSubmit={handleChangePassword}>
          <div className={styles.formGroup}>
            <label htmlFor="oldPassword" className={styles.formLabel}>
              Ancien mot de passe
            </label>
            <input
              id="oldPassword"
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className={styles.formInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="newPassword" className={styles.formLabel}>
              Nouveau mot de passe
            </label>
            <input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className={styles.formInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword" className={styles.formLabel}>
              Confirmer le nouveau mot de passe
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={styles.formInput}
            />
          </div>
          {error && <p className={styles.errorMessage}>{error}</p>}
          {successMessage && (
            <p className={styles.successMessage}>{successMessage}</p>
          )}
          <div className={styles.formGroup}>
            <button type="submit" className={styles.submitButton}>
              Modifier le mot de passe
            </button>
          </div>
        </form>
        <div className={styles.formGroup}>
          <button onClick={handleDeleteAccount} className={styles.deleteButton}>
            Supprimer le compte
          </button>
        </div>
      </div>
    </div>
  )
}

export default AccountSettingsPage
