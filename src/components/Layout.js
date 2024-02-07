// components/Layout.js
import Navbar from './Navbar';
import styles from '../styles/Navbar.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;