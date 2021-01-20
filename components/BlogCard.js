import style from "../styles/components/blogCard.module.scss";
import Link from "next/link";
import Moment from "react-moment";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect, useState } from "react";

// Component start
export default function BlogCard({ blogPost }) {
  const { title, slug, mainImage, body, publishedAt } = blogPost;

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: "gmrv3avf",
      dataset: "production",
    });

    setImageUrl(imgBuilder.image(mainImage));
  }, [mainImage]);
  return (
    <Link href={"/post/" + slug.current}>
      <div className={style.card}>
        <div className={style.img}>
          <img src={imageUrl} alt="blog image" />
        </div>
        <h3>{title}</h3>
        <p className={style.date}>
          <Moment format="D MMM YYYY">{publishedAt}</Moment>
        </p>
        <div className={style.line_break}></div>
        <p className={style.description}>{body[1].children[0].text}</p>
      </div>
    </Link>
  );
}
