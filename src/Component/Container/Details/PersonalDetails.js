import React from 'react'
import classes from './Detail.module.css'

export const PersonalDetails = () => {
  return (
    <div className={classes.container}>
                <h1>Personal Details</h1>

       <div className={classes.innerContainer}>
       
       <div className={classes.row}>
          <input type="text" id="fname" name="firstname" placeholder="First Name"/>
          <input type="text" id="lname" name="lastname" placeholder="Last Name"/>
          <input type="text" id="lname" name="lastname" placeholder="Job Title" />
          
  
          <h2>Contact Details</h2>
          <input type="text" id="lname" name="lastname" placeholder="Phone Number"/>
          <input type="text" id="lname" name="lastname" placeholder="Email Address"/>
          <input type="text" id="lname" name="lastname" placeholder="Personal Website" />
        
          <h2>Location</h2>
           <div className={(classes.row,classes.disflex)}>
            <input type="text" id="lname" name="lastname" placeholder="City" />
             <input type="text" id="lname" name="lastname" placeholder="Country"/>
          </div>

          <div className={(classes.row,classes.btn)}>
          <input type="submit" value="Submit" />
          </div>
    </div>
    </div>
</div>

  )
}
