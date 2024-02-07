import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.rank}>{product.rank}</div>
      <Link href={product.url} passHref>
        <div className={styles.imageWrapper}>
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={600}
            height={400}
          />
        </div>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>{product.price}</p>
      </Link>
    </div>
  );
};
export default ProductCard;