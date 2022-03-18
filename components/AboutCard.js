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
            I'm a React developer who has a serious passion for web and mobile
            applications. I enjoy using code to make a difference in the world
            and to create awesome applications.
          </p>
          <p>
            I love to solve problems and I never give up on finding a solution
            for a problem. I am a{" "}
            <a href='https://reactnative.dev/' target='_blank'>
              React Native,
            </a>{" "}
            <a href='https://reactjs.org/' target='_blank'>
              ReactJS
            </a>{" "}
            and{" "}
            <a href='https://firebase.google.com/' target='_blank'>
              Firebase
            </a>{" "}
            fan boy. I am a simple guy who is a big fan of challenges.
          </p>
          <p>I enjoy working with a great team that can have fun and code.</p>
          {/* <SocialIcons /> */}
        </div>
      </div>
    </div>
  );
}
