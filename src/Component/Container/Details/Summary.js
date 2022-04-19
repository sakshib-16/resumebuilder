import React, { useState } from "react";
import classes from "./Detail.module.css";
import { Submit } from "./Submit/Submit";
import { ref, set, onValue } from "firebase/database";
import db from "../../../Firebase/Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { SubHeader } from "./sub-header/SubHeader";
import moment from "moment";

export const Summary = () => {
  const [summary, setSummary] = useState({
    summary: null,
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
    const { summary } = summary;

    set(ref(db, "container/" + userid + "/summary"), {
      summary,
    })
      .then(() => {
        navigate(`/layout/summary`);
      })
      .catch((error) => {
        // The write failed...
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
            onChange={(e) =>
              setSummary({ ...summary, summary: e.target.value })
            }
          />
          <Submit />
        </div>
      </div>
    </div>
  );
};
