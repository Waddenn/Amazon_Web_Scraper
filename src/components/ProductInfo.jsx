import Link from "next/link"
import Tippy from "@tippyjs/react"
import styles from "@/styles/ProductCard.module.css"
import "tippy.js/themes/light-border.css"

const ProductInfo = ({ product }) => (
  <>
    <div className={styles.ratingWrapper}>
      <span className={styles.rating}>{product.rating}</span>
      <span className={styles.votes}>({product.votes} votes)</span>
    </div>
    <h3 className={styles.title}>{product.title}</h3>
    <Link href={`/product/${product.asin}`} passHref>
      <Tippy
        content="Afficher l'historique des prix"
        theme="light-border"
        offset={[0, 20]}
      >
        <div className={`${styles.price}`}>
          {product.price ? product.price : "Pas de prix connue"}
        </div>
      </Tippy>
    </Link>
  </>
)

export default ProductInfo
