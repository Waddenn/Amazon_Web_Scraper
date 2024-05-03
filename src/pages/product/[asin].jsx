import { useRouter } from "next/router"
import styles from "@/styles/ProductDetail.module.css"

const ProductDetail = () => {
  const router = useRouter()
  const { asin, tp = "1y", cpf = "amazon" } = router.query

  const imageUrl = `https://charts.camelcamelcamel.com/fr/${asin}/amazon-new.png?force=1&zero=0&w=1166&h=601&desired=false&legend=1&ilt=1&tp=${tp}&fo=0&lang=en&cpf=${cpf}`

  return (
    <div className={styles.productDetail}>
      <img
        className={styles.chartImage}
        src={imageUrl}
        alt="Price History Chart"
      />
    </div>
  )
}

export default ProductDetail
