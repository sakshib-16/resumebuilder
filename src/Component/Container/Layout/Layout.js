import React from "react";
import { Sidebar } from "../Details/Sidebar/Sidebar";
import { Wrapper } from "../Details/Wrapper/Wrapper";
import classes from "./Layout.module.css";
import { Navigation } from "../Navigation/Navigation";

export const Layout = () => {
  return (
    <>
      {/* <div className={classes.container}> */}
      <Navigation />
      <div className={classes.wrapper}>
        <Sidebar />
        <Wrapper />
      </div>
      {/* </div> */}
    </>
  );
};
