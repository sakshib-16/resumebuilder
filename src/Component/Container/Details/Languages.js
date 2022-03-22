import React from 'react'
import classes from './Detail.module.css'
import { Submit } from './Submit/Submit';

export const Languages = () => {
  return (
   <div className={classes.container}>
                <h1>Languages</h1>

       <div className={classes.innerContainer}>  
       <div className={classes.row}>
         <input type="text" placeholder="Languages (E.g. English, Hindi)" />
         <Submit/>
    </div>
    </div>
</div>
  )
}
