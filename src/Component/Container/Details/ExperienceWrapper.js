import React, { useState, useRef, useEffect } from "react";
import moment from "moment";
import { ref, set, onValue } from "firebase/database";
import db from "../../../Firebase/Firebase";
import classes from "./Detail.module.css";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { useSelector, useDispatch } from "react-redux";

export const ExperienceWrapper = ({ userid }) => {
  let dispatch = useDispatch();

  const [experience, setExperience] = useState({
    exjobtitle: null,
    company: null,
    monthfrom: null,
    yearfrom: null,
    monthto: null,
    yearto: null,
    accomplishment: null,
    currentlyworking: false,
  });

  const [fetchedData, setFetchedData] = useState("");

  const exjobtitle = useRef();
  const company = useRef();
  const monthfrom = useRef();
  const yearfrom = useRef();
  const monthto = useRef();
  const yearto = useRef();
  const accomplishment = useRef();

  const getData = () => {
    const starCountRef = ref(db, "container/" + userid + "/experience");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (!fetchedData) setFetchedData(data);
      else {
        // for (let i in fetchedData) eval(i).current.value = fetchedData[i] || "";

        dispatch({ type: "exjobtitle", payload: fetchedData.exjobtitle });
        dispatch({ type: "company", payload: fetchedData.company });
        dispatch({ type: "monthfrom", payload: fetchedData.monthfrom });
        dispatch({ type: "yearfrom", payload: fetchedData.yearfrom });
        dispatch({ type: "monthto", payload: fetchedData.monthto });
        dispatch({ type: "yearto", payload: fetchedData.yearto });
        dispatch({
          type: "accomplishment",
          payload: fetchedData.accomplishment,
        });

        console.log(fetchedData.firstName);
      }
    });
  };

  useEffect(() => {
    getData();
  }, [fetchedData]);

  return (
    <>
      <div className={classes.innerContainer}>
        <div className={classes.row}>
          <input
            type="text"
            id="exjobtitle"
            name="exjobtitle"
            placeholder="Job Title"
            ref={exjobtitle}
            onChange={(e) =>
              dispatch({ type: "exjobtitle", payload: e.target.value })
            }
          />
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company or Project"
            ref={company}
            onChange={(e) =>
              dispatch({ type: "company", payload: e.target.value })
            }
          />
          <div className={classes.calender}>
            <div className={classes.disFlex}>
              <div className={classes.coverDiv}>
                <Datetime
                  dateFormat="MM"
                  timeFormat={false}
                  renderYear={false}
                  closeOnSelect
                  inputProps={{ placeholder: "Month" }}
                  ref={monthfrom}
                  onChange={(e) =>
                    dispatch({
                      type: "monthfrom",
                      payload: moment(e, "DD-MM-YYYY").format("MM"),
                    })
                  }
                />

                <span>
                  <ArrowDropDownIcon className={classes.arrowIcon} />
                </span>
              </div>

              <Datetime
                dateFormat="YYYY"
                timeFormat={false}
                renderMonth={false}
                closeOnSelect
                inputProps={{ placeholder: "Year" }}
                name="yearfrom"
                ref={yearfrom}
                onChange={(e) =>
                  dispatch({
                    type: "yearfrom",
                    payload: moment(e, "DD-MM-YYYY").format("YYYY"),
                  })
                }
              />
              <div>
                <ArrowDropDownIcon className={classes.arrowIcon} />
              </div>
            </div>
            <div className={classes.ruleIcon}>
              <HorizontalRuleIcon style={{ fontSize: 10 }} />
            </div>

            <div className={classes.disFlex}>
              <div className={classes.coverDiv}>
                <Datetime
                  dateFormat="MM"
                  timeFormat={false}
                  renderYear={false}
                  closeOnSelect
                  inputProps={{ placeholder: "Month" }}
                  name="monthto"
                  ref={monthto}
                  onChange={(e) =>
                    dispatch({ type: "monthto", payload: e.target.value })
                  }
                />
                <div>
                  <ArrowDropDownIcon className={classes.arrowIcon} />
                </div>
              </div>

              <Datetime
                dateFormat="YYYY"
                timeFormat={false}
                renderMonth={false}
                closeOnSelect
                inputProps={{ placeholder: "Year" }}
                name="yearto"
                ref={yearto}
                onChange={(e) =>
                  dispatch({ type: "yearto", payload: e.target.value })
                }
              />

              <div>
                <ArrowDropDownIcon className={classes.arrowIcon} />
              </div>
            </div>
          </div>
          <div className={classes.checkbox}>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label
              // ref={currentlyworking}
              onChange={(e) =>
                dispatch({ type: "currentlyworking", payload: e.target.value })
              }
            >
              Currently Working here
            </label>
          </div>
          <input
            type="text"
            id="accomplishments"
            name="accomplishment"
            placeholder="Accomplishments"
            ref={accomplishment}
            onChange={(e) =>
              dispatch({ type: "accomplishment", payload: e.target.value })
            }
          />
        </div>
      </div>
    </>
  );
};
