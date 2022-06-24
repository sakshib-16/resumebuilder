import CloseIcon from "@mui/icons-material/Close";

export const Close = ({ click }) => {
  return (
    <CloseIcon
      sx={{
        background: "#E8E8E8",
        borderRadius: "50%",
        fontSize: 16,
        color: "#9B9B9B",
        padding: 0.5,
        margin: 2,
        float: "right",
      }}
      onClick={click}
    />
  );
};
