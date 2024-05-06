import { FaRegBookmark, FaBookmark } from "react-icons/fa"
import styles from "@/styles/ProductCard.module.css" // Assurez-vous que le chemin est correct

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
