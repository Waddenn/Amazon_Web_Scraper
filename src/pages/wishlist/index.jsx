import React from "react"
import ProductCard from "../../components/ProductCards"
import styles from "../../styles/Home.module.css"
import getProductList from "@/db/getProductListForWishList"
import { parseCookies } from "nookies"

export const getServerSideProps = async (context) => {
  const cookies = parseCookies(context)
  const username = cookies.username

  if (!username) {
    return { props: { list: [] } }
  }

  const { minPrice, maxPrice } = context.query
  const list = await getProductList(username, minPrice, maxPrice)

  return { props: { list } }
}
const Home = ({ list }) => (
  <div className={styles.container1}>
    <h1 className={styles.title}>Whishlist</h1>
    <div className={styles.productGrid}>
      {list.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  </div>
)

export default Home
