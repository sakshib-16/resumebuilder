import React, { useEffect, useState } from "react";
import { Navigation } from "../Navigation/Navigation";
import Template1 from "../Template/Template1/Template1";
import Template2 from "../Template/Template2/Template2";
import { getDatabase, ref, onValue } from "firebase/database";

export const Preview = () => {
  const [data, setData] = useState({
    personal: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      phoneNumber: "",
      emailAddress: "",
      personalWebsite: "",
      city: "",
      country: "",
    },
  });
  const templateId = sessionStorage.getItem("template-id");
  console.log(templateId);
  const userid = sessionStorage.getItem("uid");
  const db = getDatabase();
  useEffect(() => {
    const starCountRef = ref(db, "container/" + userid);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) setData(data);
      console.log("daya", data);
    });
  }, []);

  return (
    <div>
      <Navigation />
      <h1>Preview</h1>
      {templateId == 1 ? <Template1 data={data} /> : <Template2 data={data} />}
    </div>
  );
};
