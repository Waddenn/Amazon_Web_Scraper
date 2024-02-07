// pages/index.js
import React from "react";
import ProductCard from "../../components/ProductCard";
import styles from "../../styles/Home.module.css";
import getProductList from "@/db/getProductList";

export const getServerSideProps = async (context) => {
  const { category } = context.query;
  const list = await getProductList(category);
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
