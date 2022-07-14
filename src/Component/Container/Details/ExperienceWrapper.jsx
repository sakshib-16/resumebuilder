import React, { useEffect, useRef } from "react";
import moment from "moment";
import classes from "./Detail.module.css";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { useDispatch } from "react-redux";
import { Close } from "./Close";

export const ExperienceWrapper = ({ set, data, click }) => {
  let dispatch = useDispatch();

  return (
    <>
      <div className={classes.innerContainer}>
        <Close click={click} />
        <div className={classes.row}>
          <input
            type="text"
            id="exjobtitle"
            name="exjobtitle"
            placeholder="Job Title"
            value={data?.exjobtitle || ""}
            onChange={(e) => set([e.target.name], e.target.value)}
          />
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company or Project"
            value={data?.company || ""}
            onChange={(e) => set([e.target.name], e.target.value)}
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
                  value={data?.monthfrom || ""}
                  onChange={(e) =>
                    set("monthfrom", moment(e, "DD-MM-YYYY").format("MM"))
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
                value={data?.yearfrom || ""}
                onChange={(e) =>
                  set("yearfrom", moment(e, "DD-MM-YYYY").format("YYYY"))
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
                  value={data?.monthto || ""}
                  onChange={(e) =>
                    set("monthto", moment(e, "DD-MM-YYYY").format("MM"))
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
                value={data?.yearto || ""}
                onChange={(e) =>
                  set("yearto", moment(e, "DD-MM-YYYY").format("YYYY"))
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
            value={data?.accomplishment || ""}
            onChange={(e) => set([e.target.name], e.target.value)}
          />
        </div>
      </div>
    </>
  );
};
