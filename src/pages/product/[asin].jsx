import { useRouter } from "next/router"
import styles from "@/styles/ProductDetail.module.css"

const ProductDetail = () => {
  const router = useRouter()
  const { asin } = router.query

  const imageUrl = `https://charts.camelcamelcamel.com/fr/${asin}/${asin.startsWith("XYZ") ? "new.png" : "amazon.png"}?force=1&zero=0&w=1166&h=601&desired=false&legend=1&ilt=1&tp=all&fo=0&lang=en`

  return (
    <div className={styles.productDetail}>
      <img
        className={styles.chartImage}
        src={imageUrl}
        alt="Historique des prix"
      />
    </div>
  )
}

export default ProductDetail
