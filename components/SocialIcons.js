import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../styles/components/socialIcons.module.scss";

export default function SocialIcons() {
  return (
    <div className={style.social_icons}>
      <a href='https://twitter.com/alphaskam' target='blank'>
        <FontAwesomeIcon icon={["fab", "twitter"]} size='2x' />
        <p>twitter</p>
      </a>
      <a href='https://www.instagram.com/alphask_dev/' target='blank'>
        <FontAwesomeIcon icon={["fab", "instagram"]} size='2x' />
        <p>instagram</p>
      </a>
      <a href='https://www.linkedin.com/in/sihle-kambula' target='blank'>
        <FontAwesomeIcon icon={["fab", "linkedin-in"]} size='2x' />
        <p>linkedin</p>
      </a>
      <a href='https://github.com/SihleKambula' target='blank'>
        <FontAwesomeIcon icon={["fab", "github"]} size='2x' />
        <p>github</p>
      </a>
    </div>
  );
}
