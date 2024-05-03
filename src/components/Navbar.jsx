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
  const [priceType, setPriceType] = useState(router.query.cpf || "amazon")
  const isCategoryPage = router.pathname.includes("/[category]")
  const isProductPage = router.pathname.includes("/product")

  useEffect(() => {
    const usernameFromCookie = Cookies.get("username")
    if (usernameFromCookie) {
      setUsername(usernameFromCookie)
    }
  }, [])

  useEffect(() => {
    if (isProductPage) {
      router.push(
        {
          pathname: router.pathname,
          query: { ...router.query, tp: period, cpf: priceType },
        },
        undefined,
        { shallow: true },
      )
    }
  }, [period, priceType, isProductPage])

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
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            className={styles.filterInput}
            type="number"
            placeholder="Max Price"
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
            <option value="all">All time</option>
            <option value="1y">Last year</option>
            <option value="6m">Last 6 months</option>
            <option value="3m">Last 3 months</option>
            <option value="1m">Last month</option>
          </select>
          <select
            className={styles.filterSelect}
            value={priceType}
            onChange={(e) => setPriceType(e.target.value)}
          >
            <option value="amazon">Amazon</option>
            <option value="new-used">New & Used</option>
            <option value="used">Used</option>
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
            Log out
          </button>
        </div>
      ) : (
        <div className={styles.loginSection}>
          <Link href="/login" className={styles.loginLink}>
            Log in
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
