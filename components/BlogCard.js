import style from "../styles/components/blogCard.module.scss";
import Link from "next/link";
import Moment from "react-moment";
export default function BlogCard({ blogPost }) {
  return (
    <Link href={"/post/" + blogPost.slug.current}>
      <div className={style.card}>
        <div className={style.img}>
          <img src={blogPost.mainImage.asset.url} />
        </div>
        <h3>{blogPost.title}</h3>
        <p className={style.date}>
          <Moment format="D MMM YYYY">{blogPost.publishedAt}</Moment>
        </p>
        <div className={style.line_break}></div>
        <p className={style.description}>{blogPost.body[1].children[0].text}</p>
      </div>
    </Link>
  );
}
