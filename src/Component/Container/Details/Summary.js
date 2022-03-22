import React from 'react'
import classes from './Detail.module.css'
import { Submit } from './Submit/Submit';

export const Summary = () => {
  return (
    <div className={classes.container}>
                <h1>Summary</h1>

       <div className={classes.innerContainer}>
       
       <div className={classes.row}>
      
          <input type="text" placeholder="Your Professional  Summary" />
            <Submit/>
    </div>
    </div>
</div>
  )
}
