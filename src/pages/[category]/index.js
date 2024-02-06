// pages/index.js
import React from "react";
import ProductCard from "../../components/ProductCard";
import styles from "../../styles/Home.module.css";
import axios from "axios";

export const getServerSideProps = async ({ params: { category } }) => {
  const list = await axios.get(`/api/${category}`);
  return { props: { list } };
};
const Home = ({ list }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Featured Products</h1>
      <div className={styles.productGrid}>
        {list.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
