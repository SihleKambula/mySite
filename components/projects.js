import { useState } from "react";
import webApps from "../data/projects";
import apps from "../data/apps";
import websites from "../data/websites";
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
    return websites.map((website, index) => {
      return index % 2 === 0 ? (
        <ProjectCard project={website} key={index} />
      ) : (
        <ProjectCardRight project={website} key={index} />
      );
    });
  };

  const WebApps = () => {
    return webApps.map((project, index) => {
      return index % 2 == 0 ? (
        <ProjectCard project={project} key={index} />
      ) : (
        <ProjectCardRight project={project} key={index} />
      );
    });
  };

  const [showApps, setShowApps] = useState(false);
  const [showWebApps, setShowWebApps] = useState(false);

  return (
    <div className={style.projects}>
      <h1>
        <span>My </span>Projects
      </h1>

      <div className={style.tab_container}>
        <div className={style.tabs}>
          <button
            className={!showApps && !showWebApps ? style.active : null}
            onClick={() => {
              setShowApps(false);
              setShowWebApps(false);
            }}
          >
            Web Apps
          </button>
        </div>
        <div className={style.tabs}>
          <button
            className={showWebApps ? style.active : null}
            onClick={() => {
              setShowApps(false);
              setShowWebApps(true);
            }}
          >
            Web sites
          </button>
        </div>
        <div className={style.tabs}>
          <button
            className={showApps ? style.active : null}
            onClick={() => {
              setShowApps(true);
              setShowWebApps(false);
            }}
          >
            Mobile Apps
          </button>
        </div>
      </div>

      {!showApps && !showWebApps && <WebApps />}
      {showWebApps && <Websites />}
      {showApps && <MobileApps />}
    </div>
  );
}
