import { useState } from "react";
import projects from "../data/projects";
import apps from "../data/apps";
import style from "../styles/components/projects.module.scss";
import ProjectCard from "./projectCard";
import ProjectCardRight from "./projectCardRight";

export default function Projects() {
  const MobileApps = () => {
    return apps.map((app, index) => {
      return index % 2 === 0 ? (
        <ProjectCard project={app} key={index} />
      ) : (
        <ProjectCardRight project={app} key={index} />
      );
    });
  };

  const Websites = () => {
    return projects.map((project, index) => {
      return index % 2 == 0 ? (
        <ProjectCard project={project} key={index} />
      ) : (
        <ProjectCardRight project={project} key={index} />
      );
    });
  };

  const [showApps, setShowApps] = useState(false);

  return (
    <div className={style.projects}>
      <h1>
        <span>My </span>Projects
      </h1>

      <div className={style.tab_container}>
        <div className={style.tabs}>
          <button
            className={!showApps ? style.active : null}
            onClick={() => setShowApps(false)}
          >
            Websites
          </button>
        </div>
        <div className={style.tabs}>
          <button
            className={showApps ? style.active : null}
            onClick={() => setShowApps(true)}
          >
            Mobile Apps
          </button>
        </div>
      </div>

      {/* Show apps when showApps is true */}
      {showApps ? <MobileApps /> : <Websites />}
    </div>
  );
}
