import { useState } from "react";
import webApps from "../data/projects";
import apps from "../data/apps";
import websites from "../data/websites";
import style from "../styles/components/projects.module.scss";
import ProjectCard from "./projectCard";
import ProjectCardRight from "./projectCardRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faDiceD6,
  faMobileAlt,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";

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

  // const Websites = () => {
  //   return websites.map((website, index) => {
  //     return index % 2 === 0 ? (
  //       <ProjectCard project={website} key={index} />
  //     ) : (
  //       <ProjectCardRight project={website} key={index} />
  //     );
  //   });
  // };

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
            <FontAwesomeIcon icon={faDiceD6} className={style.icon} size='2x' />
            <p> Web Applications</p>
          </button>
        </div>
        {/* <div className={style.tabs}>
          <button
            className={showWebApps ? style.active : null}
            onClick={() => {
              setShowApps(false);
              setShowWebApps(true);
            }}
          >
            <FontAwesomeIcon
              icon={faFileCode}
              className={style.icon}
              size='2x'
            />
            <p>Websites</p>
          </button>
        </div> */}
        <div className={style.tabs}>
          <button
            className={showApps ? style.active : null}
            onClick={() => {
              setShowApps(true);
              setShowWebApps(false);
            }}
          >
            <FontAwesomeIcon
              icon={faMobileAlt}
              className={style.icon}
              size='2x'
            />
            <p>Mobile Applications</p>
          </button>
        </div>
      </div>

      <div className={style.projectGrid}>
        {!showApps && !showWebApps && <WebApps />}
        {/* {showWebApps && <Websites />} */}
        {showApps && <MobileApps />}
      </div>
    </div>
  );
}
