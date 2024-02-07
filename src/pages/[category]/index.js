// pages/index.js
import React from "react";
import ProductCard from "../../components/ProductCard";
import styles from "../../styles/Home.module.css";
import getProductList from "@/db/getProductList";
import Layout from "../../components/Layout";

const categoryNames = {
  sports: "Sports et Loisirs",
  fashion: "Mode",
  lighting: "Luminaires et Éclairage",
  software: "Logiciels",
  books: "Livres",
  videogames: "Jeux vidéo",
  toys: "Jeux et Jouets",
  "lawn-garden": "Jardin",
  "musical-instruments": "Instruments de musique et Sono",
  computers: "Informatique",
  hpc: "Hygiène et Santé",
  electronics: "High-Tech",
  appliances: "Gros électroménager",
  officeproduct: "Fournitures de bureau",
  grocery: "Epicerie",
  dvd: "DVD et Blu-ray",
  kitchen: "Cuisine et Maison",
  industrial: "Commerce, Industrie et Science",
  "climate-pledge": "Engagement en faveur du climat",
  music: "CD et Vinyles",
  hi: "Bricolage",
  "digital-text": "Kindle",
  "gift-cards": "Cartes cadeaux",
  beauty: "Beauté et Parfum",
  automotive: "Auto et Moto",
  "mobile-apps": "Applis et Jeux",
  "amazon-devices": "Appareils Amazon et Accessoires",
  "pet-supplies": "Animalerie",
};

export const getServerSideProps = async (context) => {
  const { category } = context.query;
  const list = await getProductList(category);
  const categoryName = categoryNames[category] || category;

  return { props: { list, categoryName } };
};
const Home = ({ list, categoryName }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Les meilleures ventes en {categoryName}
        </h1>
        <div className={styles.productGrid}>
          {list.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
