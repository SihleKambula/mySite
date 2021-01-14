import style from "../styles/components/skillCard.module.scss";

export default function SkillCard({ icon, end, skills }) {
  return (
    <div className={style.skill_card}>
      <i>{icon}</i>
      <h3>{end}</h3>
      {skills.map((skill) => {
        return <p>{skill}</p>;
      })}
    </div>
  );
}
