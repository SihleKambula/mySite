import style from "../styles/components/projectCardRight.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function ProjectCardRight({ project }) {
  // Animation
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const containerVariant = {
    hidden: {
      opacity: 0,
      x: -300,
    },
    show: {
      opacity: 1,
      x: 1,
    },
    transition: {
      duration: 1,
    },
  };

  return (
    <div className={style.container}>
      <div className={style.details}>
        <span className={style.featured}>Featured Project</span>
        <h3>{project.name}</h3>
        <p className={style.para}>{project.description}</p>
        {project.technologies.map((tech, index) => {
          return <span key={index}>{tech}</span>;
        })}
        <div className={style.icons}>
          <a href={project.gitHubUrl} target="blank">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href={project.url} target="blank">
            <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" />
          </a>
        </div>
      </div>
      <a href={project.url} className={style.imgContainer}>
        <div
          className={style.img}
          style={{
            backgroundImage: `url(${project.imageUrl})`,
          }}
        >
          <div className={style.overlay}></div>
        </div>
      </a>
    </div>
  );
}
