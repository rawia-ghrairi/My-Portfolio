import React, { useState } from "react";
import styles from "./Experience.module.css";

// Déplacez vos données ici ou importez-les depuis un service API
const timelineData = [
  {
    id: "1",
    type: "experience",
    title: "Software Engineer Intern",
    organization: "EY Tunis",
    period: "June 2025 - July 2025",
    description: [
      "Conducted technical benchmarking of CRVS (Civil Registration and Vital Statistics) solutions",
      "Designed and deployed OpenCRVS POC in microservices architecture with Docker",
      "Developed integrated chatbot assistance for OpenCRVS using JavaScript and Flask",
    ],
    highlights: ["Docker", "Microservices", "Grafana", "Python", "JavaScript"],
  },
  {
    id: "2",
    type: "experience",
    title: "Full Stack Developer",
    organization: "TRVL Code LLC",
    period: "July 2024 - August 2024",
    description: [
      "Developed e-commerce frontend application using Next.js",
      "Designed reusable UI components with Tailwind CSS and Shadcn",
      "Implemented hotel management application with REST API integration",
    ],
    highlights: ["Next.js", "React", "Tailwind CSS", "NestJS", "REST API"],
  },
  {
    id: "3",
    type: "education",
    title: "Engineering Cycle - Computer Science",
    organization: "ENSIT (National Higher School of Engineers of Tunis)",
    period: "2023 - 2026",
    description: [
      "Third-year engineering student specializing in Computer Science",
      "Focus on software development, DevOps, and system architecture",
      "Completed multiple full-stack and DevOps projects",
    ],
    highlights: ["Software Engineering", "DevOps", "System Design", "Agile"],
  },
  {
    id: "4",
    type: "education",
    title: "Preparatory Cycle - Physics & Chemistry",
    organization: "IPEIB (Preparatory Institute for Engineering Studies of Bizerte)",
    period: "2020 - 2023",
    description: [
      "Completed preparatory cycle in Physics and Chemistry",
      "Foundation in mathematics, physics, and engineering principles",
    ],
    highlights: ["Physics", "Chemistry", "Mathematics"],
  },
];

export const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const experiences = timelineData.filter((item) => item.type === "experience");
  const education = timelineData.filter((item) => item.type === "education");

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience & Education</h2>     
      {/* Experience Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Professional Experience</h3>
        <div className={styles.timeline}>
          {experiences.map((item, index) => (
            <TimelineCard
              key={item.id}
              item={item}
              isExpanded={expandedId === item.id}
              onToggle={() => setExpandedId(expandedId === item.id ? null : item.id)}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Education</h3>
        <div className={styles.timeline}>
          {education.map((item, index) => (
            <TimelineCard
              key={item.id}
              item={item}
              isExpanded={expandedId === item.id}
              onToggle={() => setExpandedId(expandedId === item.id ? null : item.id)}
              isLast={index === education.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Composant TimelineCard
function TimelineCard({ item, isExpanded, onToggle, isLast }) {
  return (
    <div className={styles.timelineItem}>
      {/* Timeline line */}
      {!isLast && <div className={styles.timelineLine} />}

      {/* Timeline dot */}
      <div className={styles.timelineDot}>
        <div className={styles.dotInner} />
      </div>

      {/* Content */}
      <div className={`${styles.card} ${isExpanded ? styles.expanded : ''}`}>
        <button onClick={onToggle} className={styles.cardHeader}>
          <div className={styles.headerContent}>
            <h4 className={styles.cardTitle}>{item.title}</h4>
            <p className={styles.organization}>{item.organization}</p>
            <p className={styles.period}>{item.period}</p>
          </div>
          <span className={`${styles.chevron} ${isExpanded ? styles.rotated : ''}`}>
            ▼
          </span>
        </button>

        {/* Expanded content */}
        {isExpanded && (
          <div className={styles.cardContent}>
            <div className={styles.description}>
              <h5 className={styles.contentTitle}>Key Responsibilities & Achievements</h5>
              <ul className={styles.descriptionList}>
                {item.description.map((desc, index) => (
                  <li key={index} className={styles.descriptionItem}>
                    <span className={styles.bullet}>•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {item.highlights && (
              <div className={styles.highlights}>
                <h5 className={styles.contentTitle}>Technologies & Skills</h5>
                <div className={styles.highlightsList}>
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className={styles.highlightItem}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}