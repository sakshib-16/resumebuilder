import React, { useState } from "react";
import classes from "./Detail.module.css";
import { Submit } from "./Submit/Submit";
import { ref, set, onValue } from "firebase/database";
import db from "../../../Firebase/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userid } from "./variable/variable";

export const Languages = () => {
  const [language, setLanguage] = useState({
    language: null,
  });

  let navigate = useNavigate();

  const Push = async (e) => {
    e.preventDefault();
    const { languages } = language;
    set(ref(db, "container/" + userid + "/languages"), {
      languages,
    })
      .then(() => {
        navigate(`/layout/certificates`);
      })
      .catch((error) => {
        // The write failed...
      });
  };

  return (
    <div className={classes.container}>
      <h1>Languages</h1>

      <div className={classes.innerContainer}>
        <div className={classes.row}>
          <input
            type="text"
            placeholder="Languages (E.g. English, Hindi)"
            onChange={(e) =>
              setLanguage({ ...language, languages: e.target.value })
            }
          />
          <Submit click={Push} />
        </div>
      </div>
    </div>
  );
};
