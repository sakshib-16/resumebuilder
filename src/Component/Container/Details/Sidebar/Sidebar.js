import React from "react";
import classes from "./sidebar.module.css";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Education } from "../Education";

export const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.list}>
        <ul>
          <Link to="/layout">
            <li>Personal Details</li>{" "}
          </Link>
          <Link to="/layout/experience">
            <li>Experience</li>
          </Link>
          <Link to="/layout/education">
            <li>Education</li>
          </Link>
          <Link to="/layout/skills">
            <li>Skills</li>
          </Link>
          <Link to="/layout/languages">
            <li>Language</li>{" "}
          </Link>
          <Link to="/layout/certificates">
            <li>Certificates</li>{" "}
          </Link>
          <Link to="/layout/summary">
            <li> Summary</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
