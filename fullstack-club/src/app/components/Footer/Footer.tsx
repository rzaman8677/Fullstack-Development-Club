// components/Footer/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2023 Full Stack Development Club. All rights reserved.</p>
      <div className={styles.footerSocial}>
        {/* Add social media icons and links here */}
      </div>
    </footer>
  );
};

export default Footer;
