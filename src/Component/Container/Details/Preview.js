import React from "react";
import { Navigation } from "../Navigation/Navigation";
import Template1 from "../Template/Template1/Template1";
import Template2 from "../Template/Template2/Template2";

export const Preview = () => {
  const templateId = sessionStorage.getItem("template-id");
  console.log(templateId);
  return (
    <div>
      <Navigation />
      <h1>Preview</h1>
      {/* {templateId == 1 ? <Template1 /> : <Template2 />} */}
      <Template {...templateId} />
    </div>
  );
};
