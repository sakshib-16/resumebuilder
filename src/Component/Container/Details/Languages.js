import React from 'react'
import classes from './Detail.module.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Languages = () => {
  return (
   <div className={classes.container}>
                <h1>Languages</h1>

       <div className={classes.innerContainer}>  
       <div className={classes.row}>
         <input type="text" placeholder="Languages (E.g. English, Hindi)" />
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
