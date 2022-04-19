import React, { useState, useRef, useEffect } from "react";
import classes from "./Detail.module.css";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AddIcon from "@mui/icons-material/Add";
import { Submit } from "./Submit/Submit";
import { ref, set, onValue } from "firebase/database";
import db from "../../../Firebase/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { SubHeader } from "./sub-header/SubHeader";
import { userid } from "./variable/variable";

export const Certificates = () => {
  const [certificate, setCertificate] = useState({
    cername: null,
    cerfrommonth: null,
    cerfromyear: null,
    certomonth: null,
    certoyear: null,
  });

  let navigate = useNavigate();

  const [fetchedData, setFetchedData] = useState("");

  const cername = useRef();
  const cerfrommonth = useRef();
  const cerfromyear = useRef();
  const certomonth = useRef();
  const certoyear = useRef();

  const getData = () => {
    const starCountRef = ref(db, "container/" + userid + "/certificate");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (!fetchedData) setFetchedData(data);
      cername.current.value = fetchedData.cername || "";
      cerfrommonth.current.value = fetchedData.cerfrommonth || "";
      cerfromyear.current.value = fetchedData.cerfromyear || "";
      certomonth.current.value = fetchedData.certomonth || "";
      certoyear.current.value = fetchedData.certoyear || "";

      console.log(fetchedData.firstName);
    });
  };

  useEffect(() => {
    getData();
  }, [fetchedData]);

  const Push = async (e) => {
    e.preventDefault();
    const { cername, cerfrommonth, cerfromyear, certomonth, certoyear } =
      certificate;

    set(ref(db, "container/" + userid + "/certificate"), {
      cername,
      cerfrommonth,
      cerfromyear,
      certomonth,
      certoyear,
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
