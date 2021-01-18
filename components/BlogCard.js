import style from "../styles/components/blogCard.module.scss";

export default function BlogCard() {
  return (
    <a href="/">
      <div className={style.card}>
        <div className={style.img}>
          <img src="/images/bg_blog.webp" />
        </div>
        <h3>Coffee and Code</h3>
        <p className={style.date}>08 January 2021</p>
        <div className={style.line_break}></div>
        <p className={style.description}>
          Rise African Child Media (RACM) is a creative digital platform that
          aims to tell stories in the TV and film industry, stories that can
          change the enviroment.
        </p>
      </div>
    </a>
  );
}
