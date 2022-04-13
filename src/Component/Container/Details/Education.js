import React, { useState } from "react";
import classes from "./Detail.module.css";
import AddIcon from "@mui/icons-material/Add";
import Datetime from "react-datetime";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Submit } from "./Submit/Submit";
import { ref, set, onValue } from "firebase/database";
import db from "../../../Firebase/Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export const Education = () => {
  const [education, setEducation] = useState({
    university: null,
    degree: null,
    graduationyear: null,
    field: null,
    accomplishment: null,
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
    const { university, degree, graduationyear, field, accomplishment } =
      education;

    set(ref(db, "container/" + userid + "/education"), {
      university,
      degree,
      graduationyear,
      field,
      accomplishment,
    })
      .then(() => {
        navigate(`/layout/skills`);
      })
      .catch((error) => {
        // The write failed...
      });
  };

  return (
    <div className={classes.container}>
      <h1>Education</h1>
      <div className={classes.borderBox}>
        <h2>
          <AddIcon className={classes.addIcon} /> Add Education
        </h2>
      </div>
      <div className={classes.innerContainer}>
        <div className={classes.row}>
          <input
            type="text"
            name="university"
            placeholder="University/School"
            onChange={(e) =>
              setEducation({ ...education, university: e.target.value })
            }
          />
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            onChange={(e) =>
              setEducation({ ...education, degree: e.target.value })
            }
          />

          <div className={classes.fullWidth}>
            {/* <div className={classes.coverDiv}> */}
            <div className={classes.edYear}>
              <Datetime
                dateFormat="YYYY"
                timeFormat={false}
                renderMonth={false}
                closeOnSelect
                inputProps={{ placeholder: "Graduation Year" }}
                onChange={(e) =>
                  setEducation({
                    ...education,
                    graduationyear: moment(e, "DD-MM-YYYY").format("YYYY"),
                  })
                }
              />
            </div>
            <span>
              <ArrowDropDownIcon className={classes.arrowIcon} />
            </span>
            {/* </div>  */}
          </div>
          <input
            type="text"
            name="field"
            placeholder="Field of Study"
            onChange={(e) =>
              setEducation({ ...education, field: e.target.value })
            }
          />
          <input
            type="text"
            name="accomplishment"
            placeholder="Accomplishments"
            onChange={(e) =>
              setEducation({ ...education, accomplishment: e.target.value })
            }
          />
          <Submit click={Push} />
        </div>
      </div>
    </div>
  );
};
