import AboutCard from "../components/AboutCard";
import Layout from "../components/Layout";
import Projects from "../components/projects";
import SkillCard from "../components/SkillsCard";
import style from "../styles/Home.module.scss";
import Blog from "../components/blog";
import Contact from "../components/contact";
import Footer from "../components/Footer";

import {
  faDesktop,
  faDatabase,
  faMobileAlt,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const Home = ({ posts }) => {
  const [isScrolling, setScrolling] = useState(0);

  function scrolling(e) {
    const currentY = e.target.scrollTop;
    setScrolling(currentY);
  }
  return (
    <Layout pageScroll={isScrolling}>
      <div className={style.background} onScroll={scrolling}>
        {/* landing card */}
        <div className={style.landing_section} id='home'>
          <div className={style.intro_card}>
            {/* <img src='/images/intro_img.webp' /> */}
            <div>
              <p>Hello hello, my name is</p>
              <h2>Sihle Kambula,</h2>
              <h3>Frontend Web Developer</h3>
              <h4>
                I am a front-end web developer / freelancer from Joburg, South
                Africa. I enjoy building everything from small business site,
                personal websites and interactive web apps.
              </h4>
              <a href='mailto:kambulasihle@gmail.com' className={style.btn}>
                Hire Me
              </a>
            </div>
          </div>
        </div>

        {/* start section */}
        <main>
          {/* About section */}
          <section className={style.about} id='about'>
            <div className={style.about_glass}>
              <h1>
                About <span>Me</span>
              </h1>

              <div className={style.card_section}>
                <AboutCard />
                <div className={style.cards_of_skills}>
                  {/* <h3
                    style={{ margin: "10px", fontWeight: "400", opacity: 0.8 }}
                  >
                    Skills
                  </h3> */}
                  <div className={style.skill_card}>
                    <SkillCard
                      icon={faDesktop}
                      end='Frontend'
                      skills={["React.JS", "Next.JS", "JavaScript", "Sass"]}
                    />
                    <SkillCard
                      icon={faDatabase}
                      end='Backend'
                      skills={["Firebase", "Node.JS", "MongoDB", "PHP"]}
                    />
                  </div>
                  <div className={style.skill_card}>
                    <SkillCard
                      icon={faMobileAlt}
                      end='Mobile Apps'
                      skills={["Flutter", "Dart"]}
                    />
                    <SkillCard
                      icon={faSitemap}
                      end='Tools'
                      skills={["GitHub", "Netlify", "Heroku", "Figma"]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects section */}

          <section id='projects'>
            <Projects />
          </section>

          {/* Blog section */}

          <section id='blog'>
            <Blog blogs={posts} />
          </section>

          {/* Contact section */}

          <section id='contact'>
            <Contact />
          </section>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const query = encodeURIComponent(`*[ _type == "post"]`);
  const url = `https://gmrv3avf.api.sanity.io/v1/data/query/production?query=${query}`;
  // fetch post from sanity
  const result = await fetch(url).then((data) => data.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
      },
    };
  }
}

export default Home;
