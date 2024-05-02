import React, { useState } from "react";
import ProductCard from "../../components/ProductCards"; 
import styles from "../../styles/Home.module.css";
import getProductList from "@/db/getProductListForWishList";
import { parseCookies } from "nookies";

export const getServerSideProps = async (context) => {
  const cookies = parseCookies(context);
  const username = cookies.username;

  if (!username) {
    return { props: { initialList: [] } };
  }

  const { minPrice, maxPrice } = context.query;
  const list = await getProductList(username, minPrice, maxPrice);

  return { props: { initialList: list } };
};

const Home = ({ initialList }) => {
  const [list, setList] = useState(initialList); 

  const handleDelete = async (productId) => {
    const username = parseCookies().username;
    const response = await fetch('/api/removeFromWishlist', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId,
        username,
      }),
    });

    if (response.ok) {
      setList(list.filter(product => product._id !== productId));
    } else {
      const data = await response.json();
      console.error('Erreur lors de la suppression du produit:', data.message || 'Une erreur est survenue');
    }
  };

  return (
    <div className={styles.container1}>
      <h1 className={styles.title}>Wishlist</h1>
      <div className={styles.productGrid}>
        {list.map((product, index) => (
          <ProductCard key={index} product={product} onDelete={() => handleDelete(product._id)} />
        ))}
      </div>
    </div>
  );
};

export default Home;
