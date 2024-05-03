import Image from "next/image"
import Link from "next/link"
import styles from "@/styles/ProductCard.module.css"
import React from "react"

const ProductCard = ({ product, onDelete }) => (
  <div className={styles.card}>
    <Link href={product.url} passHref>
      <div className={styles.imageWrapper}>
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={600}
          height={400}
        />
      </div>
    </Link>
    <div className={styles.ratingWrapper}>
      <span className={styles.rating}>{product.rating}</span>
      <span className={styles.votes}>({product.votes} votes)</span>
    </div>
    <h3 className={styles.title}>{product.title}</h3>
    <p className={styles.price}>{product.price}</p>
    <button onClick={() => onDelete(product)} className={styles.deleteButton}>
      Supprimer
    </button>
  </div>
)

export default ProductCard
