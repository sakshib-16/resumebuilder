import React from 'react';
import classes from './Detail.module.css'
import Datetime from "react-datetime";
import 'react-datetime/css/react-datetime.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

export const Experience = () => {
  
  return (
       <div className={classes.container}>
                <h1>Experience</h1>

       <div className={classes.innerContainer}>
       
       <div className={classes.row}>
      
          <input type="text" id="lname" name="lastname" placeholder="Job Title" />
          <input type="text" id="lname" name="lastname" placeholder="Company or Project" />
          <div className={classes.calender}>
            <div className={classes.disFlex}>
              <Datetime dateFormat="MM" timeFormat={true} renderYear={false}  inputProps={{placeholder:"Month"}} />
              <span><ArrowDropDownIcon/></span> 
                <Datetime dateFormat="YYYY" timeFormat={false} renderMonth={false} inputProps={{ placeholder: "Year" }} />
               <div><ArrowDropDownIcon/></div>   
             <div><HorizontalRuleIcon/></div>
            </div>
               
            <div className={classes.disFlex}>
             <Datetime dateFormat="MM" timeFormat={false} renderYear={false} inputProps={{placeholder:"Month"}}/>
                <div><ArrowDropDownIcon/></div> 
              <Datetime dateFormat="YYYY" timeFormat={false} renderMonth={false} inputProps={{ placeholder: "Year" }} /> 
               <div><ArrowDropDownIcon/></div> 
            </div>
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
