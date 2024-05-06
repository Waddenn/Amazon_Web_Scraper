import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import styles from "@/styles/ProductCard.module.css"
import ProductImage from "./ProductImage"
import ProductInfo from "./ProductInfo"
import WishlistIcon from "./WishlistIcon"
import { checkWishlist } from "@/utils/wishlistFonctions"

const ProductCardWishlist = ({ product: productCard, handleDelete }) => {
  const [isInWishlist, setIsInWishlist] = useState(false)
  const [_, setUsername] = useState(null)

  useEffect(() => {
    const user = Cookies.get("username")

    if (user) {
      setUsername(user)
      checkWishlist(user, productCard._id).then(setIsInWishlist)
    }
  }, [productCard._id])

  return (
    <div className={styles.card}>
      <ProductImage
        imageUrl={productCard.imageUrl}
        title={productCard.title}
        url={productCard.url}
      />
      <ProductInfo product={productCard} />
      <WishlistIcon
        isInWishlist={isInWishlist}
        toggleWishlist={handleDelete(productCard, setIsInWishlist)}
      />
    </div>
  )
}

export default ProductCardWishlist
