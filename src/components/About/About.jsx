import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
              I develop modern and scalable web applications using React, Node.js, and other contemporary frameworks.
               I enjoy building elegant interfaces and reliable backend systems that work together seamlessly to deliver smooth user experiences.
               Because nothing’s more satisfying than seeing the frontend and backend speak the same language. !!
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Mobile Developer</h3>
              <p>
              I create mobile applications focused on clean design, performance, and usability. 
              Working with frameworks like React Native  allows me to bring creative ideas to life across different platforms with consistency and quality.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>DevOps & ML Enthusiast</h3>
              <p>
              I’m passionate about optimizing development workflows and ensuring reliable deployments through DevOps practices. 
              I also enjoy exploring machine learning techniques to integrate intelligent and data-driven features into applications.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
