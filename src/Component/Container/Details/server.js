import { ref, set, onValue } from "firebase/database";
import db from "../../../Firebase/Firebase";
let userid;

export const setData = async (route, data) => {
  userid = sessionStorage.getItem("uid");
  await set(ref(db, "container/" + userid + "/" + route), data);
};

export const getData = (route, setData) => {
  userid = sessionStorage.getItem("uid");
  const starCountRef = ref(db, "container/" + userid + "/" + route);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    data && setData(data);
  });
};
