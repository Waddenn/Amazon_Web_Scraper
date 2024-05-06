import Link from "next/link"
import styles from "@/styles/Navbar.module.css"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  const router = useRouter()
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [username, setUsername] = useState("")
  const [period, setPeriod] = useState(router.query.tp || "1y")
  const isCategoryPage = router.pathname.includes("/[category]")
  const isProductPage = router.pathname.includes("/product")

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  useEffect(() => {
    const usernameFromCookie = Cookies.get("username")
    if (usernameFromCookie) {
      setUsername(capitalizeFirstLetter(usernameFromCookie))
    }
  }, [])

  useEffect(() => {
    if (isProductPage) {
      router.push(
        {
          pathname: router.pathname,
          query: { ...router.query, tp: period },
        },
        undefined,
        { shallow: true },
      )
    }
  }, [period, isProductPage, router])

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
            placeholder="Prix Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            className={styles.filterInput}
            type="number"
            placeholder="Prix Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <button className={styles.filterButton} type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      )}
      {isProductPage && (
        <form className={styles.productFilters}>
          <select
            className={styles.filterSelect}
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <option value="all">Depuis toujours</option>
            <option value="1y">L'année dernière</option>
            <option value="6m">Les 6 derniers mois</option>
            <option value="3m">Les 3 derniers mois</option>
            <option value="1m">Le mois dernier</option>
          </select>
        </form>
      )}
      {username ? (
        <div className={styles.userSection}>
          <span className={styles.username}>{username}</span>
          <Link href="/wishlist" className={styles.wishlistLink}>
            Wishlist
          </Link>
          <button onClick={handleLogout} className={styles.logoutButton}>
            Se déconnecter
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
