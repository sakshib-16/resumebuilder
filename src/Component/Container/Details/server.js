import { ref, set, onValue } from "firebase/database";
import db from "../../../Firebase/Firebase";

export const setData = async ([userid, route], data) => {
  await set(ref(db, "container/" + userid + "/" + route), data);
};
