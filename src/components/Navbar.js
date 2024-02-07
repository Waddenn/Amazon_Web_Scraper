// components/Navbar.js
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
        Amazon Web Scrapper
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="/about">
          À propos
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

