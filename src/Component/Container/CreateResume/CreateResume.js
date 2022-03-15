import React from 'react'
import classes from './createResume.module.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const CreateResume = () => {
  return (
    <div className={classes.create_resume}>
      <h1>Create Resume</h1>
      <div>
        <AddCircleOutlineIcon fontSize='large' />
        <p>Create New</p>
      </div>
    </div>
  )
}