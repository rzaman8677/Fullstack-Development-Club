// components/Projects/Projects.tsx
"use client";
import React from 'react';
import styles from './Projects.module.css';

interface Project {
  title: string;
  developer: string;
  image: string;
  link?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'CAD Club / DesCo',
      developer: 'Raiyan Zaman',
      image: '/images/project1.jpg',
      link: '#',
    },
    {
      title: 'Social Media App',
      developer: 'Team Beta',
      image: '/images/project2.jpg',
      link: '#',
    },
    // Add more projects
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.sectionTitle}>Our Projects</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={styles.projectCard}
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDeveloper}>
                Developed by {project.developer}
              </p>
              {project.link && (
                <a href={project.link} className={styles.projectLink}>
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
