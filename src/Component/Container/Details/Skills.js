import React, { useEffect, useRef, useState } from "react";
import classes from "./Detail.module.css";
import { Submit } from "./Submit/Submit";
import { ref, set, onValue } from "firebase/database";
import db from "../../../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { Badge } from "./badge/Badge";
import { useSelector } from "react-redux";
import { SubHeader } from "./sub-header/SubHeader";
import { userid } from "./variable/variable";
import { setData } from "./server";

export const Skills = ({ userid }) => {
  const [skill, setSkill] = useState(null);
  const [skills, setSkills] = useState([]);
  const skillRef = useRef();

  let navigate = useNavigate();

  const Push = (e) => {
    setData([userid, "skills"], [...skills]).then(() => {
      navigate("/layout/languages");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (skill) {
      setSkills([...skills, { id: Date.now(), value: skill }]);
      setSkill("");
      skillRef.current.value = "";
    }
  };

  return (
    <div className={classes.container}>
      <SubHeader heading="Skills" />

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
