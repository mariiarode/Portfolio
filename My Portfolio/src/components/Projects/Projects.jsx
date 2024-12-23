import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Projects.module.css'
import project from "../../data/projects.json";

const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>PROJECTS</h2>
            <div className={styles.items}>
            {project.map((project) => (
            <div className={styles.card} key={project.id}>
              <div className={styles.image}>
                <img src={getImageUrl(project.img)} alt={project.title} />
              </div>
              <div className={styles.overlay}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link}>
                    <img src={getImageUrl("githubIcon.png")} alt="GitbhubIcon" />
                </a>
              </div>
            </div>
          ))}
            </div>
        </section>
    );
}

export default Projects
