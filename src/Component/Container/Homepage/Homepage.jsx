import React from "react";
import classes from "./homepage.module.css";
import { Link } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";

const HomePage = () => {
  return (
    <div className={classes.container}>
      <Navigation />
      <div className={classes.homepage}>
        <div className={classes.content}>
          <spam> Make your resume </spam>
          <p>
            Build your resume on our website and get a free analysis report your
            our AI algorithm
          </p>
          <Link to="/createresume">
            <button className={classes.continue}>Continue</button>
          </Link>
        </div>
        <div className={classes.img}></div>
      </div>
    </div>
  );
};
export default HomePage;
