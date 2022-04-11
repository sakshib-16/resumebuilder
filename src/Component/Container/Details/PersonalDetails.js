import React from 'react'
import classes from './Detail.module.css'
import {useState} from 'react';
import database from '../../../Firebase/Firebase';
import { Submit } from './Submit/Submit';
import { push } from 'firebase/database';
import { useNavigate } from "react-router-dom";


export const PersonalDetails = () => {
  //const PersonalDetail = {}
let navigate = useNavigate();

  const [personal, setPersonal] = useState({});

  const Push = async (e) => {
    e.preventDefault();
    const { firstname, lastName, jobTitle, phoneNumber, emailAddress, personalWebsite, city, country } = personal;
    const res = await fetch(
      "https://resume-builder-dad7c-default-rtdb.firebaseio.com/personaldetails.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastName,
          jobTitle,
          phoneNumber,
          emailAddress,
          personalWebsite,
          city,
          country

        })
      }
    )

    if (res) {
      console.log("resposne")
      // return <Navigate to="/" replace />
       navigate(`/layout/experience`);
    }
    else {
        console.log("Please fill form")
    }
  }   
  
  return (
    <div className={classes.container}>
      <h1>Personal Details</h1>

      <div className={classes.innerContainer}>
        <div className={classes.row}>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={(e) =>
              setPersonal({ ...personal, firstName: e.target.value })
            }
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={(e) =>
              setPersonal({ ...personal, lastName: e.target.value })
            }
          />
          <input
            type="text"
            name="jobtitle"
            placeholder="Job Title"
            onChange={(e) =>
              setPersonal({ ...personal, jobTitle: e.target.value })
            }
          />

          <h2>Contact Details</h2>
          <input
            type="text"
            name="phonenumber"
            placeholder="Phone Number"
            onChange={(e) =>
              setPersonal({ ...personal, phoneNumber: e.target.value })
            }
          />
          <input
            type="text"
            name="emailaddress"
            placeholder="Email Address"
            onChange={(e) =>
              setPersonal({ ...personal, emailAddress: e.target.value })
            }
          />
          <input
            type="text"
            name="personalwebsite"
            placeholder="Personal Website"
            onChange={(e) =>
              setPersonal({ ...personal, personalWebsite: e.target.value })
            }
          />

          <h2>Location</h2>
          <div className={(classes.row, classes.disflex)}>
            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={(e) =>
                setPersonal({ ...personal, city: e.target.value })
              }
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              onChange={(e) =>
                setPersonal({ ...personal, country: e.target.value })
              }
            />
          </div>

          <Submit click={Push}/>
    </div>
      </div>
      </div>
  );
};
