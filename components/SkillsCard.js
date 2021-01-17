import style from "../styles/components/skillCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function SkillCard({ icon, end, skills }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      className={style.skill_card}
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5, delay: 0.3 }}
      variants={{
        visible: { scale: 1, opacity: 1 },
        hidden: { scale: 0, opacity: 0 },
      }}
    >
      <i>
        <FontAwesomeIcon icon={icon} size="2x" />
      </i>

      <h3>{end}</h3>
      {skills.map((skill, index) => {
        return <p key={index}>{skill}</p>;
      })}
    </motion.div>
  );
}
