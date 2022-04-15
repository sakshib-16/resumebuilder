import React, { useState } from "react";
import classes from "./Detail.module.css";
import { Submit } from "./Submit/Submit";
import { ref, set, onValue } from "firebase/database";
import db from "../../../Firebase/Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const Skills = () => {
  const [skill, setSkill] = useState({
    skills: null,
  });

  const userid = sessionStorage.getItem("uid");
  let navigate = useNavigate();

  const Push = async (e) => {
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

  return (
    <div className={classes.container}>
      <h1>Skills</h1>

      <div className={classes.innerContainer}>
        <div className={classes.row}>
          <input
            type="text"
            placeholder="Skills (E.g. Design, React, MySQL)"
            onChange={(e) => setSkill({ ...skill, skills: e.target.value })}
            value={skill.skills}
          />

          <Submit click={Push} />
        </div>
      </div>
    </div>
  );
};
