import { getDownloadURL } from "firebase/storage";
import storageRef from "../firebase";

import classes from "../styles/Resume.module.css";

const Resume = () => {
  const downloadHandler = () => {
    getDownloadURL(storageRef)
      .then((url) => window.open(url))
      .catch((e) => alert(e));
  };
  return (
    <div className={classes.flex} id="resume">
      <h1 className={classes.heading}>Resume</h1>
      <div className={classes.border}></div>
      <div className={classes.box}>
        <div className={classes.container}></div>
        <div className={classes.buttonBox}>
          <button className={classes.button} onClick={downloadHandler}>
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
