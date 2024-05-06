import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import styles from "@/styles/ProductCard.module.css"
import ProductImage from "./ProductImage"
import ProductInfo from "./ProductInfo"
import WishlistIcon from "./WishlistIcon"

const checkWishlist = async (user, productID) => {
  const response = await fetch(
    `http://localhost:3000/api/wishlist?username=${user}`,
  )
  const wishlist = await response.json()
  return wishlist.some((item) => item._id === productID)
}

const toggleWishlist = async (username, product) => {
  const response = await fetch(
    `http://localhost:3000/api/wishlist?username=${username}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product }),
    },
  )
  return response.json()
}

const ProductCard = ({ product }) => {
  const [isInWishlist, setIsInWishlist] = useState(false)
  const [username, setUsername] = useState(null)

  useEffect(() => {
    const user = Cookies.get("username")
    if (user) {
      setUsername(user)
      checkWishlist(user, product._id).then(setIsInWishlist)
    }
  }, [product._id])

  const handleToggleWishlist = async () => {
    if (!username) return
    setIsInWishlist((prevState) => !prevState)
    const result = await toggleWishlist(username, product)
    if (result.success) {
      setIsInWishlist((prevState) => !prevState)
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.rank}>{product.rank}</div>
      <ProductImage
        imageUrl={product.imageUrl}
        title={product.title}
        url={product.url}
      />
      <ProductInfo product={product} />
      <WishlistIcon
        isInWishlist={isInWishlist}
        toggleWishlist={handleToggleWishlist}
      />
    </div>
  )
}

export default ProductCard
