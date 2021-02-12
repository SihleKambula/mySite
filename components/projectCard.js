import style from "../styles/components/projectCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard({ project }) {
  return (
    <div className={style.container}>
      <a href={project.url} target="blank">
        <div
          className={style.img}
          style={{
            backgroundImage: `url(${project.imageUrl})`,
          }}
        >
          <div className={style.overlay}></div>
        </div>
      </a>

      <div className={style.details}>
        <span className={style.featured}>Featured Project</span>
        <h3>{project.name}</h3>
        <p className={style.para}>{project.description}</p>

        {/* Loop of the different technologies given */}
        {project.technologies.map((tech, index) => {
          return <span key={index}>{tech}</span>;
        })}
        <div className={style.icons}>
          <a href={project.gitHubUrl} target="blank">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          {project.url && (
            <a href={project.url} target="blank">
              <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
