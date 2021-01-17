import style from "../styles/components/blog.module.scss";
import BlogCard from "./BlogCard";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Blog() {
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
      className={style.blog}
      variants={container}
      initial="hidden"
      ref={ref}
      animate={controls}
    >
      <h1>
        <span>My </span>Blog
      </h1>
      <div className={style.blogs}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </motion.div>
  );
}
