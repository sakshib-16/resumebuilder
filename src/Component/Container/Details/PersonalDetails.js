import React, { useEffect, useRef } from "react";
import classes from "./Detail.module.css";
import { useState } from "react";
import database from "../../../Firebase/Firebase";
import { Submit } from "./Submit/Submit";
import { push } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { ref, set, onValue } from "firebase/database";
import db from "../../../Firebase/Firebase";
import { SubHeader } from "./sub-header/SubHeader";
import { setData } from "./server";

export const PersonalDetails = ({ userid }) => {
  //const PersonalDetail = {}

  let navigate = useNavigate();

  const [personal, setPersonal] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    phoneNumber: "",
    emailAddress: "",
    personalWebsite: "",
    city: "",
    country: "",
  });

  const [fetchedData, setFetchedData] = useState("");

  const firstName = useRef();
  const lastName = useRef();
  const jobTitle = useRef();
  const phoneNumber = useRef();
  const emailAddress = useRef();
  const personalWebsite = useRef();
  const city = useRef();
  const country = useRef();

  //console.log(userid);

  //read data
  const getData = () => {
    const starCountRef = ref(db, "container/" + userid + "/personal");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (!fetchedData) setFetchedData(data);

      //console.log(firstName, lastName, city, fetchedData.firstName);
      setPersonal({
        ...fetchedData,
      });

      //showing ref value in input type
      for (let i in fetchedData) eval(i).current.value = fetchedData[i] || "";
    });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedData]);

  const Push = () => {
    setData([userid, "personal"], { ...personal }).then(() => {
      navigate("/layout/experience");
    });
  };

  return (
    <div className={classes.container}>
      <SubHeader heading="Personal Details" />

      <div className={classes.innerContainer}>
        <div className={classes.row}>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            ref={firstName}
            onChange={(e) =>
              setPersonal({ ...personal, firstName: e.target.value })
            }
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            ref={lastName}
            onChange={(e) =>
              setPersonal({ ...personal, lastName: e.target.value })
            }
          />
          <input
            type="text"
            name="jobtitle"
            placeholder="Job Title"
            ref={jobTitle}
            onChange={(e) =>
              setPersonal({ ...personal, jobTitle: e.target.value })
            }
          />

          <h2>Contact Details</h2>
          <input
            type="text"
            name="phonenumber"
            placeholder="Phone Number"
            ref={phoneNumber}
            onChange={(e) =>
              setPersonal({ ...personal, phoneNumber: e.target.value })
            }
          />
          <input
            type="text"
            name="emailaddress"
            placeholder="Email Address"
            ref={emailAddress}
            onChange={(e) =>
              setPersonal({ ...personal, emailAddress: e.target.value })
            }
          />
          <input
            type="text"
            name="personalwebsite"
            placeholder="Personal Website"
            ref={personalWebsite}
            onChange={(e) =>
              setPersonal({
                ...personal,
                personalWebsite: e.target.value,
              })
            }
          />

          <h2>Location</h2>
          <div className={(classes.row, classes.disflex)}>
            <input
              type="text"
              name="city"
              placeholder="City"
              ref={city}
              onChange={(e) =>
                setPersonal({ ...personal, city: e.target.value })
              }
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              ref={country}
              onChange={(e) =>
                setPersonal({ ...personal, country: e.target.value })
              }
            />
          </div>

          <Submit click={Push} />
        </div>
      </div>
    </div>
  );
};
