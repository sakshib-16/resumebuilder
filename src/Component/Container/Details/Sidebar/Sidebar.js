import React from 'react'
import classes from './sidebar.module.css'



export const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
    <div className={classes.list}>
      
      <a href="#">Personal Details</a>
       <a href="">Experience</a> 
       <a href="">Education</a> 
       <a href="">Skills</a> 
       <a href="">Language</a> 
       <a href="">Certificates</a> 
       <a href="">Summary</a> 
    
    </div>
    </div>
  )
}
