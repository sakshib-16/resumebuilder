import React from "react";
import { Navigation } from "../Navigation/Navigation";
import Template1 from "../Template/Template1/Template1";
import Template2 from "../Template/Template2/Template2";
import { getDatabase, ref, onValue } from "firebase/database";

export const Preview = () => {
  const templateId = sessionStorage.getItem("template-id");
  console.log(templateId);
  const userid = sessionStorage.getItem("uid");
  const db = getDatabase();
  const starCountRef = ref(db, "container/" + userid);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
  return (
    <div>
      <Navigation />
      <h1>Preview</h1>
      {templateId == 1 ? <Template1 /> : <Template2 />}
    </div>
  );
};
