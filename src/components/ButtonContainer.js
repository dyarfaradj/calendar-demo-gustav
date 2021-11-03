import React from "react";
import injectSheet from "react-jss";
import classNames from "classnames";

const ButtonContainer = (props) => {
  const { classes, children, className } = props;
  return (
    <div className={classNames(classes.buttonContainer, className)}>
      {children}
    </div>
  );
};

const styles = {
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: (props) => props.padding,
  },
  "@media (max-width: 1023px)": {
    buttonContainer: {
      flexWrap: " wrap",
      justifyContent: "center",
      padding: "0 9px 27px 9px",
      "& > div": {
        flexBasis: "70%",
        textAlign: "center",
        marginTop: "24px",
      },
      "& > div:first-child": {
        order: 12,
      },
      "& > div:last-child": {
        order: 0,
      },
    },
  },
};
export default injectSheet(styles)(ButtonContainer);
