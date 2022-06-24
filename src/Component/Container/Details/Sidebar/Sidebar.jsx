import React from "react";
import classes from "./sidebar.module.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.list}>
        <ul>
          {/* <Link to="/layout">
            <li>Personal Details</li>
          </Link> */}
          <NavLink
            exact
            to="/layout"
            end
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            <li>Personal Details</li>
          </NavLink>
          <NavLink
            to="/layout/experience"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            <li>Experience</li>
          </NavLink>

          <NavLink
            to="/layout/education"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            <li>Education</li>
          </NavLink>
          <NavLink
            to="/layout/skills"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            <li>Skills</li>
          </NavLink>
          <NavLink
            to="/layout/languages"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            <li>Language</li>
          </NavLink>
          <NavLink
            to="/layout/certificates"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            <li>Certificates</li>
          </NavLink>
          <NavLink
            to="/layout/summary"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            <li> Summary</li>
          </NavLink>

          {/* <Link to="/layout/experience">
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
          </Link> */}
        </ul>
      </div>
    </div>
  );
};
