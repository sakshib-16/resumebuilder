import React from "react";
import classes from "./resume.module.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-router-dom";
import { ref, set, onValue, remove } from "firebase/database";
import db from "../../../Firebase/Firebase";
import { useDispatch, useSelector } from "react-redux";

export const MyResume = () => {
  const userid = useSelector((id) => id.userIdReducer);
  const deleteData = () => {
    remove(ref(db, "container/" + userid));

    console.log("dl");
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
