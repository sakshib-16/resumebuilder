import React, { useEffect, useRef } from "react";
import classes from "./Detail.module.css";
import { useState } from "react";
import database from "../../../Firebase/Firebase";
import { Submit } from "./Submit/Submit";
import { push } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ref, set, onValue } from "firebase/database";
import db from "../../../Firebase/Firebase";
import { SubHeader } from "./sub-header/SubHeader";

export const PersonalDetails = () => {
  //const PersonalDetail = {}

  let navigate = useNavigate();
  const userid = sessionStorage.getItem("uid");

  const [personal, setPersonal] = useState({
    firstName: null,
    lastName: null,
    jobTitle: null,
    phoneNumber: null,
    emailAddress: null,
    personalWebsite: null,
    city: null,
    country: null,
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

  console.log(userid);
  //read data
  const getData = () => {
    const starCountRef = ref(db, "container/" + userid + "/personal");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (!fetchedData) setFetchedData(data);
      firstName.current.value = fetchedData.firstName || "";
      lastName.current.value = fetchedData.lastName || "";
      jobTitle.current.value = fetchedData.jobTitle || "";
      phoneNumber.current.value = fetchedData.phoneNumber || "";
      emailAddress.current.value = fetchedData.emailAddress || "";
      personalWebsite.current.value = fetchedData.personalWebsite || "";
      city.current.value = fetchedData.city || "";
      country.current.value = fetchedData.country || "";
    });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedData]);

  const Push = () => {
    // e.preventDefault();

    const {
      firstName,
      lastName,
      jobTitle,
      phoneNumber,
      emailAddress,
      personalWebsite,
      city,
      country,
    } = personal;

    set(ref(db, "container/" + userid + "/personal"), {
      firstName,
      lastName,
      jobTitle,
      phoneNumber,
      emailAddress,
      personalWebsite,
      city,
      country,
    })
      .then(() => {
        navigate(`/layout/experience`);
      })
      .catch((error) => {
        // The write failed...
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
