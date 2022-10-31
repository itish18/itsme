import { BsCodeSlash } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiJavascript,
  SiJava,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

import classes from "../styles/Skills.module.css";

const Skills = () => {
  const list = [
    { skill: "Web development", logo: <BsCodeSlash fontSize="1.5rem" /> },
    { skill: "React.js", logo: <FaReact fontSize="1.5rem" /> },
    { skill: "Redux", logo: <SiRedux fontSize="1.5rem" /> },
    { skill: "Javascript", logo: <SiJavascript fontSize="1.5rem" /> },
    { skill: "Express.js", logo: "" },
    { skill: "Java", logo: <SiJava fontSize="1.5rem" /> },
    { skill: "SQL", logo: <SiMicrosoftsqlserver fontSize="1.5rem" /> },
    { skill: "MongoDB", logo: <SiMongodb fontSize="1.5rem" /> },
    { skill: "HTML", logo: <SiHtml5 fontSize="1.5rem" /> },
    { skill: "CSS", logo: <SiCss3 fontSize="1.5rem" /> },
  ];

  return (
    <div className={classes.flex} id="skills">
      <h1 className={classes.heading}>Skills</h1>
      <div className={classes.border}></div>
      <div className={classes.box}>
        <div className={`${classes.row} ${classes.row1}`}>
          {list.slice(0, 3).map((l) => (
            <div className={classes.item} key={l.skill}>
              {l.logo}
              <p>{l.skill}</p>
            </div>
          ))}
        </div>
        <div className={`${classes.row} ${classes.row2}`}>
          {list.slice(3, 7).map((l) => (
            <div className={classes.item} key={l.skill}>
              {l.logo}
              <p>{l.skill}</p>
            </div>
          ))}
        </div>
        <div className={`${classes.row} ${classes.row3}`}>
          {list.slice(7, 10).map((l) => (
            <div className={classes.item} key={l.skill}>
              {l.logo}
              <p>{l.skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
