import CategoryButton from "../components/CategoryButton";
import styles from "../styles/Home.module.css";

export default function Home() {
  const categories = [
    "Sports et Loisirs", //sports
    "Fait main", //handmade
    "Mode", //fashion
    "Luminaires et Éclairage", //lighting
    "Logiciels", //software
    "Livres", //books
    "Jeux vidéo", //videogames
    "Jeux et Jouets", //toys
    "Jardin", //lawn-garden
    "Instruments de musique et Sono", //musical-instruments
    "Informatique", //computers
    "Hygiène et Santé", //hpc
    "High-Tech", //electronics
    "Gros électroménager", //appliances
    "Fournitures de bureau", //officeproduct
    "Epicerie", //grocery
    "DVD et Blu-ray", //dvd
    "Cuisine et Maison", //kitchen
    "commerce, Industrie et Science", //industrial
    "Engagement en faveur du climat", //climate-pledge
    "CD et Vinyles", //music
    "Bricolage", //hi
    "Kindle", //digital-text
    "cartes cadeaux", //gift-cards
    "Beauté et Parfum", //beauty
    "Auto et Moto", //automotive
    "Applis et Jeux", //mobile-apps
    "Appareils Amazon et Accessoires", //amazon-devices
    "Animalerie", //pet-supplies
  ];

  const handleCategoryClick = (category) => {
    console.log(`Category clicked: ${category}`);
  };

  return (
    <div className={styles.categoriesContainer}>
      {/* <h1 style={{ width: '100%', textAlign: 'center' }}>Amazon Categories</h1> */}
      {categories.map((category) => (
        <CategoryButton
          key={category}
          categoryName={category}
          onClick={() => handleCategoryClick(category)}
          className={styles.categoryButton}
        />
      ))}
    </div>
  );
}
