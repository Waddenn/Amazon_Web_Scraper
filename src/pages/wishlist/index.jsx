import React, { useState } from "react"
import ProductCard from "@/components/ProductCards"
import styles from "@/styles/Home.module.css"
import { parseCookies } from "nookies"
import { productListFilter } from "@/utils/fonctions"
import axios from "axios"

export const getServerSideProps = async (context) => {
  const cookies = parseCookies(context)
  const { username } = cookies

  if (!username) {
    return { props: { initialList: [] } }
  }

  const { minPrice, maxPrice } = context.query
  const params = new URLSearchParams({ username })
  const { data: list } = await axios(
    `http://localhost:3000/api/wishlist?${params.toString()}`,
  )
  const listFilted = productListFilter(list, minPrice, maxPrice)

  return { props: { initialList: listFilted } }
}
const Home = ({ initialList }) => {
  const [list, setList] = useState(initialList)
  const handleDelete = async (productId) => {
    const { username } = parseCookies()
    const response = await fetch(`/api/wishlist/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
      }),
    })

    if (response.ok) {
      setList(list.filter((product) => product._id !== productId))
    } else {
      const data = await response.json()
      console.error(
        "Erreur lors de la suppression du produit:",
        data.message || "Une erreur est survenue",
      )
    }
  }

  return (
    <div className={styles.container1}>
      <h1 className={styles.title}>Wishlist</h1>
      <div className={styles.productGrid}>
        {list.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onDelete={() => handleDelete(product._id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
