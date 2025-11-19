import React from "react";
import { useApi } from "../../hooks/useApi";
import { skillService } from "../../services/skillService";
import styles from "./Skills.module.css";
const skillCategories = [
  {
    "id": 1,
    "category": "Programming Languages",
    "title": "C++",
    "image_src": "skills/cpp.png"
},
{
    "id": 2,
    "category": "Programming Languages",
    "title": "Python",
    "image_src": "skills/python.png"
},
{
    "id": 3,
    "category": "Programming Languages",
    "title": "Java",
    "image_src": "skills/java.png"
},
{
    "id": 4,
    "category": "Programming Languages",
    "title": "JavaScript",
    "image_src": "skills/javascript.png"
},
{
    "id": 5,
    "category": "Programming Languages",
    "title": "TypeScript",
    "image_src": "skills/typescript.png"
},
{
    "id": 6,
    "category": "Web Development",
    "title": "HTML",
    "image_src": "skills/html.png"
},
{
    "id": 7,
    "category": "Web Development",
    "title": "CSS",
    "image_src": "skills/css.png"
},
{
    "id": 8,
    "category": "Web Development",
    "title": "Tailwind CSS",
    "image_src": "skills/tailwind.png"
},
{
    "id": 9,
    "category": "Web Development",
    "title": "React",
    "image_src": "skills/react.png"
},
{
    "id": 10,
    "category": "Web Development",
    "title": "Next.js",
    "image_src": "skills/nextjs.png"
},
{
    "id": 11,
    "category": "Web Development",
    "title": "Angular",
    "image_src": "skills/angular.png"
},
{
    "id": 12,
    "category": "Web Development",
    "title": "Flask",
    "image_src": "skills/flask.png"
},
{
    "id": 13,
    "category": "Web Development",
    "title": "Java EE",
    "image_src": "skills/javaee.png"
},
{
    "id": 14,
    "category": "Web Development",
    "title": ".NET",
    "image_src": "skills/dotnet.png"
},
{
    "id": 15,
    "category": "Web Development",
    "title": "Spring Boot",
    "image_src": "skills/springboot.png"
},
{
    "id": 16,
    "category": "Web Development",
    "title": "NestJS",
    "image_src": "skills/nestjs.png"
},
{
    "id": 17,
    "category": "Web Development",
    "title": "Node.js",
    "image_src": "skills/nodejs.png"
},
{
    "id": 18,
    "category": "Web Development",
    "title": "Express.js",
    "image_src": "skills/express.png"
},
{
    "id": 19,
    "category": "Mobile Development",
    "title": "Ionic",
    "image_src": "skills/ionic.png"
},
{
    "id": 20,
    "category": "Mobile Development",
    "title": "React Native",
    "image_src": "skills/reactnative.png"
},
{
    "id": 21,
    "category": "Databases",
    "title": "MySQL",
    "image_src": "skills/mysql.png"
},
{
    "id": 22,
    "category": "Databases",
    "title": "PostgreSQL",
    "image_src": "skills/postgresql.png"
},
{
    "id": 23,
    "category": "Databases",
    "title": "MongoDB",
    "image_src": "skills/mongodb.png"
},
{
    "id": 24,
    "category": "Operating Systems",
    "title": "Linux",
    "image_src": "skills/linux.png"
},
{
    "id": 25,
    "category": "Operating Systems",
    "title": "Windows",
    "image_src": "skills/windows.png"
},
{
    "id": 26,
    "category": "Testing Tools",
    "title": "Insomnia",
    "image_src": "skills/insomnia.png"
},
{
    "id": 27,
    "category": "Testing Tools",
    "title": "Storybook",
    "image_src": "skills/storybook.png"
},
{
    "id": 28,
    "category": "Development Environments",
    "title": "IntelliJ IDEA",
    "image_src": "skills/intellij.png"
},
{
    "id": 29,
    "category": "Development Environments",
    "title": "VS Code",
    "image_src": "skills/vscode.png"
},
{
    "id": 30,
    "category": "Development Environments",
    "title": "Eclipse",
    "image_src": "skills/eclipse.png"
},
{
    "id": 31,
    "category": "DevOps",
    "title": "Docker",
    "image_src": "skills/docker.png"
},
{
    "id": 32,
    "category": "DevOps",
    "title": "CI/CD (GitHub Actions)",
    "image_src": "skills/githubactions.png"
},
{
    "id": 33,
    "category": "DevOps",
    "title": "CI/CD (GitLab CI)",
    "image_src": "skills/gitlabci.png"
},
{
    "id": 34,
    "category": "DevOps",
    "title": "Grafana",
    "image_src": "skills/grafana.png"
},
{
    "id": 35,
    "category": "DevOps",
    "title": "GitHub",
    "image_src": "skills/github.png"
},
{
    "id": 36,
    "category": "DevOps",
    "title": "GitLab",
    "image_src": "skills/gitlab.png"
},
{
    "id": 37,
    "category": "Project Management",
    "title": "Agile",
    "image_src": "skills/agile.png"
},
{
    "id": 38,
    "category": "Project Management",
    "title": "Scrum",
    "image_src": "skills/scrum.png"
},
{
    "id": 39,
    "category": "Project Management",
    "title": "Kanban",
    "image_src": "skills/kanban.png"
},
{
    "id": 40,
    "category": "Project Management",
    "title": "Trello",
    "image_src": "skills/trello.png"
}
]
export const Skills = () => {
  //const { data: skillCategories, loading, error } = useApi(skillService.getSkillsByCategory);
  const groupedSkills = skillCategories.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});
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
      <h2 className={styles.title}>Technical Skills</h2>
      <div className={styles.categoriesGrid}>
        {Object.entries(groupedSkills).map(([category, skills], index) => (
          <div key={index} className={styles.categoryCard}>
            <h3 className={styles.categoryTitle}>{category}</h3>
            <div className={styles.skillsList}>
              {skills.map((skill) => (
                <span key={skill.id} className={styles.skillBadge}>
                  {skill.title}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
