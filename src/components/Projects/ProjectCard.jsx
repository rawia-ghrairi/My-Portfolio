import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { 
    title, 
    image_src, // De l'API Django
    description, 
    skills, // Tableau d'objets {id, name} depuis l'API
    demo, // De l'API Django
    source // De l'API Django
  },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(image_src)}
        alt={`Image of ${title}`}
        className={styles.image}
        onError={(e) => {
          // Image de fallback si l'image ne charge pas
          e.target.src = getImageUrl("default-project.png");
        }}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
      {skills && skills.length > 0 ? (
          skills.map((skill, index) => (
            <li key={index} className={styles.skill}>
              {skill} {/* Affiche directement le string */}
            </li>
          ))
        ) : (
          <li className={styles.skill}>No skills listed</li>
        )}
      </ul>
      <div className={styles.links}>
        {demo ? (
          <a 
            href={demo} 
            className={styles.link}
            target="_blank" 
            rel="noopener noreferrer"
          >
            Demo
          </a>
        ) : (
          <span className={`${styles.link} ${styles.disabled}`}>
            Demo
          </span>
        )}
        {source ? (
          <a 
            href={source} 
            className={styles.link}
            target="_blank" 
            rel="noopener noreferrer"
          >
            Source
          </a>
        ) : (
          <span className={`${styles.link} ${styles.disabled}`}>
            Source
          </span>
        )}
      </div>
    </div>
  );
};
