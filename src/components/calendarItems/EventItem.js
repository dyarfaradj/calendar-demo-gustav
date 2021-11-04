import React from "react";
import injectSheet from "react-jss";

const EventItem = ({
  eventInfo,
  eventInfo: {
    event: { title },
  },
  classes,
}) => {
  return (
    <div className={classes.container}>
      <b>
        {new Date(eventInfo.event._instance.range.start).getHours()} -{" "}
        {new Date(eventInfo.event._instance.range.end).getHours()}
      </b>
      <span className={classes.title}>{title}</span>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "20px",
    backgroundColor: "#335cda",
    color: "white",
    padding: "5px",
    borderRadius: "5px",
  },
  title: {
    display: "block",
    wordWrap: "break-word",
    whiteSpace: "normal",
  },
};

export default injectSheet(styles)(EventItem);
