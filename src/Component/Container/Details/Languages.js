import React, { useRef, useState } from "react";
import classes from "./Detail.module.css";
import { Submit } from "./Submit/Submit";
import { ref, set, onValue } from "firebase/database";
import db from "../../../Firebase/Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Badge } from "./badge/Badge";
import { SubHeader } from "./sub-header/SubHeader";

export const Languages = () => {
  const [language, setLanguage] = useState("");
  const [languages, setLanguages] = useState([]);
  const [userid, setUserId] = useState("");
  const langRef = useRef();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (language) {
      setLanguages([...languages, { id: Date.now(), value: language }]);
      setLanguage("");
      langRef.current.value = "";
    }
  };

  return (
    <div className={classes.container}>
      <SubHeader heading="Languages" />

      <div className={classes.innerContainer}>
        <div className={classes.row}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              ref={langRef}
              placeholder="Languages (E.g. English, Hindi)"
              onChange={(e) => setLanguage(e.target.value)}
            />
          </form>

          {languages.map((lang, key) => {
            return (
              <Badge
                skills={languages}
                value={lang.value}
                key={key}
                id={lang.id}
                remove={(rm) => setLanguages(rm)}
              />
            );
          })}

          <Submit click={Push} />
        </div>
      </div>
    </div>
  );
};
