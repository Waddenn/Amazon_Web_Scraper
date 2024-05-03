import Link from "next/link"
import styles from "@/styles/Navbar.module.css"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

// eslint-disable-next-line max-lines-per-function
const Navbar = () => {
  const router = useRouter()
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [username, setUsername] = useState("")
  const isCategoryPage = router.pathname.includes("/[category]")

  useEffect(() => {
    const usernameFromCookie = Cookies.get("username")

    if (usernameFromCookie) {
      setUsername(usernameFromCookie)
    }
  }, [])

  const handleLogout = () => {
    Cookies.remove("username")
    setUsername("")
    router.push("/login")
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push({
      pathname: router.pathname,
      query: { ...router.query, minPrice, maxPrice },
    })
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Amazon Web Scraper</Link>
      </div>
      {isCategoryPage && (
        <form onSubmit={handleSubmit} className={styles.filterForm}>
          <input
            className={styles.filterInput}
            type="number"
            placeholder="Prix min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            className={styles.filterInput}
            type="number"
            placeholder="Prix max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <button className={styles.filterButton} type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      )}
      {username ? (
        <div className={styles.userSection}>
          <span className={styles.username}>{username}</span>
          <Link href="/wishlist" className={styles.wishlistLink}>
            Wishlist
          </Link>
          <button onClick={handleLogout} className={styles.logoutButton}>
            Déconnexion
          </button>
        </div>
      ) : (
        <div className={styles.loginSection}>
          <Link href="/login" className={styles.loginLink}>
            Se connecter
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
