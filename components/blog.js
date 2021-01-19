import style from "../styles/components/blog.module.scss";
import BlogCard from "./BlogCard";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import sanityClient from "../pages/api/client";

export default function Blog() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug, 
            publishedAt,
            body,
      mainImage{
        asset->{
          _id,
          url
        }
      }
    
    }`
      )
      .then((data) => {
        setBlogs(data);
      });
  }, []);

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
        {blogs &&
          blogs.map((blog, index) => {
            return <BlogCard blogPost={blog} key={index} />;
          })}
      </div>
    </motion.div>
  );
}
