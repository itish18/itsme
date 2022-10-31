import { ImGithub } from "react-icons/im";
import { TfiLinkedin } from "react-icons/tfi";

import classes from "../styles/About.module.css";

const About = () => {
  return (
    <div className={classes.flex} id="about">
      <h1 className={classes.heading}>About me</h1>
      <div className={classes.border}></div>
      <div className={classes.box}>
        <div className={classes.left}>
          <h2 className={classes.heading2}>
            A <span className={classes.span}>Student</span> who can{" "}
            <span className={classes.span}>Develop</span>
          </h2>
          <h3 className={classes.heading3}>
            Hello there! It's{" "}
            <span className={classes.span}>&#60;Itish Verma /&#62;</span>
          </h3>
          <p className={classes.text}>
            A coding enthusiast currently learning Data structures and
            Algorithms
          </p>
          <div className={classes.flex2}>
            <button className={classes.button}>
              <ImGithub
                className={classes.icon}
                onClick={() => {
                  window.open("https://github.com/itish18");
                }}
              />
            </button>
            <button className={`${classes.button}  ${classes.link}`}>
              <TfiLinkedin
                className={classes.icon}
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/itish-verma-303933182"
                  );
                }}
              />
            </button>
          </div>
        </div>
        <div className={classes.right}>
          {/* <img src="/Capture.JPG" className={classes.image} /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
