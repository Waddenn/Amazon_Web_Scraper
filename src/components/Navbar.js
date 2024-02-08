// components/Navbar.js
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const isCategoryPage = router.pathname.includes('/[category]');

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: router.pathname,
      query: { ...router.query, minPrice, maxPrice },
    });
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          Amazon Web Scrapper
        </Link>
      </div>
      {isCategoryPage && (
        <form onSubmit={handleSubmit} className={styles.filterForm}>
          <input
            className={styles.filterInput}
            type="number"
            placeholder="Prix min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            className={styles.filterInput}
            type="number"
            placeholder="Prix max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <button className={styles.filterButton} type="submit">Filtrer</button>
        </form>
      )}
    </nav>
  );
};

export default Navbar;