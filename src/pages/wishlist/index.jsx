import React, { useState } from "react"
import ProductCardWishlist from "@/components/ProductCardWishlist"
import styles from "@/styles/Home.module.css"
import { parseCookies } from "nookies"
import axios from "axios"
import { toggleWishlist } from "@/utils/wishlistFonctions"

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

  return { props: { initialList: list, username } }
}
const Home = ({ initialList, username }) => {
  const [products, setProducts] = useState(initialList)
  const handleDeleteWishlist = (productCard) => async () => {
    await toggleWishlist(username, productCard)
    setProducts([...products].filter((product) => product !== productCard))
  }

  return (
    <div className={styles.container1}>
      <h1 className={styles.title}>Wishlist</h1>
      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <ProductCardWishlist
            key={index}
            product={product}
            handleDelete={handleDeleteWishlist(product)}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
