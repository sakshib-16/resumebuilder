import React, { useRef, useState } from "react";
import classes from "./Detail.module.css";
import { Submit } from "./Submit/Submit";
import { ref, set, onValue } from "firebase/database";
import db from "../../../Firebase/Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { userid } from "./variable/variable";

export const Summary = ({ userid }) => {
  const [summary, setSummary] = useState({
    summry: null,
  });

  const summry = useRef();
  let navigate = useNavigate();

  const Push = async (e) => {
    e.preventDefault();
    const { summry } = summary;

    set(ref(db, "container/" + userid + "/summary"), {
      summry,
    })
      .then(() => {
        navigate(`/temp/preview`);
      })
      .catch((error) => {
        // The write failed...
      });
  };
  return (
    <div className={classes.container}>
      <h1>Summary</h1>

      <div className={classes.innerContainer}>
        <div className={classes.row}>
          <input
            type="text"
            placeholder="Your Professional Summary"
            onChange={(e) => setSummary({ ...summary, summry: e.target.value })}
          />
          <Submit click={Push} />
        </div>
      </div>
    </div>
  );
};
