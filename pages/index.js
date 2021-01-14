import AboutCard from "../components/AboutCard";
import Layout from "../components/Layout";
import Projects from "../components/projects";
import SkillCard from "../components/SkillsCard";
import style from "../styles/Home.module.scss";
import Blog from "../components/blog";
import Contact from "../components/contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Layout>
      <div className={style.background}>
        {/* landing card */}
        <div className={style.landing_section} id="home">
          <div className={style.intro_card}>
            <img src="/images/full-body.jpeg" />
            <div>
              <h1>Hi, I'm</h1>
              <h2>
                Sihle <span>Kambula.</span>
              </h2>
              <h3>I use code to solve problems.</h3>
            </div>
          </div>
        </div>

        {/* start section */}
        <main>
          {/* About section */}
          <section className={style.about} id="about">
            <div className={style.about_glass}>
              <h1>
                About <span>Me</span>
              </h1>

              <div className={style.card_section}>
                <AboutCard />
                <div className={style.cards_of_skills}>
                  <div className={style.skill_card}>
                    <SkillCard
                      icon="icon"
                      end="Frontend"
                      skills={["HTML & CSS", "JavaScript", "SASS", "React.JS"]}
                    />
                    <SkillCard
                      icon="icon"
                      end="Backend"
                      skills={["Node.JS", "MySQL", "MongoDB", "Firebase"]}
                    />
                  </div>
                  <h3 style={{ margin: "10px" }}>Interests</h3>
                  <div className={style.skill_card}>
                    <SkillCard
                      icon="icon"
                      end="Mobile App Development"
                      skills={["Flutter", "Dart", "Kotlin"]}
                    />
                    <SkillCard
                      icon="icon"
                      end="Algorithms"
                      skills={["Data Structure", "Codewars", "HackerRank"]}
                    />
                  </div>
                </div>
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
