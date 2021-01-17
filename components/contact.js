import style from "../styles/components/contact.module.scss";
import SocialIcons from "./SocialIcons";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Contact() {
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
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
    },
  };
  return (
    <motion.div
      className={style.contact}
      variants={container}
      initial="hidden"
      ref={ref}
      animate={controls}
    >
      <h1>
        Get In <span>Touch</span>
      </h1>
      <div className={style.container}>
        <p>
          Have a question or want to work together? My inbox is always open.
        </p>
        <a href="mailto:kambulasihle@gmail.com" className={style.btn}>
          Email Me
        </a>
        <SocialIcons />
      </div>
    </motion.div>
  );
}
