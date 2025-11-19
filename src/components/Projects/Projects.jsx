import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
// Import Swiper React components et styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import de vos hooks et services
import { useApi } from "../../hooks/useApi";
import { projectService } from "../../services/projectService";
const timelineData = [
  {
    "id": 1,
    "title": "Tetris Game",
    "image_src": "projects/project.png",
    "description": "Classic Tetris game developed for the web using HTML, CSS, and JavaScript.",
    "skills": [
        "HTML",
        "CSS",
        "JavaScript"
    ],
    "demo": "",
    "source": "https://github.com/rawia-ghrairi/tetris-game"
},
{
    "id": 2,
    "title": "Cinema Management System (Final Year Project)",
    "image_src": "projects/project.png",
    "description": "Web system for managing cinema sessions, reservations, and users.",
    "skills": [
        "HTML",
        "CSS",
        "PHP",
        "MySQL"
    ],
    "demo": "",
    "source": "https://github.com/rawia-ghrairi/cinema-management"
},
{
    "id": 3,
    "title": "Product and Inventory Management API (.NET)",
    "image_src": "projects/project.png",
    "description": "REST API for managing products and stock using .NET and PostgreSQL, tested via Postman.",
    "skills": [
        ".NET",
        "PostgreSQL",
        "Postman"
    ],
    "demo": "",
    "source": "https://github.com/rawia-ghrairi/backend-dotnet"
},
{
    "id": 4,
    "title": "Aesthetic Clinic Management App",
    "image_src": "projects/project.png",
    "description": "Frontend web application for managing doctors, patients, appointments, operations, and medical records in an aesthetic clinic.",
    "skills": [
        "Angular",
        "Bootstrap"
    ],
    "demo": "",
    "source": "https://github.com/rawia-ghrairi/Aesthetic-Clinic-project"
},
{
    "id": 5,
    "title": "E-commerce Website (Frontend)",
    "image_src": "projects/project.png",
    "description": "Frontend development of an e-commerce website using Next.js and Tailwind CSS.",
    "skills": [
        "Next.js",
        "Tailwind CSS"
    ],
    "demo": "",
    "source": "https://github.com/rawia-ghrairi/project-NextJs"
},
{
    "id": 6,
    "title": "Academic Project Management Web App",
    "image_src": "projects/project.png",
    "description": "Web application for supervising students, managing reports, departments, and supervisors.",
    "skills": [
        "React",
        ".NET",
        "PostgreSQL"
    ],
    "demo": "",
    "source": "https://github.com/rawia-ghrairi/projectSync_front"
},
{
    "id": 7,
    "title": "Hotel Management App",
    "image_src": "projects/project.png",
    "description": "REST API for hotel management built with NestJS and MongoDB, tested using Insomnia.",
    "skills": [
        "NestJS",
        "MongoDB",
        "Insomnia"
    ],
    "demo": "",
    "source": "https://github.com/rawia-ghrairi/backend_NestJs"
},
{
    "id": 10,
    "title": "Medical Clinic Mobile App",
    "image_src": "projects/project.png",
    "description": "Mobile app for managing appointments, doctors, and patients with authentication and profile management.",
    "skills": [
        "Ionic",
        "Angular",
        "Flask",
        "MongoDB"
    ],
    "demo": "",
    "source": "https://github.com/rawia-ghrairi/mobile-app-frontend-ionic7"
},
{
    "id": 11,
    "title": "Customer Order Management App (Spring Boot)",
    "image_src": "projects/project.png",
    "description": "REST API for managing customers, products, and orders using Spring Boot and PostgreSQL, tested via Postman.",
    "skills": [
        "Spring Boot",
        "REST API",
        "PostgreSQL",
        "Postman"
    ],
    "demo": "",
    "source": "https://github.com/rawia-ghrairi/springboot-order-management"
},
{
    "id": 14,
    "title": "Devops: Mobile Money Tracker",
    "image_src": "projects/project.png",
    "description": "Mobile app for financial management. Includes CI/CD pipeline automation, secure authentication, and containerized deployment.",
    "skills": [
        "React Native",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Docker",
        "Docker Compose",
        "GitLab CI/CD",
        "Render",
        "Neon",
        "Clerk",
        "DevSecOps"
    ],
    "demo": "",
    "source": "https://github.com/rawia-ghrairi/mobile-money-tracker"
}
]
export const Projects = () => {
  const { data: projects, loading, error } = useApi(projectService.getAllProjects);

  // État de chargement
  if (loading) {
    return (
      <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.loading}>
          Loading projects...
        </div>
      </section>
    );
  }
   // Gestion des erreurs
   if (error) {
    return (
      <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.error}>
          Error loading projects: {error}
        </div>
      </section>
    );
  }
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className={styles.swiper}
      >
        {timelineData.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
