import React from "react";
import classes from "./homepage.module.css";

const HomePage = () => {
  return (
    <>
      <div className={classes.homepage}>
        <div className={classes.content}>
          <spam> Make your resume </spam>
          <p>
            Build your resume on our website and get a free analysis report your
            our AI algorithm
          </p>
            <button className={classes.continue}>
                continue
            </button>
        </div>
          <div className={classes.img}>image</div>
      </div>
    </>
  );
};
export default HomePage;
