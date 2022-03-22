import React from 'react'
import classes from './Detail.module.css'
import AddIcon from '@mui/icons-material/Add';
import Datetime from "react-datetime";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Submit } from './Submit/Submit';

export const Education = () => {
  return (
<div className={classes.container}>
                <h1>Education</h1>
      <div className={classes.borderBox}>   
         <h2><AddIcon className={ classes.addIcon}/> Add Education</h2>
       </div>
       <div className={classes.innerContainer}> 
         <div className={classes.row}>
      
          <input type="text" id="lname" name="lastname" placeholder="University/School" />
          <input type="text" id="lname" name="lastname" placeholder="Degree" />
         
            <div className={classes.fullWidth}>
               {/* <div className={classes.coverDiv}> */}
            <div className={classes.edYear}>
                <Datetime dateFormat="YYYY" timeFormat={false} renderMonth={false} closeOnSelect inputProps={{ placeholder: "Graduation Year" }} />
                </div>
                <span><ArrowDropDownIcon className={classes.arrowIcon} /></span>   
              {/* </div>  */}
              </div>
          <input type="text" id="lname" name="lastname" placeholder="Field of Study" />
           <input type="text" id="lname" name="lastname" placeholder="Accomplishments"/>
           <Submit/>
    </div>
    </div>
</div>  )
}
