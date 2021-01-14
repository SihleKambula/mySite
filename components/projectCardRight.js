import style from "../styles/components/projectCardRight.module.scss";

export default function ProjectCardRight({ project }) {
  return (
    <div className={style.container}>
      <div className={style.details}>
        <span className={style.featured}>Featured Project</span>
        <h3>{project.name}</h3>
        <p className={style.para}>{project.description}</p>
        {project.technologies.map((tech) => {
          return <span>{tech}</span>;
        })}
        <div className={style.icons}>
          <i>GitHub</i>
          <i>View</i>
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
