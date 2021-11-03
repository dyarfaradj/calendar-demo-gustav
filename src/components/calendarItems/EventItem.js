import React from "react";
import injectSheet from "react-jss";

const EventItem = ({
  eventInfo,
  eventInfo: {
    timeText,
    event: { title },
  },
  classes,
}) => {
  console.log("eventInfo: ", eventInfo);
  return (
    <div className={classes.container}>
      <b>{timeText}</b>
      <span className={classes.title}>{title}</span>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "20px",
  },
  title: {
    display: "block",
    wordWrap: "break-word",
    whiteSpace: "normal",
  },
};

export default injectSheet(styles)(EventItem);
