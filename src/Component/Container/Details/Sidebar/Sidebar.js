import React from 'react'
import classes from './sidebar.module.css'



export const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
    <div className={classes.list}>
      <ul>
       <li> <a href="#">Personal Details</a></li>
       <li> <a href="">Experience</a> </li>
       <li><a href="">Education</a> </li>
        <li><a href="">Skills</a> </li>
        <li><a href="">Language</a> </li>
        <li><a href="">Certificates</a> </li>
       <li> <a href="">Summary</a> </li>
      </ul>
    </div>
    </div>
  )
}
