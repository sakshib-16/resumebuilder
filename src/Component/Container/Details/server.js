import { ref, set, onValue, remove } from "firebase/database";
import db from "../../../Firebase/Firebase";
let userid = sessionStorage.getItem("uid");

export const setData = async (route, data) => {
  await set(ref(db, "container/" + userid + "/" + route), data);
};

export const getData = (route, setData) => {
  const resumeBuilderRef = ref(db, "container/" + userid + "/" + route);
  onValue(resumeBuilderRef, (snapshot) => {
    const data = snapshot.val();
    data && setData(data);
  });
};

export const removeData = () => remove(ref(db, "container/" + userid));
