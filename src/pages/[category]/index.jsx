import React from "react"
import ProductCard from "@/components/ProductCard"
import styles from "@/styles/Home.module.css"
import getProductList from "@/db/getProductList"
import { categoryNames } from "@/utils/constants"

export const getServerSideProps = async (context) => {
  const { category, minPrice, maxPrice } = context.query
  const list = await getProductList(category, minPrice, maxPrice)
  const categoryName = categoryNames[category] || category

  return { props: { list, categoryName } }
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
