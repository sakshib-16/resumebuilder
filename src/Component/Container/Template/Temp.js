import { Preview } from "../Details/Preview";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Protected from "../../Auth/Protected";
import { Templates } from "./Templates";

export const Temp = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <Protected>
            <Templates />
          </Protected>
        }
      />
      <Route
        path="/preview"
        element={
          <Protected>
            <Preview />
          </Protected>
        }
      />
    </Routes>
  );
};
