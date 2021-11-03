import React from "react";
import injectSheet from "react-jss";
import Icon from "./Icon";

const PopupHeader = (props) => {
  const { classes } = props;
  return (
    <div className={classes.header}>
      <button
        onClick={props.onClick}
        title="Stäng"
        value={props.value ? props.value : ""}
      >
        <Icon type="clear" width="16px" />
      </button>
    </div>
  );
};
const styles = {
  header: {
    textAlign: "right",
    "& button": {
      border: "0",
      background: "transparent",
      padding: "10px",
      color: "black",
    },
  },
};
export default injectSheet(styles)(PopupHeader);
