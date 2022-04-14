import React, { useState } from "react";
import classes from "./Detail.module.css";
import { Submit } from "./Submit/Submit";
import { ref, set, onValue } from "firebase/database";
import db from "../../../Firebase/Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Languages = () => {
  const [language, setLanguage] = useState({
    language: null,
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
