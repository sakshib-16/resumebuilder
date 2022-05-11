import { SubHeader } from "./sub-header/SubHeader";
import classes from "./Detail.module.css";
import AddIcon from "@mui/icons-material/Add";

export const AddButton = ({ click, title }) => {
  return (
    <>
      <div className={classes.container} onClick={click}>
        <SubHeader heading={title} />
        <div className={classes.borderBox}>
          <h2>
            <AddIcon className={classes.addIcon} /> Add {title}
          </h2>
        </div>
      </div>
    </>
  );
};
