import React, { useState, useRef, useEffect } from "react";
import Datetime from "react-datetime";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Submit } from "./Submit/Submit";
import { ref, set, onValue } from "firebase/database";
import db from "../../../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { setData } from "./server";
import { AddButton } from "./AddButton";
import classes from "./Detail.module.css";

export const Education = ({ userid }) => {
  const [education, setEducation] = useState({
    university: null,
    degree: null,
    graduationyear: null,
    field: null,
    accomplishment: null,
  });

  let navigate = useNavigate();

  const [fetchedData, setFetchedData] = useState("");

  const university = useRef();
  const degree = useRef();
  const graduationyear = useRef();
  const field = useRef();
  const accomplishment = useRef();

  //getting uid

  const getData = () => {
    const starCountRef = ref(db, "container/" + userid + "/education");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (!fetchedData) setFetchedData(data);

      for (let i in fetchedData) eval(i).current.value = fetchedData[i] || "";
    });
  };

  useEffect(() => {
    getData();
  }, [fetchedData]);

  const Push = async (e) => {
    setData([userid, "education"], education).then(() => {
      navigate("/layout/skills");
    });
  };

  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  return (
    <div>
      <AddButton click={handleClick} title="Education" />
      {Array.from(Array(counter)).map((c, index) => {
        return (
          <div className={classes.innerContainer}>
            <div className={classes.row}>
              <input
                type="text"
                name="university"
                placeholder="University/School"
                onChange={(e) =>
                  setEducation({
                    ...education,
                    university: e.target.value,
                  })
                }
              />
              <input
                type="text"
                name="degree"
                placeholder="Degree"
                onChange={(e) =>
                  setEducation({
                    ...education,
                    degree: e.target.value,
                  })
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
                    inputProps={{
                      placeholder: "Graduation Year",
                    }}
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
                  setEducation({
                    ...education,
                    field: e.target.value,
                  })
                }
              />
              <input
                type="text"
                name="accomplishment"
                placeholder="Accomplishments"
                onChange={(e) =>
                  setEducation({
                    ...education,
                    accomplishment: e.target.value,
                  })
                }
              />
            </div>
          </div>
        );
      })}
      <Submit click={Push} />
    </div>
  );
};
