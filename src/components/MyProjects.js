import React from "react";
import "../components/Home.css";
import { Link } from "react-router-dom";
import "../components/MyProjects.css";
import { animated } from "react-spring/renderprops";
import { Spring } from "react-spring/renderprops";
import { motion } from "framer-motion";

function MyProjects() {
  return (
    <Spring
      from={{ opacity: 0, marginLeft: -500 }}
      to={{ opacity: 1, marginLeft: 0 }}
    >
      {(props) => (
        <animated.div style={props} className="projects-main-div">
          <div className="projects-div">
            <motion.a
              // whileHover={{
              //   transition: { duration: 0.4 },
              //   scale:1.05,
              //   textShadow:"0px 0px 15px rgb(95,244,255)",
              //   boxShadow:"0px 0px 10px rgb(255,255,255)",
              //   }}

              id="project1"
              className="a-links"
              href="https://natureall.netlify.app/"
              target="_blank"
            >
              {/* <p>NATURE ALL PROJECT JAVA SCRIPT AND REACT</p> */}
              <p>
                NatureAll / React Full Stack project
                <br />- View -
              </p>
              {/* <p> - View - </p> */}
              {/* <img src="./NatureAll.png" placeholder="NatureAll"/> */}
            </motion.a>
            <motion.a
              //  whileHover={{
              //   transition: { duration: 0.4 },
              //   scale:1.05,
              //   textShadow:"0px 0px 15px rgb(95,244,255)",
              //   boxShadow:"0px 0px 10px rgb(255,255,255)",
              //   }}
              id="project2"
              className="a-links"
              href="https://nutriyoga.netlify.app/"
              target="_blank"
            >
              <p>
                NutriYoga / React Front End project
                <br />- View -
              </p>
              {/* <img src="./NutriYoga.png"/> */}
            </motion.a>
            <motion.a
              // whileHover={{
              //   transition: { duration: 0.4 },
              //   scale:1.05,
              //   textShadow:"0px 0px 15px rgb(95,244,255)",
              //   boxShadow:"0px 0px 10px rgb(255,255,255)",
              //   }}
              id="project3"
              className="a-links"
              href="https://week-4-game-project.github.io/2d-tower-defense/"
              target="_blank"
            >
              <p>
                Grandmass vs Critters / Kanvas / OOP game
                <br />- View -
              </p>
              {/* <img src="./Grandmas.png"/> */}
            </motion.a>
            <motion.a
              //  whileHover={{
              //   transition: { duration: 0.4 },
              //   scale:1.05,
              //   textShadow:"0px 0px 15px rgb(95,244,255)",
              //   boxShadow:"0px 0px 10px rgb(255,255,255)",
              //   }}
              id="project4"
              className="a-links"
              href="https://ux-portfolio-project.github.io/ux-project/index.html"
              target="_blank"
            >
              <p>
                Reggie Willis portfolio / Front End Project
                <br />- View -
              </p>
              {/* <img src="./Reggie.png"/> */}
            </motion.a>
            <motion.a
              //  whileHover={{
              //   transition: { duration: 0.4 },
              //   scale:1.05,
              //   textShadow:"0px 0px 15px rgb(95,244,255)",
              //   boxShadow:"0px 0px 10px rgb(255,255,255)",
              //   }}
              id="project5"
              className="a-links"
              href="https://www.ars.rs/"
              target="_blank"
            >
              <p>
                ARS Painting store / 2015 Full Stack Project
                <br />- View -
              </p>
              {/* <img src="./Ars.png"/> */}
            </motion.a>
            <motion.a
              //  whileHover={{
              //   transition: { duration: 0.4 },
              //   scale:1.05,
              //   textShadow:"0px 0px 15px rgb(95,244,255)",
              //   boxShadow:"0px 0px 10px rgb(255,255,255)",
              //   }}
              id="project6"
              className="a-links"
              href="http://www.kita-wolkenland.ch/"
              target="_blank"
            >
              <p>
                Kita Wolkenland/ 2015 Front End Project
                <br />- View -
              </p>
              {/* <img src="./Kita.png"/> */}
            </motion.a>
            <motion.a
              // whileHover={{
              //   transition: { duration: 0.4 },
              //  scale:1.05,
              //  textShadow:"0px 0px 15px rgb(95,244,255)",
              //  boxShadow:"0px 0px 10px rgb(255,255,255)",
              //   }}
              id="project7"
              className="a-links"
              href="https://www.orthodoxchurch.ch/sr"
              target="_blank"
            >
              <p>
                Orthodox Church Switzerland / 2015 Front End Project
                <br />- View -
              </p>
              {/* <img src="./Church.png"/> */}
            </motion.a>
            <motion.a
              //  whileHover={{
              //   transition: { duration: 0.4 },
              //   scale:1.05,
              //   textShadow:"0px 0px 15px rgb(95,244,255)",
              //   boxShadow:"0px 0px 10px rgb(255,255,255)",
              //   }}
              id="project8"
              className="a-links"
              href="https://www.jurpm.ch/en/"
              target="_blank"
            >
              <p>
                {" "}
                Gianni Fröhlich / 2015 Front End Project
                <br />- View -
              </p>
              {/* <img src="./Gianni.png"/> */}
            </motion.a>
          </div>
          <div className="buttons-div-projects">
            <motion.div
              className="motion-button1-projects"
              whileHover={{
                scale: 1.05,
                textShadow: "0px 0px 15px rgb(95,244,255)",
                boxShadow: "0px 0px 10px rgb(95,244,255)",
              }}
            >
              <Link to="/">Home</Link>
            </motion.div>
            <motion.div
              className="motion-button2-projects"
              whileHover={{
                scale: 1.05,
                textShadow: "0px 0px 15px rgb(95,244,255)",
                boxShadow: "0px 0px 15px rgb(95,244,255)",
              }}
            >
              <Link to="/contact">Contact</Link>
            </motion.div>
          </div>
        </animated.div>
      )}
    </Spring>
  );
}

export default MyProjects;
