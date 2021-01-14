import Link from "next/link";
import style from "../styles/components/aboutCard.module.scss";

export default function AboutCard() {
  return (
    <div className={style.about_card}>
      <div className={style.about_img}></div>
      <div className={style.details_container}>
        <div className={style.details}>
          <div className={style.name_and_position}>
            <p>Sihle Kambula</p>
            <span>Frontend Web developer</span>
          </div>
        </div>
        <div className={style.bio}>
          <p>
            Hi, my name is Sihle Kambula and I am a front-end web developer from
            Joburg, South Africa. I enjoy building everything from small
            business site, personal websites and interactive web apps.
          </p>
          <p>Social media</p>
          {/* <p>
            If you are seeking a web presence or an employer looking to hire,
            I'm the person for the job.
          </p> */}
        </div>
      </div>
    </div>
  );
}
