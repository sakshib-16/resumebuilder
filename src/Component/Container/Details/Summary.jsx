import React, { useState, useEffect } from "react";
import classes from "./Detail.module.css";
import { Submit } from "./Submit/Submit";
import { useNavigate } from "react-router-dom";
import { SubHeader } from "./sub-header/SubHeader";
import { setData, getData } from "./server";

export const Summary = () => {
  const [summary, setSummary] = useState(null);

  let navigate = useNavigate();

  const Push = async () => {
    setData("summary", summary).then(() => {
      navigate("/temp/preview");
    });
  };

  useEffect(() => {
    getData("summary", setSummary);
    return () => setSummary(null);
  }, []);

  return (
    <div className={classes.container}>
      <SubHeader heading="Summary" />
      <div className={classes.innerContainer}>
        <div className={classes.row}>
          <input
            type="text"
            value={summary || ""}
            placeholder="Your Professional Summary"
            onChange={(e) => setSummary(e.target.value)}
          />
          <Submit click={Push} text="Preview" />
        </div>
      </div>
    </div>
  );
};
