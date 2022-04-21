import React, { useEffect } from "react";
import { Experience } from "../Experience";
import { Education } from "../Education";
import { Skills } from "../Skills";
import { Certificates } from "../Certificates";
import { Preview } from "../Preview";

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
  const uid = sessionStorage.getItem("uid");
  return (
    <Routes>
      <Route
        index
        element={
          <Protected>
            <PersonalDetails userid={uid} />
          </Protected>
        }
      />
      <Route
        path="/experience"
        element={
          <Protected>
            <Experience userid={uid} />
          </Protected>
        }
      />
      <Route
        path="/education"
        element={
          <Protected>
            <Education userid={uid} />
          </Protected>
        }
      />
      <Route
        path="/skills"
        element={
          <Protected>
            <Skills userid={uid} />
          </Protected>
        }
      />
      <Route
        path="/certificates"
        element={
          <Protected>
            <Certificates userid={uid} />
          </Protected>
        }
      />
      <Route
        path="/languages"
        element={
          <Protected>
            <Languages userid={uid} />
          </Protected>
        }
      />
      <Route
        path="/summary"
        element={
          <Protected>
            <Summary userid={uid} />
          </Protected>
        }
      />
    </Routes>
  );
};
