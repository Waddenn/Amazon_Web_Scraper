import CategoryButton from "@/components/CategoryButton"
import styles from "@/styles/Home.module.css"
import { categoryNames } from "@/utils/constants"
import { useEffect } from "react"

const Home = () => {
  useEffect(() => {
    fetch("/api/check-file")
      .then((response) => response.json())
      .then((data) => console.log(data.message))
      .catch((error) => console.error("Error:", error))
  }, [])

  return (
    <div className={styles.categoriesContainer}>
      <div className={styles.productGrid1}>
        {Object.entries(categoryNames).map(([path, category]) => (
          <CategoryButton
            key={category}
            categoryName={category}
            path={path}
            className={styles.categoryButton}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
