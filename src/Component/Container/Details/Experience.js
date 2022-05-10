import React, { useState, useRef, useEffect } from "react";
import { ExperienceWrapper } from "./ExperienceWrapper";
import { Submit } from "./Submit/Submit";
import { SubHeader } from "./sub-header/SubHeader";
import classes from "./Detail.module.css";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import { ref, set, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { setData } from "./server";

export const Experience = ({ userid }) => {
  const [counter, setCounter] = useState(0);
  // const [experienceContainer, setExperienceContainer] = useState([]);

  const experienceContainer = [];
  let navigate = useNavigate();

  let experience = useSelector((i) => i.experienceReducer);

  const handleClick = () => {
    setCounter(counter + 1);
    // setExperienceContainer([...experience, ...experience]);
    experienceContainer.push(experience);
    console.log(experienceContainer);
  };
  const Push = async (e) => {
    setData([userid, "experience"], experience).then(() => {
      navigate("/layout/education");
    });
  };
  return (
    <>
      <div className={classes.container}>
        <SubHeader heading="Experience" />
        <div className={classes.borderBox}>
          <h2 onClick={handleClick}>
            <AddIcon className={classes.addIcon} /> Add Experience
          </h2>
        </div>
        {Array.from(Array(counter)).map((c, index) => {
          return <ExperienceWrapper userid={userid} />;
        })}
        <Submit click={Push} />
      </div>
    </>
  );
};
