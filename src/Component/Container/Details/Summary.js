import React, { useRef, useState } from "react";
import classes from "./Detail.module.css";
import { Submit } from "./Submit/Submit";
import { ref, set, onValue } from "firebase/database";
import db from "../../../Firebase/Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { SubHeader } from "./sub-header/SubHeader";
import { setData } from "./server";

export const Summary = ({ userid }) => {
  const [summary, setSummary] = useState(null);

  const summry = useRef();
  let navigate = useNavigate();

  const Push = async (e) => {
    setData([userid, "summary"], summary).then(() => {
      navigate("/temp/preview");
    });
  };
  return (
    <div className={classes.container}>
      <SubHeader heading="Summary" />
      <div className={classes.innerContainer}>
        <div className={classes.row}>
          <input
            type="text"
            placeholder="Your Professional Summary"
            onChange={(e) => setSummary(e.target.value)}
          />
          <Submit click={Push} />
        </div>
      </div>
    </div>
  );
};
