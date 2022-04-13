import React, { useState } from "react";
import classes from "./Detail.module.css";
import { Submit } from "./Submit/Submit";
import { ref, set, onValue } from "firebase/database";
import db from "../../../Firebase/Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Skills = () => {
  const [skill, setSkill] = useState({
    skills: null,
  });
  const [userid, setUserId] = useState("");

  let navigate = useNavigate();
  //getting uid
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUserId(uid);
      // ...
    } else {
    }
  });

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
          />

          <Submit click={Push} />
        </div>
      </div>
    </div>
  );
};
