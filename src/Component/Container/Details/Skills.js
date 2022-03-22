import React from 'react'
import classes from './Detail.module.css'
import { Submit } from './Submit/Submit';

export const Skills = () => {
  return (
    <div className={classes.container}>
                <h1>Skills</h1>

       <div className={classes.innerContainer}>
       
       <div className={classes.row}>
      
          <input type="text" placeholder="Skills (E.g. Design, React, MySQL)" />
         
            <Submit/>
    </div>
    </div>
</div>
  )
}
