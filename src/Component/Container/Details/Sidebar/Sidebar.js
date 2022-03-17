import React from 'react'
import classes from './sidebar.module.css'
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Education } from '../Education';



export const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
    <div className={classes.list}>
      <ul>
        {/* <Link to="/personaldetail"><li> <a href="#">Personal Details</a></li> </Link> */}
       <Link to="/experience"><li> <a href="">Experience</a> </li></Link>
       <Link to="/education"><li><a href="">Education</a> </li></Link>
       <Link to="/skills"><li><a href="">Skills</a> </li></Link>
       <Link to="/language"><li><a href="">Language</a> </li> </Link>
      <Link to="/certificates"><li><a href="">Certificates</a> </li> </Link>
      <Link to="/summary"><li> <a href="">Summary</a> </li> </Link>
      </ul>
      </div>
        

    </div>
  )
}
