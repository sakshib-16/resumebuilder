import React from 'react'
import classes from './resume.module.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DownloadIcon from '@mui/icons-material/Download';

export const MyResume = () => {
  return (
      <div className={classes.container}>
<div className={`${classes.my_resume} ${classes.resume}`}>
    <h1>My Resume</h1>
      <div>
      </div>
    </div>

    <div className={classes.options}>
        <p>Untitled Resume</p>
        <div className={classes.option}>
        <EditIcon />
        <span>Edit</span>
        </div>
        <div className={classes.option}>
        <DeleteOutlineIcon />
        <span>Delete</span>
        </div>
        <div className={classes.option}>
        <DownloadIcon />
        <span>Download</span>
        </div>
    </div>
      </div>
  )
}
