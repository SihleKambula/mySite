import { useState } from "react";
import projects from "../data/projects";
import apps from "../data/apps";
import style from "../styles/components/projects.module.scss";
import ProjectCard from "./projectCard";
import ProjectCardRight from "./projectCardRight";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Projects() {
  const [showApps, setShowApps] = useState(false);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const heading = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      className={style.projects}
      variants={container}
      initial="hidden"
      ref={ref}
      animate={controls}
    >
      <motion.h1
        variants={heading}
        initial="hidden"
        ref={ref}
        animate={controls}
      >
        <span>My </span>Projects
      </motion.h1>

      <motion.div
        className={style.tab_container}
        variants={heading}
        initial="hidden"
        ref={ref}
        animate={controls}
      >
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
      </motion.div>

      {/* Show apps when showApps is true */}
      {showApps
        ? apps.map((app, index) => {
            return index / 2 == 0 ? (
              <ProjectCard project={app} key={index} />
            ) : (
              <ProjectCardRight project={app} key={index} />
            );
          })
        : projects.map((project, index) => {
            return index / 2 == 0 ? (
              <ProjectCard project={project} key={index} />
            ) : (
              <ProjectCardRight project={project} key={index} />
            );
          })}
    </motion.div>
  );
}
