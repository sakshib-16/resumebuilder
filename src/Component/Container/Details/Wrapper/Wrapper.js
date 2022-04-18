import React, { useEffect } from "react";
import { Experience } from "../Experience";
import { Education } from "../Education";
import { Skills } from "../Skills";
import { Certificates } from "../Certificates";
import { Languages } from "../Languages";
import { Summary } from "../Summary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersonalDetails } from "../PersonalDetails";
import Protected from "../../../Auth/Protected";

export const Wrapper = () => {
  // useEffect(() => {
  // function writeUserData() {
  // // const db = getDatabase();
  // set(ref(db, 'users/' + userId),ed

  //     );
  //   }
  //   writeUserData();
  //   })

  return (
    <Routes>
      <Route
        index
        element={
          <Protected>
            <PersonalDetails />
          </Protected>
        }
      />
      <Route
        path="/experience"
        element={
          <Protected>
            <Experience />
          </Protected>
        }
      />
      <Route
        path="/education"
        element={
          <Protected>
            <Education />
          </Protected>
        }
      />
      <Route
        path="/skills"
        element={
          <Protected>
            <Skills />
          </Protected>
        }
      />
      <Route
        path="/certificates"
        element={
          <Protected>
            <Certificates />
          </Protected>
        }
      />
      <Route
        path="/languages"
        element={
          <Protected>
            <Languages />
          </Protected>
        }
      />
      <Route
        path="/summary"
        element={
          <Protected>
            <Summary />
          </Protected>
        }
      />
    </Routes>
  );
};
