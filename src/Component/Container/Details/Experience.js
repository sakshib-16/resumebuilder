import React, { useState, useEffect } from "react";
import { ExperienceWrapper } from "./ExperienceWrapper";
import { Submit } from "./Submit/Submit";
import { SubHeader } from "./sub-header/SubHeader";
import classes from "./Detail.module.css";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { setData, getData } from "./server";

export const Experience = ({ userid }) => {
  const [experience, setExperience] = useState("");
  const [json, setJson] = useState([]);
  const [counter, setCounter] = useState(0);
  let navigate = useNavigate();
  const dataRoute = [userid, "experience"];

  const handleClick = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    experience && setJson([...json, experience]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  const Push = () => {
    setData(dataRoute, [...json]).then(() => {
      navigate("/layout/education");
    });
  };

  useEffect(() => {
    getData(dataRoute, setJson);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (json.length && !counter) setCounter(json.length);

  return (
    <>
      <div className={classes.container}>
        <SubHeader heading="Experience" />
        <div className={classes.borderBox}>
          <h2 onClick={handleClick}>
            <AddIcon className={classes.addIcon} /> Add Experience
          </h2>
        </div>
        {Array.from(Array(counter)).map((c, i) => {
          return (
            <ExperienceWrapper
              key={i}
              data={json?.[i]}
              set={(name, e) =>
                setExperience({
                  ...experience,
                  [name]: e,
                })
              }
            />
          );
        })}
        <Submit click={Push} />
      </div>
    </>
  );
};
