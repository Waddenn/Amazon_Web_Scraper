import CategoryButton from "../components/CategoryButton";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import { existsSync } from "fs";
import main from "@/db.mjs";
if (!existsSync("./top_products_by_category.json")) {
  main();
}
export default function Home() {
  const categoryPaths = {
    "Sports et Loisirs": "sports",
    Mode: "fashion",
    "Luminaires et Éclairage": "lighting",
    Logiciels: "software",
    Livres: "books",
    "Jeux vidéo": "videogames",
    "Jeux et Jouets": "toys",
    Jardin: "lawn-garden",
    "Instruments de musique et Sono": "musical-instruments",
    Informatique: "computers",
    "Hygiène et Santé": "hpc",
    "High-Tech": "electronics",
    "Gros électroménager": "appliances",
    "Fournitures de bureau": "officeproduct",
    Epicerie: "grocery",
    "DVD et Blu-ray": "dvd",
    "Cuisine et Maison": "kitchen",
    "Commerce, Industrie et Science": "industrial",
    "Engagement en faveur du climat": "climate-pledge",
    "CD et Vinyles": "music",
    Bricolage: "hi",
    Kindle: "digital-text",
    "Cartes cadeaux": "gift-cards",
    "Beauté et Parfum": "beauty",
    "Auto et Moto": "automotive",
    "Applis et Jeux": "mobile-apps",
    "Appareils Amazon et Accessoires": "amazon-devices",
    Animalerie: "pet-supplies",
  };

  return (
    <Layout>
      <div className={styles.categoriesContainer}>
        <div className={styles.productGrid1}>
          {Object.entries(categoryPaths).map(([category, path]) => (
            <CategoryButton
              key={category}
              categoryName={category}
              path={path}
              className={styles.categoryButton}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
