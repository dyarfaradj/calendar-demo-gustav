import React, { useEffect, useRef } from "react";
import injectSheet from "react-jss";
import PopupHeader from "./PopupHeader";

const GustavModal = (props) => {
  const modal = useRef(null);
  const {
    onCloseRequest,
    dontCloseOnClickOutside,
    dontAutoFocus,
    children,
    classes,
  } = props;

  const handleKeyUp = (e) => {
    const keys = {
      27: () => {
        e.preventDefault();
        onCloseRequest();
        window.removeEventListener("keyup", handleKeyUp, false);
      },
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  };
  const handleOutsideClick = (e) => {
    if (modal.current) {
      if (!modal.current.contains(e.target)) {
        onCloseRequest();
        document.removeEventListener("click", handleOutsideClick, false);
      }
    }
  };

  useEffect(() => {
    if (!dontCloseOnClickOutside) {
      setTimeout(() => {
        document.addEventListener("click", handleOutsideClick, false);
      }, 100);
    }

    window.addEventListener("keyup", handleKeyUp, false);

    return () => {
      window.removeEventListener("keyup", handleKeyUp, false);
      if (!dontCloseOnClickOutside)
        document.removeEventListener("click", handleOutsideClick, false);
    };
  }, []);

  useEffect(() => {
    if (!modal || !modal.current || dontAutoFocus) return;
    var inputs = modal.current.querySelectorAll("input");
    for (let input of inputs) {
      if (!input.disabled) {
        input.focus();
        break;
      }
    }
  }, [dontAutoFocus]);

  const keyDownHandler = (e) => {
    // only execute if tab is pressed
    if (e.key !== "Tab") return;

    // here we query all focusable elements, customize as your own need
    const focusableModalElements = modal.current.querySelectorAll(
      "a[href], button:not([disabled]), textarea, input, select"
    );

    const firstElement = focusableModalElements[0];
    const lastElement =
      focusableModalElements[focusableModalElements.length - 1];

    // if going forward by pressing tab and lastElement is active shift focus to first focusable element
    if (!e.shiftKey && document.activeElement === lastElement) {
      firstElement.focus();
      return e.preventDefault();
    }

    // if going backward by pressing tab and firstElement is active shift focus to last focusable element
    if (e.shiftKey && document.activeElement === firstElement) {
      lastElement.focus();
      e.preventDefault();
    }
  };

  return (
    <div className={classes.modalOverlay} onKeyDown={keyDownHandler}>
      <div className={classes.modal} ref={modal}>
        <div className={classes.headerContainer}>
          <PopupHeader onClick={onCloseRequest} />
        </div>
        <div className={classes.modalContent}>{children}</div>
      </div>
    </div>
  );
};

const styles = {
  "@global": {
    body: { overflow: "hidden" },
  },
  headerContainer: {
    position: "fixed",
    width: "inherit",
    backgroundColor: "white",
    "@media (max-width: 1023px)": {
      width: "calc(100% - 18px)",
    },
  },
  // The modal wrapper: absolute positioning,
  // 100% of the browser window height and width.
  modalOverlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    padding: "1rem",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: "99999",
    opacity: 1,

    animation: "show .5s ease",
    "@media (max-width: 1023px)": {
      padding: "9px!important",
    },
  },
  // Fade-in open animation
  "@keyframes show": {
    "0%": {
      display: "none",
      opacity: 0,
    },
    "1%": {
      display: "flex",
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },

  // The modal window: a empty div, vertical and horizontal cenetered.
  modal: {
    width: (props) => (props.width ? props.width : "32rem"),
    backgroundColor: "#fff",
    boxShadow: [0, 0, "0.625rem", "rgba(0, 0, 0, 0.2)"],
    maxHeight: "90%",
    //overflowY: "auto",
    overflowX: "hidden",
    "@media (max-width: 1023px)": {
      width: "100%!important",
    },
  },
  modalContent: {
    padding: "42px 24px 24px 24px",
    overflowX: "hidden",
    overflowY: "auto",
    "& h2": {
      padding: "0 0 12px 0",
      borderBottom: "1px solid #dbe0e8",
      margin: "0 0 12px 0",
    },
    "@media (max-width: 1023px)": {
      padding: "42px 9px 9px 9px",
    },
  },
};
export default injectSheet(styles)(GustavModal);
