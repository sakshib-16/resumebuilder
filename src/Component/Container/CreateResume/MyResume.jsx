import React from "react";
import classes from "./resume.module.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-router-dom";
import { removeData } from "../Details/server";

export const MyResume = () => {
  const deleteData = () => {
    const confirm = window.confirm("Do you want to delete this resume?");
    if (confirm) removeData();
  };

  return (
    <div className={classes.container}>
      <div className={`${classes.my_resume} ${classes.resume}`}>
        <h1>My Resume</h1>
        <div></div>
      </div>

      <div className={classes.options}>
        <p>Untitled Resume</p>
        <div className={classes.option}>
          <EditIcon />
          <Link to="/layout">
            <span>Edit</span>
          </Link>
        </div>
        <div className={classes.option}>
          <DeleteOutlineIcon />
          <span onClick={deleteData}>Delete</span>
        </div>
        <div className={classes.option}>
          <DownloadIcon />
          <span>Download</span>
        </div>
      </div>
    </div>
  );
};
