import style from "../styles/components/aboutCard.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import SocialIcons from "./SocialIcons";

library.add(fab);

export default function AboutCard() {
  return (
    <div className={style.about_card}>
      <div className={style.about_img}>
        <div className={style.overlay}></div>
        <img src='images/sk.png' alt='picture of me' />
      </div>
      <div className={style.details_container}>
        <div className={style.details}>
          <div className={style.name_and_position}>
            {/* <p>Who is Sihle?</p> */}
          </div>
        </div>
        <div className={style.bio}>
          <p>
            I'm a Front-end web developer who has a serious passion for web
            applications and using code to make a difference in the world.
          </p>
          <p>
            I love to solve problems and I never quite on finding a solution for
            a problem.
            <a href='https://flutter.dev' target='_blank'>
              Flutter,
            </a>{" "}
            <a href='https://reactjs.org/' target='_blank'>
              ReactJS
            </a>{" "}
            and{" "}
            <a href='https://nextjs.org' target='_blank'>
              NextJS
            </a>{" "}
            fan boy. I am a simple guy who is a big fan of challenges.
          </p>
          <p>
            Interested in the entire web development field and working on
            amazing, ambitious projects with positive people.
          </p>
          {/* <SocialIcons /> */}
        </div>
      </div>
    </div>
  );
}
