import style from "../styles/components/contact.module.scss";

export default function Contact() {
  return (
    <div className={style.contact}>
      <h1>
        Get In <span>Touch</span>
      </h1>
      <div className={style.container}>
        <p>
          Have a question or want to work together? My inbox is always open.
        </p>
        <a href="mailto:kambulasihle@gmail.com" className={style.btn}>
          Email Me
        </a>
        <div>
          <i>Github</i>
          <i>LinkedIn</i>
          <i>Twitter</i>
        </div>
      </div>
    </div>
  );
}
