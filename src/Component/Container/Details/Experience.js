import React, { useState, useEffect } from "react";
import { ExperienceWrapper } from "./ExperienceWrapper";
import { Submit } from "./Submit/Submit";
import { SubHeader } from "./sub-header/SubHeader";
import classes from "./Detail.module.css";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { setData, getData } from "./server";

export const Experience = ({ userid }) => {
  const [experience, setExperience] = useState();
  const [json, setJson] = useState([]);
  const [counter, setCounter] = useState(0);
  let navigate = useNavigate();
  const [fetchedData, setFetchedData] = useState("");
  const dataRoute = [userid, "experience"];

  const handleClick = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    counter > 1 && setJson([...json, experience]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  const Push = () => {
    setJson([...json, experience]);
    setData(dataRoute, [...json]).then(() => {
      navigate("/layout/education");
    });
  };

  useEffect(() => {
    getData(dataRoute, [fetchedData, setFetchedData]);
    setCounter(fetchedData.length)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedData]);

  console.log(fetchedData);

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
              count={counter}
              key={i}
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
