// components/Technology/Technology.tsx
"use client";
import React from 'react';
import styles from './Technology.module.css';

const Technology: React.FC = () => {
  const technologies = [
    { name: 'AWS (S3, EC2)', image: '/images/aws.png', link: 'https://aws.amazon.com/' },
    { name: 'MongoDB', image: '/images/mongodb.png', link: 'https://www.mongodb.com/' },
    { name: 'DynamoDB', image: '/images/dynamodb.png', link: 'https://aws.amazon.com/dynamodb/' },
    { name: 'MySQL', image: '/images/mysql.png', link: 'https://www.mysql.com/' },
    { name: 'Next.js', image: '/images/nextjs.png', link: 'https://nextjs.org/' },
    { name: 'React.js', image: '/images/reactjs.png', link: 'https://reactjs.org/' },
    { name: 'Node.js', image: '/images/nodejs.png', link: 'https://nodejs.org/' },
    { name: 'Express.js', image: '/images/expressjs.png', link: 'https://expressjs.com/' },
    { name: 'TypeScript', image: '/images/typescript.png', link: 'https://www.typescriptlang.org/' },
    { name: 'Git & GitHub', image: '/images/github.png', link: 'https://github.com/' },
    { name: 'Docker', image: '/images/docker.png', link: 'https://www.docker.com/' },
    { name: 'Jenkins', image: '/images/jenkins.png', link: 'https://www.jenkins.io/' },
    // Add other technologies with appropriate external links
  ];

  return (
    <section id="technologies" className={styles.technologies}>
      <h2 className={styles.sectionTitle}>Technologies We Teach</h2>
      <div className={styles.technologyGrid}>
        {technologies.map((tech, index) => (
          <a
            href={tech.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.technologyCard}
          >
            <img src={tech.image} alt={tech.name} className={styles.techImage} />
            <h3 className={styles.techName}>{tech.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Technology;
