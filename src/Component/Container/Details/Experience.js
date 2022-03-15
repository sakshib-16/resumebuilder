import React from 'react';
import classes from './Detail.module.css'
import Datetime from "react-datetime";
import 'react-datetime/css/react-datetime.css';


export const Experience = () => {
  
  return (
       <div className={classes.container}>
                <h1>Experience</h1>

       <div className={classes.innerContainer}>
       
       <div className={classes.row}>
      
          <input type="text" id="lname" name="lastname" placeholder="Job Title" />
          <input type="text" id="lname" name="lastname" placeholder="Company or Project" />
          <div className={classes.calender}>
          <label>
              <Datetime dateFormat="MM" timeFormat={true} renderYear={false}  inputProps={{placeholder:"Month"}} />
              <div>+</div>
            </label>
               <label> 
              <Datetime dateFormat="YYYY" timeFormat={false} renderMonth={false} inputProps={{ placeholder: "Year" }} />
             <div>+</div>   
            </label>
            <div>-</div>
            <label> 
             <Datetime dateFormat="MM" timeFormat={false} renderYear={false} inputProps={{placeholder:"Month"}}/>
              <div>+</div> 
            </label>
             <label>
              <Datetime dateFormat="YYYY" timeFormat={false} renderMonth={false} inputProps={{ placeholder: "Year" }} /> 
             <div>+</div> 
            </label>
            </div>
          <input type="text" id="lname" name="lastname" placeholder="Email Address"/>
          <input type="text" id="lname" name="lastname" placeholder="Personal Website" />
          <input type="text" id="lname" name="lastname" placeholder="Accomplishments"/>
          

          <div className={(classes.row,classes.btn)}>
          <input type="submit" value="Submit" />
          </div>
    </div>
    </div>
</div>
  )
}
