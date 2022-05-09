import { ref, set, onValue } from "firebase/database";
import db from "../../../Firebase/Firebase";

export const setData = async ([userid, route], data) => {
  await set(ref(db, "container/" + userid + "/" + route), data);
};

export const getData = ([userid, route], [fetch, setData]) => {
  const starCountRef = ref(db, "container/" + userid + "/" + route);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    !fetch && setData(data);
  });
};
