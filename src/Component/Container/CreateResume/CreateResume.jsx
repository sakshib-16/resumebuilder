import React from 'react';
import classes from './resume.module.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { MyResume } from './MyResume';
import { Link } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';

export const CreateResume = () => {
  return (
    <div className={classes.resume_container}>
      <Navigation />

      <div className={`${classes.create_resume} ${classes.resume}`}>
        <h1>Create Resume</h1>
        <Link className={classes.link} to="/temp">
          <div className={classes.create_resumeicon}>
            <AddCircleOutlineIcon fontSize="large" />

            <p>Create New</p>
          </div>
        </Link>
      </div>
      <MyResume />
    </div>
  );
};
