import { getDatabase, ref, onValue } from "firebase/database";

export const Preview = () => {
  const userid = sessionStorage.getItem("uid");
  const db = getDatabase();
  const starCountRef = ref(db, "container/" + userid);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
  return <div>Preview</div>;
};
