import React from 'react'
import classes from './submit.module.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Submit = (props) => {
  return (
    <div className={(classes.row,classes.btn)}>
            <div className={classes.submitBtn} onClick={props.click}>Submit
                 <ArrowForwardIcon/> 
            </div>  
          </div>
  )
}
