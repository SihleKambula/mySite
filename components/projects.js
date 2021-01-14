import projects from "../data/projects";
import style from "../styles/components/projects.module.scss";
import ProjectCard from "./projectCard";
import ProjectCardRight from "./projectCardRight";

export default function Projects() {
  return (
    <div className={style.projects}>
      <h1>
        <span>My </span>Projects
      </h1>

      {projects.map((project, index) => {
        return index / 2 == 0 ? (
          <ProjectCard project={project} key={index} />
        ) : (
          <ProjectCardRight project={project} key={index} />
        );
      })}
    </div>
  );
}
