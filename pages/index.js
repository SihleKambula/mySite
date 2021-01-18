import AboutCard from "../components/AboutCard";
import Layout from "../components/Layout";
import Projects from "../components/projects";
import SkillCard from "../components/SkillsCard";
import style from "../styles/Home.module.scss";
import Blog from "../components/blog";
import Contact from "../components/contact";
import Footer from "../components/Footer";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import {
  faDesktop,
  faDatabase,
  faMobileAlt,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);
  return (
    <Layout>
      <div className={style.background}>
        {/* landing card */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={style.landing_section}
          id="home"
        >
          <div className={style.intro_card}>
            <img src="/images/intro_img.webp" />
            <div>
              <h1>Hi, I'm</h1>
              <h2>
                Sihle <span>Kambula.</span>
              </h2>
              <h3>I use code to solve problems.</h3>
            </div>
          </div>
        </motion.div>

        {/* start section */}
        <main>
          {/* About section */}
          <section className={style.about} id="about">
            <div className={style.about_glass}>
              <motion.h1
                variants={container}
                initial="hidden"
                ref={ref}
                animate={controls}
              >
                About <span>Me</span>
              </motion.h1>

              <div className={style.card_section}>
                <AboutCard />
                <motion.div
                  className={style.cards_of_skills}
                  variants={container}
                  initial="hidden"
                  ref={ref}
                  animate={controls}
                >
                  <div className={style.skill_card}>
                    <SkillCard
                      icon={faDesktop}
                      end="Frontend"
                      skills={["HTML & CSS", "JavaScript", "SASS", "React.JS"]}
                    />
                    <SkillCard
                      icon={faDatabase}
                      end="Backend"
                      skills={["Node.JS", "MySQL", "MongoDB", "Firebase"]}
                    />
                  </div>
                  <h3 style={{ margin: "10px" }}>Interests</h3>
                  <div className={style.skill_card}>
                    <SkillCard
                      icon={faMobileAlt}
                      end="Mobile App Development"
                      skills={["Flutter", "Dart", "Kotlin"]}
                    />
                    <SkillCard
                      icon={faSitemap}
                      end="Algorithms"
                      skills={["Data Structure", "Codewars", "HackerRank"]}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Projects section */}

          <section id="projects">
            <Projects />
          </section>

          {/* Note worthy projects section */}

          {/* <section id="projects">
            <Projects />
          </section> */}

          {/* Blog section */}

          <section id="blog">
            <Blog />
          </section>

          {/* Contact section */}

          <section id="contact">
            <Contact />
          </section>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </Layout>
  );
}
