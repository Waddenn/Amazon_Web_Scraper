import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Cookies from "js-cookie"
import styles from "@/styles/ProductCard.module.css"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import "tippy.js/themes/light-border.css"

const ProductCard = ({ product }) => {
  const [isInWishlist, setIsInWishlist] = useState(false)
  const [username, setUsername] = useState(null)

  useEffect(() => {
    const user = Cookies.get("username")
    setUsername(user)
    if (user) {
      checkWishlist(user)
    }
  }, [])

  const checkWishlist = async (user) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/wishlist?username=${user}`,
      )
      const wishlist = await response.json()
      const productInWishlist = wishlist.some(
        (item) => item._id === product._id,
      )
      setIsInWishlist(productInWishlist)
    } catch (error) {
      console.error("Erreur lors de la vérification de la wishlist:", error)
    }
  }

  const addToWishlist = async () => {
    if (!username) {
      alert("Vous devez être connecté pour ajouter des articles à la wishlist.")
      return
    }

    const params = new URLSearchParams({ username })

    try {
      const response = await fetch(
        `http://localhost:3000/api/wishlist?${params.toString()}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ product }),
        },
      )
      const data = await response.json()

      if (response.ok) {
        setIsInWishlist(true)
      } else if (response.status === 409) {
        setIsInWishlist(true)
        alert("Produit déjà dans la wishlist")
      } else {
        alert(data.message || "Une erreur est survenue")
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du produit à la wishlist:", error)
      alert("Une erreur est survenue lors de l'ajout du produit à la wishlist.")
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.rank}>{product.rank}</div>
      <Link href={product.url} passHref>
        <div className={styles.imageWrapper}>
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={600}
            height={400}
          />
        </div>
        <div className={styles.ratingWrapper}>
          <span className={styles.rating}>{product.rating}</span>
          <span className={styles.votes}>({product.votes} votes)</span>
        </div>
        <h3 className={styles.title}>{product.title}</h3>
      </Link>
      <Link href={`/product/${product.asin}`} passHref>
        <Tippy content="Afficher l'historique des prix" theme="light-border">
          <p className={`${styles.price} ${styles.clickable}`}>
            {product.price}
          </p>
        </Tippy>
      </Link>
      {username && (
        <button
          onClick={addToWishlist}
          className={styles.wishlistButton}
          disabled={isInWishlist}
        >
          {isInWishlist ? "Dans la Wishlist" : "Ajouter à la Wishlist"}
        </button>
      )}
    </div>
  )
}

export default ProductCard
