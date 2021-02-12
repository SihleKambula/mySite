import style from "../styles/components/blog.module.scss";
import BlogCard from "./BlogCard";

export default function Blog({ blogs }) {
  return (
    <div className={style.blog}>
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
    </div>
  );
}
