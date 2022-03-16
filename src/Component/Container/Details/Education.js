import React from 'react'
import classes from './Detail.module.css'
import AddIcon from '@mui/icons-material/Add';
import Datetime from "react-datetime";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
          <div className={classes.downarrow}>
            <Datetime dateFormat="YYYY" timeFormat={false} renderMonth={false} closeOnSelect
              inputProps={{ placeholder: "Year" }} sx={{width:'100%'}}/>
            <ArrowDropDownIcon className={classes.arrowIcon} />
            </div>
          <input type="text" id="lname" name="lastname" placeholder="Field of Study" />
           <input type="text" id="lname" name="lastname" placeholder="Accomplishments
"/>
           <div className={(classes.row,classes.btn)}>
            <div className={classes.submitBtn}>Submit
                 <ArrowForwardIcon/> 
            </div>
           
          </div>
    </div>
    </div>
</div>  )
}
