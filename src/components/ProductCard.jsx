import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import styles from "@/styles/ProductCard.module.css"
import ProductImage from "./ProductImage"
import ProductInfo from "./ProductInfo"
import WishlistIcon from "./WishlistIcon"
import { checkWishlist, handleToggleWishlist } from "@/utils/wishlistFonctions"

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
        toggleWishlist={handleToggleWishlist(
          username,
          product,
          setIsInWishlist,
        )}
      />
    </div>
  )
}

export default ProductCard
