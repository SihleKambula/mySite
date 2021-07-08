import style from "../styles/components/aboutCard.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import SocialIcons from "./SocialIcons";

library.add(fab);

export default function AboutCard() {
  return (
    <div className={style.about_card}>
      <div className={style.about_img}></div>
      <div className={style.details_container}>
        <div className={style.details}>
          <div className={style.name_and_position}>
            <p>Who is Sihle?</p>
          </div>
        </div>
        <div className={style.bio}>
          <p>
            Hi, my name is Sihle Kambula and I am a front-end web developer from
            Joburg, South Africa. I enjoy building everything from small
            business site, personal websites and interactive web apps.
          </p>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}
