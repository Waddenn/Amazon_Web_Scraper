import { useRouter } from "next/router"
import styles from "@/styles/ProductDetail.module.css"

export const getServerSideProps = (context) => {
  const { asin } = context.query

  return { props: { asin } }
}
const ProductDetail = ({ asin }) => {
  const router = useRouter()
  const { tp = "1y" } = router.query
  const imageUrl = `https://charts.camelcamelcamel.com/fr/${asin}/amazon-new.png?force=1&zero=0&w=1166&h=601&desired=false&legend=1&ilt=1&tp=${tp}&fo=0&lang=en`

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
