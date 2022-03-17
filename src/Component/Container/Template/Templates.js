import React from 'react'
import classes from './Templates.module.css'
import {Link } from "react-router-dom";

export const Templates = () => {
  return (
    <div className={classes.templates}>
     <div className={`${classes.create_resume} ${classes.resume}`} >
      <h1>Templates</h1>
        <Link to="/details">
          <div className={classes.disFlex}>
            <div className={classes.img}>
          </div> 
          <div className={classes.img}>
            </div>
            </div>
          </Link>
        </div>
        
    </div>
  )
}
