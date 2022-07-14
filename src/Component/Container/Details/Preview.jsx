import React, { useEffect, useState } from "react";
import { Navigation } from "../Navigation/Navigation";
import Template1 from "../Template/Template1/Template1";
import Template2 from "../Template/Template2/Template2";
import { getData } from "./server";

export const Preview = () => {
  const [data, setData] = useState({});
  const templateId = sessionStorage.getItem("template-id");
  console.log(templateId);

  useEffect(() => {
    getData("", setData);
    return () => setData({});
  }, []);

  return (
    <div>
      <Navigation />
      <h1>Preview</h1>
      {templateId === 1 ? <Template1 data={data} /> : <Template2 data={data} />}
    </div>
  );
};
