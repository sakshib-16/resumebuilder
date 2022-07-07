import classes from "./badge.module.css";
import CloseIcon from "@mui/icons-material/Close";

export const Badge = (props) => {
  return (
    <div className={classes.badge}>
      <p>{props.value}</p>
      <CloseIcon
        sx={{ fontSize: 20 }}
        onClick={() => {
          props.remove(props.skills.filter((s) => s.id !== props.id));
        }}
      />
    </div>
  );
};
