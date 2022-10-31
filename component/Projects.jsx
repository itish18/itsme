import classes from "../styles/Projects.module.css";

import image1 from "../public/talkit.jpg";
import image2 from "../public/Get4U.jpg";
import image3 from "../public/resume.JPG";
import image4 from "../public/sleep.jpg";
import image5 from "../public/manage.jpg";

const ProjectItem = ({ name, desc, image, link }) => {
  return (
    <div
      onClick={() => window.open(link)}
      className={classes.items}
      style={{
        background: `url(${image}) no-repeat`,
      }}
    >
      <div className={classes.item}>
        <p className={classes.name}>{name}</p>
        <p className={classes.desc}>{desc}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  const list = [
    {
      name: "Talkit",
      link: "https://ta1kit.herokuapp.com",
      desc: "A social media platform where people can interact with each other.",
      image: image1.src,
    },
    {
      name: "Get4U",
      link: "https://get4u.herokuapp.com/",
      desc: "An E-commerce website which can help people to make their business online.",
      image: image2.src,
    },
    {
      name: "Resume Builder",
      link: "https://resumecreater01.herokuapp.com/",
      desc: "Website which can can be used to create a job ready resume.",
      image: image3.src,
    },
    {
      name: "Appointment Manager",
      link: "https://aqueous-earth-95645.herokuapp.com/",
      desc: "A website that can help you to remember your appointments.",
      image: image4.src,
    },
    {
      name: "Sleep Tracker",
      link: "https://dailysleeptrackr.herokuapp.com/",
      desc: "Now track and manage your sleep schedule with help of this website.",
      image: image5.src,
    },
  ];
  return (
    <div className={classes.flex} id="projects">
      <h1 className={classes.heading}>Projects</h1>
      <div className={classes.border}></div>
      <div className={classes.box}>
        <div className={classes.list}>
          {list.map((l) => (
            <ProjectItem
              name={l.name}
              desc={l.desc}
              key={l.name}
              image={l.image}
              link={l.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
