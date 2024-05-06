import React, { useState } from "react"
import ProductCardWishlist from "@/components/ProductCardWishlist"
import styles from "@/styles/Home.module.css"
import { parseCookies } from "nookies"
import axios from "axios"

export const getServerSideProps = async (context) => {
  const cookies = parseCookies(context)
  const { username } = cookies

  if (!username) {
    return { props: { initialList: [] } }
  }

  const params = new URLSearchParams({ username })
  const { data: list } = await axios(
    `http://localhost:3000/api/wishlist?${params.toString()}`,
  )

  return { props: { initialList: list } }
}

const Home = ({ initialList }) => {
  const [list] = useState(initialList)

  return (
    <div className={styles.container1}>
      <h1 className={styles.title}>Wishlist</h1>
      <div className={styles.productGrid}>
        {list.map((product, index) => (
          <ProductCardWishlist key={index} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home
