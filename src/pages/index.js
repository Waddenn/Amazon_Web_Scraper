import CategoryButton from "../components/CategoryButton";
import styles from "../styles/Home.module.css";

export default function Home() {
  const categories = [
    "sports",
    "handmade",
    "fashion",
    "lighting",
    "software",
    "books",
    "videogames",
    "toys",
    "lawn-garden",
    "musical-instruments",
    "computers",
    "hpc",
    "electronics",
    "appliances",
    "officeproduct",
    "grocery",
    "dvd",
    "kitchen",
    "industrial",
    "climate-pledge",
    "music",
    "hi",
    "digital-text",
    "gift-cards",
    "beauty",
    "automotive",
    "mobile-apps",
    "amazon-devices",
    "pet-supplies",
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
