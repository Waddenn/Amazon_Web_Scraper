import CategoryButton from "../components/CategoryButton";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import { useEffect } from 'react';


export default function Home() {
  const categoryPaths = {
    "Sports et Loisirs": "sports",
    "Mode": "fashion",
    "Luminaires et Éclairage": "lighting",
    "Logiciels": "software",
    "Livres": "books",
    "Jeux vidéo": "videogames",
    "Jeux et Jouets": "toys",
    "Jardin": "lawn-garden",
    "Instruments de musique et Sono": "musical-instruments",
    "Informatique": "computers",
    "Hygiène et Santé": "hpc",
    "High-Tech": "electronics",
    "Gros électroménager": "appliances",
    "Fournitures de bureau": "officeproduct",
    "Epicerie": "grocery",
    "DVD et Blu-ray": "dvd",
    "Cuisine et Maison": "kitchen",
    "Commerce, Industrie et Science": "industrial",
    "Engagement en faveur du climat": "climate-pledge",
    "CD et Vinyles": "music",
    "Bricolage": "hi",
    "Kindle": "digital-text",
    "Cartes cadeaux": "gift-cards",
    "Beauté et Parfum": "beauty",
    "Auto et Moto": "automotive",
    "Applis et Jeux": "mobile-apps",
    "Appareils Amazon et Accessoires": "amazon-devices",
    "Animalerie": "pet-supplies",
  };

  useEffect(() => {
    fetch('/api/check-file')
      .then(response => response.json())
      .then(data => console.log(data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <Layout>
      <div className={styles.categoriesContainer}>
        <div className={styles.productGrid1}>
          {Object.entries(categoryPaths).map(([category, path]) => (
            <CategoryButton key={category} categoryName={category} path={path} className={styles.categoryButton} />
          ))}
        </div>
      </div>
    </Layout>
  );
}