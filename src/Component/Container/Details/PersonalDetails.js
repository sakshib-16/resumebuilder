import React from 'react'
import classes from './Detail.module.css'
import {useState} from 'react';
import database from '../../../Firebase/Firebase';
import { Submit } from './Submit/Submit';
import { push } from 'firebase/database';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UserId from './UserId/UserId';
import { ref, set } from "firebase/database";
import db from '../../../Firebase/Firebase';

export const PersonalDetails = () => {
  //const PersonalDetail = {}

   let navigate = useNavigate();

  const [personal, setPersonal] = useState({});
  const [userid,setUserId] =useState('')


  //getting uid
  const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(uid)
    setUserId(uid);
    // ...
  } else {
    // User is signed out
    // ...
  }
});



  const Push = (personal) => {
    console.log(personal)

   // e.preventDefault();

    const { firstName, lastName, jobTitle, phoneNumber, emailAddress, personalWebsite, city, country } = personal;
    

    set(ref(db, 'container/' + userid + '/personal'), {
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
} 
  
  return (
    <div className={classes.container}>
      <h1>Personal Details</h1>

      <div className={classes.innerContainer}>
        <div className={classes.row}>
          <UserId/>
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

          <Submit click={()=>Push(personal)}/>
    </div>
      </div>
      </div>
  );
};
