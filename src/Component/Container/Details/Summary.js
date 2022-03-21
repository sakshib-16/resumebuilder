import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import classes from './Detail.module.css'

export const Summary = () => {
  return (
    <div className={classes.container}>
                <h1>Summary</h1>

       <div className={classes.innerContainer}>
       
       <div className={classes.row}>
      
          <input type="text" placeholder="Your Professional  Summary" />
         
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
