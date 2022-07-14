import React, { useRef, useState, useEffect } from "react";
import classes from "./Detail.module.css";
import { Submit } from "./Submit/Submit";
import { useNavigate } from "react-router-dom";
import { Badge } from "./badge/Badge";
import { SubHeader } from "./sub-header/SubHeader";
import { setData, getData } from "./server";

export const Languages = () => {
  const [language, setLanguage] = useState("");
  const [languages, setLanguages] = useState([]);
  const langRef = useRef();
  let navigate = useNavigate();

  const Push = async () => {
    setData("languages", [...languages]).then(() => {
      navigate("/layout/certificates");
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

  useEffect(() => {
    getData("languages", setLanguages);
    return () => setLanguages([]);
  }, []);

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
