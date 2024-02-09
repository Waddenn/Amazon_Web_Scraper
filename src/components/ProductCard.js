import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ProductCard.module.css";
import axios from "axios";
import Cookies from "js-cookie";
const ProductCard = ({ product }) => {
  const handleWhislist = async () => {
    const loginCookie = Cookies.get("login");
    const user = loginCookie ? loginCookie.user : null;
    if (user) {
      await axios.post("/api/addWhishlist", {
        user: user,
        product: product.title,
      });
    }
  };
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
        <div className={styles.ratingWrapper}>
          <span className={styles.rating}>{product.rating}</span>
          <span className={styles.votes}>({product.votes} votes)</span>
        </div>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>{product.price}</p>
      </Link>
      <button onClick={handleWhislist}>Add to whishlist</button>
    </div>
  );
};
export default ProductCard;
