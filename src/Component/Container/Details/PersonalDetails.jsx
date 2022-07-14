import React, { useEffect } from "react";
import classes from "./Detail.module.css";
import { useState } from "react";
import { Submit } from "./Submit/Submit";
import { useNavigate } from "react-router-dom";
import { SubHeader } from "./sub-header/SubHeader";
import { setData, getData } from "./server";

export const PersonalDetails = () => {
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

  useEffect(() => {
    getData("personal", setPersonal);
    return () => setPersonal({});
  }, []);

  const Push = () => {
    setData("personal", { ...personal }).then(() => {
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
            value={personal?.firstName || ""}
            onChange={(e) =>
              setPersonal({ ...personal, firstName: e.target.value })
            }
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={personal?.lastName || ""}
            onChange={(e) =>
              setPersonal({ ...personal, lastName: e.target.value })
            }
          />
          <input
            type="text"
            name="jobtitle"
            placeholder="Job Title"
            value={personal?.jobTitle || ""}
            onChange={(e) =>
              setPersonal({ ...personal, jobTitle: e.target.value })
            }
          />

          <h2>Contact Details</h2>
          <input
            type="text"
            name="phonenumber"
            placeholder="Phone Number"
            value={personal?.phoneNumber || ""}
            onChange={(e) =>
              setPersonal({ ...personal, phoneNumber: e.target.value })
            }
          />
          <input
            type="text"
            name="emailaddress"
            placeholder="Email Address"
            value={personal?.emailAddress || ""}
            onChange={(e) =>
              setPersonal({ ...personal, emailAddress: e.target.value })
            }
          />
          <input
            type="text"
            name="personalwebsite"
            placeholder="Personal Website"
            value={personal?.personalWebsite || ""}
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
              value={personal?.city || ""}
              onChange={(e) =>
                setPersonal({ ...personal, city: e.target.value })
              }
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={personal?.country || ""}
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
