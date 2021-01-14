import style from "../styles/components/projectCard.module.scss";

export default function ProjectCard({ project }) {
  return (
    <div className={style.container}>
      <a href={project.url}>
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
        {project.technologies.map((tech, index) => {
          return <span key={index}>{tech}</span>;
        })}
        <div className={style.icons}>
          <i>GitHub</i>
          <i>View</i>
        </div>
      </div>
    </div>
  );
}
