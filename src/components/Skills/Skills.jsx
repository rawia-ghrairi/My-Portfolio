import React from "react";
import { useApi } from "../../hooks/useApi";
import { skillService } from "../../services/skillService";
import styles from "./Skills.module.css";

export const Skills = () => {
  const { data: skillCategories, loading, error } = useApi(skillService.getSkillsByCategory);

  if (loading) {
    return (
      <section className={styles.container} id="skills">
        <h2 className={styles.title}>Technical Skills</h2>
        <div className={styles.loading}>Loading skills...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.container} id="skills">
        <h2 className={styles.title}>Technical Skills</h2>
        <div className={styles.error}>Error loading skills: {error}</div>
      </section>
    );
  }

  return (
    <section className={styles.container} id="skills">
      <h3 className={styles.title}>Technical Skills</h3>
      <div className={styles.categoriesGrid}>
        {skillCategories?.map((category, index) => (
          <div 
            key={index} 
            className={styles.categoryCard}
          >
            <h3 className={styles.categoryTitle}>{category.category}</h3>
            <div className={styles.skillsList}>
              {category.skills.map((skill, i) => (
                <span key={i} className={styles.skillBadge}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};