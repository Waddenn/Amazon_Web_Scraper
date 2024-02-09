import Layout from "@/components/Layout"
import ProductCard from "@/components/ProductCard"
import { Router } from "next/router"

const WishlistPage = () => {
    const routeur = Router
    
    return (
        <Layout>
            <div className={styles.container}>
        <h1 className={styles.title}>
          Votre Wishlist
        </h1>
        <div className={styles.productGrid}>
          {list.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      </Layout>
  )  
}
export default WishlistPage