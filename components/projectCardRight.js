import style from "../styles/components/projectCardRight.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCardRight({ project }) {
  return (
    <div className={style.container}>
      <div className={style.details}>
        <p className={style.featured}>Featured Project</p>
        <h3>{project.name}</h3>
        <p className={style.para}>{project.description}</p>
        {/* Show list of technologies used */}
        {project.technologies.map((tech, index) => {
          return <span key={index}>{tech}</span>;
        })}
        <div className={style.icons}>
          {project.gitHubUrl && (
            <a href={project.gitHubUrl} target='blank'>
              <FontAwesomeIcon icon={faGithub} size='2x' />
            </a>
          )}

          {project.url && (
            <a href={project.url} target='blank'>
              <FontAwesomeIcon icon={faExternalLinkAlt} size='2x' />
            </a>
          )}
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
