import style from "../styles/components/skillCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SkillCard({ icon, end, skills }) {
  return (
    <div className={style.skill_card}>
      <i>
        <FontAwesomeIcon icon={icon} size="2x" />
      </i>

      <h3>{end}</h3>
      {skills.map((skill, index) => {
        return <p key={index}>{skill}</p>;
      })}
    </div>
  );
}
