import React from "react";
import CircularStatic from "../../../progressBar/ProgressBar";
import classes from "./subheader.module.css";

export const SubHeader = ({ heading }) => {
  return (
    <div className={classes.sub_header}>
      <h1>{heading}</h1>
      <div className={classes.progress_container}>
        <CircularStatic />
      </div>
    </div>
  );
};
