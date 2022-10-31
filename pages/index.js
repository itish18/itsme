import { useState } from "react";

import About from "../component/About";
import Contact from "../component/Contact";
import Main from "../component/Main";
import Projects from "../component/Projects";
import Resume from "../component/Resume";
import Skills from "../component/Skills";

import classes from "../styles/index.module.css";

const Index = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={classes.container}>
      <Main setShow={setShow} />
      {show ? (
        <>
          <About />
          <Resume />
          <Skills />
          <Projects />
          <Contact />
        </>
      ) : null}
    </div>
  );
};

export default Index;
