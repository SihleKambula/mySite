import style from "../styles/components/blog.module.scss";
import BlogCard from "./BlogCard";

export default function Blog() {
  return (
    <div className={style.blog}>
      <h1>
        <span>My </span>Blog
      </h1>
      <div className={style.blogs}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}
