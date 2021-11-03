import React from "react";
import injectSheet from "react-jss";
import classNames from "classnames";
import { globalTheme } from "../styles/globalTheme";

const Bluebutton = ({
  classes,
  children,
  disabled,
  name,
  onClick,
  value,
  fontSize,
  title,
  className,
  divClassName,
  rounded,
}) => (
  <div className={divClassName}>
    <button
      type="button"
      style={{ fontSize: fontSize ? fontSize + "px" : "16px" }}
      disabled={disabled === true ? true : false}
      name={name ? name : ""}
      className={classNames(
        classes.button,
        className,
        rounded && classes.roundedButton
      )}
      value={value ? value : value === 0 || value === "0" ? "0" : ""}
      onClick={disabled === true ? () => {} : onClick}
    >
      {children ? children : title}
    </button>
  </div>
);

const styles = (theme) => ({
  button: {
    padding: "8px 16px",
    backgroundColor: theme.actionButtonColor, // theme.blue, // "#335cda",
    border: 0,
    borderRadius: "4px",
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.themeHoverColor, //theme.blueHoverColor, //"#182d58",
      color: theme.themeHoverTextColor,
    },
    "&:focus": {
      outline: globalTheme.outline,
      outlineOffset: "2px",
    },
  },
  roundedButton: {
    borderRadius: "50px",
    color: theme.actionButtonColor,
    backgroundColor: "white",
    border: "1px solid " + theme.actionButtonColor,
    fontSize: "1.25em !important",
    fontWeight: "400",
    padding: "10px 30px",
    transition: "all .2s ease-in-out",
    "&:hover": {
      backgroundColor: "white",
      color: theme.actionButtonColor,
      transform: "scale(1.1)",
    },
  },
  "@media (max-width: 1023px)": {
    button: {
      minWidth: "122px",
      order: 6,
      cursor: "none",
      "&:hover": {
        background: "#335cda",
      },
    },
  },
});
export default injectSheet(styles)(Bluebutton);
