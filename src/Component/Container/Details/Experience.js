import React, { useState, useRef, useEffect } from "react";
import classes from "./Detail.module.css";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AddIcon from "@mui/icons-material/Add";
import { Submit } from "./Submit/Submit";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { ref, set, onValue } from "firebase/database";
import db from "../../../Firebase/Firebase";
import { userid } from "./variable/variable";

export const Experience = () => {
  let navigate = useNavigate();

  const [experience, setExperience] = useState({
    exjobtitle: null,
    company: null,
    monthfrom: null,
    yearfrom: null,
    monthto: null,
    yearto: null,
    accomplishment: null,
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
      exjobtitle.current.value = fetchedData.exjobtitle || "";
      company.current.value = fetchedData.company || "";
      monthfrom.current.value = fetchedData.monthfrom || "";
      yearfrom.current.value = fetchedData.yearfrom || "";
      monthto.current.value = fetchedData.monthto || "";
      yearto.current.value = fetchedData.yearto || "";
      accomplishment.current.value = fetchedData.accomplishment || "";

      console.log(fetchedData.firstName);
    });
  };

  useEffect(() => {
    getData();
  }, [fetchedData]);

  const Push = async (e) => {
    e.preventDefault();
    const {
      exjobtitle,
      company,
      monthfrom,
      yearfrom,
      monthto,
      yearto,
      accomplishment,
    } = experience;

    set(ref(db, "container/" + userid + "/experience"), {
      exjobtitle,
      company,
      monthfrom,
      yearfrom,
      monthto,
      yearto,
      accomplishment,
    })
      .then(() => {
        navigate(`/layout/education`);
      })
      .catch((error) => {
        // The write failed...
      });
  };

  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  return (
    <div className={classes.container}>
      <h1>Experience</h1>
      <div className={classes.borderBox}>
        <h2 onClick={handleClick}>
          <AddIcon className={classes.addIcon} /> Add Experience
        </h2>
      </div>
      {Array.from(Array(counter)).map((c, index) => {
        return (
          <div className={classes.innerContainer}>
            <div className={classes.row}>
              <input
                type="text"
                id="exjobtitle"
                name="exjobtitle"
                placeholder="Job Title"
                ref={exjobtitle}
                onChange={(e) =>
                  setExperience({ ...experience, exjobtitle: e.target.value })
                }
              />
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company or Project"
                ref={company}
                onChange={(e) =>
                  setExperience({ ...experience, company: e.target.value })
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
                        setExperience({
                          ...experience,
                          monthfrom: moment(e, "DD-MM-YYYY").format("MM"),
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
                      setExperience({
                        ...experience,
                        yearfrom: moment(e, "DD-MM-YYYY").format("YYYY"),
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
                        setExperience({
                          ...experience,
                          monthto: moment(e, "DD-MM-YYYY").format("MM"),
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
                    name="yearto"
                    ref={yearto}
                    onChange={(e) =>
                      setExperience({
                        ...experience,
                        yearto: moment(e, "DD-MM-YYYY").format("YYYY"),
                      })
                    }
                  />

                  <div>
                    <ArrowDropDownIcon className={classes.arrowIcon} />
                  </div>
                </div>
              </div>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1"> Currently Working here</label>
              </div>
              <input
                type="text"
                id="accomplishments"
                name="accomplishment"
                placeholder="Accomplishments"
                ref={accomplishment}
                onChange={(e) =>
                  setExperience({
                    ...experience,
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
