import React from "react";
import classes from "./resume.module.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { MyResume } from "./MyResume";
import { Link } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";

export const CreateResume = () => {
  return (
    <div>
      <Navigation />

      <div className={`${classes.create_resume} ${classes.resume}`}>
        <h1>Create Resume</h1>
        <div>
          <AddCircleOutlineIcon fontSize="large" />
          <Link to="/templates">
            <p>Create New</p>
          </Link>
        </div>
      </div>

      <MyResume />
    </div>
  );
};
