import { FaRegBookmark, FaBookmark } from "react-icons/fa"
import styles from "@/styles/ProductCard.module.css"

const WishlistIcon = ({ isInWishlist, toggleWishlist }) => (
  <div className={styles.bookmarkIcon} onClick={toggleWishlist}>
    {isInWishlist ? (
      <FaBookmark size={24} color="#e44d26" />
    ) : (
      <FaRegBookmark size={24} />
    )}
  </div>
)

export default WishlistIcon
