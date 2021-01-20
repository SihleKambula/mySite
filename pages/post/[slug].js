import imageUrlBuilder from "@sanity/image-url";
import style from "../../styles/blog.module.scss";
import { useEffect, useState } from "react";
import BlockContent from "@sanity/block-content-to-react";

const Blog = ({ title, body, image }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: "gmrv3avf",
      dataset: "production",
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);

  return (
    <div>
      <div className={style.main}>
        <h1>{title}</h1>

        {imageUrl && (
          <div className={style.imgContainer}>
            <img src={imageUrl} className={style.mainImage} />
          </div>
        )}

        <div className={style.body}>
          <BlockContent blocks={body} />
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(pageContext) {
  const pageSlug = pageContext.query.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[_type == "post" && slug.current == "${pageSlug}"]`
  );
  const url = `https://gmrv3avf.api.sanity.io/v1/data/query/production?query=${query}`;

  // fetch post from sanity
  const result = await fetch(url).then((data) => data.json());

  // get the single post
  const post = result.result[0];

  if (!post)
    return {
      notFound: true,
    };
  else
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
      },
    };
}

export default Blog;
