import React from 'react'
import classes from './resume.module.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { MyResume } from './MyResume';

export const CreateResume = () => {
  return (
    <div>
    <div className={`${classes.create_resume} ${classes.resume}`} >
      <h1>Create Resume</h1>
      <div>
        <AddCircleOutlineIcon fontSize='large' />
        <p>Create New</p>
      </div>
    </div>
    <MyResume />
    </div>
  )
}