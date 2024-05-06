import React from "react"
import ProductCard from "@/components/ProductCard"
import styles from "@/styles/Home.module.css"
import { categoryNames } from "@/utils/constants"
import { productListFilter } from "@/utils/fonctions"
import axios from "axios"


export const getServerSideProps = async (context) => {
  const { category, minPrice, maxPrice } = context.query
  const {data:list} = await axios(`http://localhost:3000/api/categories/${category}`)
  const listFilted = productListFilter(list, minPrice, maxPrice)
  const categoryName = categoryNames[category] || category

  return { props: { list:listFilted, categoryName } }
}
const CategoryPage = ({ list, categoryName }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Les meilleures ventes en {categoryName}</h1>
    <div className={styles.productGrid}>
      {list.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  </div>
)

export default CategoryPage
