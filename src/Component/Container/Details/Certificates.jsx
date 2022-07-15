import React, { useState, useEffect } from "react";
import classes from "./Detail.module.css";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Submit } from "./Submit/Submit";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { SubHeader } from "./sub-header/SubHeader";
import { setData, getData } from "./server";

export const Certificates = () => {
  const [certificate, setCertificate] = useState({});

  let navigate = useNavigate();

  useEffect(() => {
    getData("certificate", setCertificate);
    return () => setCertificate({});
  }, []);

  const Push = async () => {
    setData("certificate", { ...certificate }).then(() => {
      navigate("/layout/summary");
    });
  };

  return (
    <div className={classes.container}>
      <SubHeader heading="Certificates" />

      <div className={classes.innerContainer}>
        <div className={classes.row}>
          <input
            type="text"
            name="cername"
            placeholder="Certification Name"
            onChange={(e) =>
              setCertificate({ ...certificate, cername: e.target.value })
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
                  onChange={(e) =>
                    setCertificate({
                      ...certificate,
                      cerfrommonth: moment(e, "DD-MM-YYYY").format("MM"),
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
                onChange={(e) =>
                  setCertificate({
                    ...certificate,
                    cerfromyear: moment(e, "DD-MM-YYYY").format("YYYY"),
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
                  onChange={(e) =>
                    setCertificate({
                      ...certificate,
                      certomonth: moment(e, "DD-MM-YYYY").format("MM"),
                    })
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
                onChange={(e) =>
                  setCertificate({
                    ...certificate,
                    certoyear: moment(e, "DD-MM-YYYY").format("YYYY"),
                  })
                }
              />
              <div>
                <ArrowDropDownIcon className={classes.arrowIcon} />
              </div>
            </div>
          </div>
          {/* <div className={classes.checkbox}>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
          <label for="vehicle1"> Currently Working here</label>
          </div> */}
          <Submit click={Push} />
        </div>
      </div>
    </div>
  );
};
