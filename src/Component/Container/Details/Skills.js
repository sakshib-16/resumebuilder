import React, { useEffect, useRef, useState } from "react";
import classes from "./Detail.module.css";
import { Submit } from "./Submit/Submit";
import { ref, set, onValue } from "firebase/database";
import db from "../../../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { Badge } from "./badge/Badge";
import { useSelector } from "react-redux";

export const Skills = () => {
  const [skill, setSkill] = useState(null);
  const [skills, setSkills] = useState([]);
  const skillRef = useRef();
  const userid = useSelector((id) => id.userIdReducer);

  const userid = sessionStorage.getItem("uid");
  let navigate = useNavigate();

  const Push = (e) => {
    e.preventDefault();
    const { skills } = skill;
    set(ref(db, "container/" + userid + "/skills"), {
      skills,
    })
      .then(() => {
        navigate(`/layout/languages`);
      })
      .catch((error) => {
        // The write failed...
      });
  };

  // const handleKeyUp = (e) => {
  //   if (e.keyCode === 13) {
  //     // const ref = { id: id, value: skillRef.current.value };
  //     setSkills([...skills, { id: Date.now(), value: skill }]);
  //     skillRef.current.value = "";
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("keyup", handleKeyUp);

  //   return () => {
  //     window.removeEventListener("keyup", handleKeyUp);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSkills([...skills, { id: Date.now(), value: skill }]);
    skillRef.current.value = "";
  };

  return (
    <div className={classes.container}>
      <h1>Skills</h1>

      <div className={classes.innerContainer}>
        <div className={classes.row}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Skills (E.g. Design, React, MySQL)"
              ref={skillRef}
              onChange={(e) => setSkill(e.target.value)}
            />
          </form>

          {skills.map((skill, key) => {
            return (
              <Badge
                skills={skills}
                value={skill.value}
                key={key}
                id={skill.id}
                remove={(rm) => setSkills(rm)}
              />
            );
          })}

          <Submit click={Push} />
        </div>
      </div>
    </div>
  );
};
