// components/About/About.tsx
import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.sectionTitle}>About Us</h2>
      <p className={styles.aboutText}>
        The Full Stack Development Club is dedicated to teaching students the ins and outs of
        full-stack web development. From front-end frameworks like React.js and Next.js to
        back-end technologies and cloud services like AWS, we cover it all.
      </p>
    </section>
  );
};

export default About;
