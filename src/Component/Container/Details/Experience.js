import React from 'react';
import classes from './Detail.module.css'
import Datetime from "react-datetime";
import 'react-datetime/css/react-datetime.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Experience = () => {
  
  return (
       <div className={classes.container}>
      <h1>Experience</h1>
      <div className={classes.borderBox}>
        
        <h2><AddIcon className={ classes.addIcon}/> Add Experience</h2>
      </div>

       <div className={classes.innerContainer}>
       
       <div className={classes.row}>
      
          <input type="text" id="lname" name="lastname" placeholder="Job Title" />
          <input type="text" id="lname" name="lastname" placeholder="Company or Project" />
          <div className={classes.calender}>
            <div className={classes.disFlex}>
              <div className={classes.coverDiv}>
              <Datetime dateFormat="MM" timeFormat={false} renderYear={false} closeOnSelect inputProps={{placeholder:"Month"}} />
                <span><ArrowDropDownIcon className={classes.arrowIcon} /></span>
                </div>
              
                <Datetime dateFormat="YYYY" timeFormat={false} renderMonth={false} closeOnSelect inputProps={{ placeholder: "Year" }} />
                <div><ArrowDropDownIcon className={classes.arrowIcon} /></div>   
                </div>
             <div className={classes.ruleIcon}><HorizontalRuleIcon  style={{ fontSize: 10 }}/></div>
            
               
            <div className={classes.disFlex}>
               <div className={classes.coverDiv}>
             <Datetime dateFormat="MM" timeFormat={false} renderYear={false} closeOnSelect inputProps={{placeholder:"Month"}}/>
              <div><ArrowDropDownIcon className={classes.arrowIcon} /></div> 
             </div>
              
              <Datetime dateFormat="YYYY" timeFormat={false} renderMonth={false} closeOnSelect inputProps={{ placeholder: "Year" }} /> 
               <div><ArrowDropDownIcon className={ classes.arrowIcon}/></div> 
              </div>
            
          </div>
          <div className={classes.checkbox}>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
          <label for="vehicle1"> Currently Working here</label>
          </div>
        
          <input type="text" id="lname" name="lastname" placeholder="Accomplishments"/>
          

          <div className={(classes.row,classes.btn)}>
            <div className={classes.submitBtn}>Submit
                 <ArrowForwardIcon/> 
            </div>  
          </div>
    </div>
    </div>
</div>
  )
}
