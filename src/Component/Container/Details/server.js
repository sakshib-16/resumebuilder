import { ref, set, onValue, remove } from "firebase/database";
import db from "../../../Firebase/Firebase";

const userId = () => sessionStorage.getItem("uid");

export const setData = async (route, data) => {
  await set(ref(db, "container/" + userId() + "/" + route), data);
};

export const getData = (route, setData) => {
  const resumeBuilderRef = ref(db, "container/" + userId() + "/" + route);
  onValue(resumeBuilderRef, (snapshot) => {
    const data = snapshot.val();
    data && setData(data);
  });
};

export const removeData = () => remove(ref(db, "container/" + userId()));
