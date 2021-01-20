import style from "../styles/components/blog.module.scss";
import BlogCard from "./BlogCard";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Blog({ blogs }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  //Control animation on view element
  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const container = {
    hidden: {
      opacity: 0,
      x: "-100%",
    },
    show: {
      opacity: 1,
      x: 1,
    },
    transition: {
      duration: 0.5,
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
        {blogs ? (
          blogs.map((blog, index) => {
            return <BlogCard blogPost={blog} key={index} />;
          })
        ) : (
          <h1>No Blogs</h1>
        )}
      </div>
    </motion.div>
  );
}
