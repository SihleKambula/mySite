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
// import sanityClient from "./api/client";
// import sanityClient from "@sanity/client";
// const client = sanityClient({
//   projectId: "gmrv3avf",
//   dataset: "production",
//   useCdn: true,
// });

import {
  faDesktop,
  faDatabase,
  faMobileAlt,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";

const Home = ({ posts }) => {
  return (
    <Layout>
      <div className={style.background}>
        {/* landing card */}
        <div className={style.landing_section} id="home">
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
                      icon={faDesktop}
                      end="Frontend"
                      skills={["SASS", "JavaScript", "React.JS", "Next.JS"]}
                    />
                    <SkillCard
                      icon={faDatabase}
                      end="Backend"
                      skills={["Firebase", "Node.JS", "Express.JS", "MongoDB"]}
                    />
                  </div>
                  <h3 style={{ margin: "10px" }}>Interests</h3>
                  <div className={style.skill_card}>
                    <SkillCard
                      icon={faMobileAlt}
                      end="Mobile App Development"
                      skills={["Flutter", "Dart"]}
                    />
                    <SkillCard
                      icon={faSitemap}
                      end="Algorithms"
                      skills={["Codewars", "HackerRank"]}
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

          {/* Blog section */}

          <section id="blog">
            <Blog blogs={posts} />
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
