import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import classes from "../styles/Main.module.css";

const Main = ({ setShow }) => {
  const router = useRouter();

  const [showText, setShowText] = useState({
    first: false,
    second: false,
    third: false,
  });

  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText({ first: true, second: false, third: false });
    }, 11000);
    return () => clearTimeout(timer);
  }, []);

  const list = [
    { name: "About me", link: "#about" },
    { name: "Resume", link: "#resume" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact me", link: "#contact" },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.videoBox}>
        <video autoPlay loop muted className={classes.video}>
          <source src="/space.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={classes.flex}>
        <img src="/ufo1.png" className={classes.ufo} />
        <div className={classes.box}>
          {showText.first && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1000)
                  .changeDelay(70)
                  .typeString("Hi... How are you ? ")

                  .callFunction(() => {
                    setShowText({ first: true, second: true, third: false });
                  })

                  .start();
              }}
            />
          )}
          {showText.second && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(70)
                  .typeString("Hope you are having a good day.")
                  .callFunction(() => {
                    setShowText({ first: true, second: true, third: true });
                  })
                  .start();
              }}
            />
          )}
          {showText.third && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(70)
                  .typeString("So what would you like to see first.")
                  .callFunction(() => {
                    setShowList(true);
                    setShow(true);
                  })
                  .start();
              }}
            />
          )}
        </div>
        {showList && (
          <div className={classes.lists}>
            {list.map((l) => (
              <p
                key={l.name}
                className={classes.item}
                onClick={() => router.push(l.link)}
              >
                {l.name}
              </p>
            ))}
          </div>
        )}
        {showList ? (
          <div className={classes.imageDiv}>
            <img
              className={classes.image}
              src="https://cdn4.iconfinder.com/data/icons/whsr-january-flaticon-set/512/rocket.png"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Main;
