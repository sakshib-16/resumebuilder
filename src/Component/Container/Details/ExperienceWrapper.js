import React, { useEffect, useRef } from "react";
import moment from "moment";
import classes from "./Detail.module.css";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { useDispatch } from "react-redux";

export const ExperienceWrapper = ({ set, data }) => {
  let dispatch = useDispatch();
  const exjobtitleRef = useRef();
  const companyRef = useRef();

  useEffect(() => {
    if (data) {
      exjobtitleRef.current.value = data.jobtitle || "";
      companyRef.current.value = data.company || "";
    }
  }, [data]);

  return (
    <>
      <div className={classes.innerContainer}>
        <div className={classes.row}>
          <input
            type="text"
            id="exjobtitle"
            name="exjobtitle"
            placeholder="Job Title"
            // value={fetchedData.exjobtitle || ""}
            ref={exjobtitleRef}
            onChange={(e) => set("jobtitle", e.target.value)}
            // dispatch({ type: "exjobtitle", payload: e.target.value })
          />
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company or Project"
            // value={fetchedData.company || ""}
            ref={companyRef}
            onChange={(e) => set("company", e.target.value)}
            // dispatch({ type: "company", payload: e.target.value })
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
                  // ref={monthfrom}
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
                // ref={yearfrom}
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
                  // ref={monthto}
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
                // ref={yearto}
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
            <label htmlFor="vehicle1"> Currently Working here</label>
          </div>
          <input
            type="text"
            id="accomplishments"
            name="accomplishment"
            placeholder="Accomplishments"
            // ref={accomplishment}
            onChange={(e) =>
              dispatch({ type: "accomplishment", payload: e.target.value })
            }
          />
        </div>
      </div>
    </>
  );
};
