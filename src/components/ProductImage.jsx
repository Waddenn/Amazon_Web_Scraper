import Image from "next/image"
import Link from "next/link"
import styles from "@/styles/ProductCard.module.css"

const ProductImage = ({ imageUrl, title, url }) => (
  <Link href={url} passHref>
    <div className={styles.imageWrapper}>
      <Image src={imageUrl} alt={title} width={600} height={400} />
    </div>
  </Link>
)

export default ProductImage
