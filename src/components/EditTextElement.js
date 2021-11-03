import React from "react";
import classNames from "classnames";
import injectSheet from "react-jss";

export function EditTextElement(props) {
  const { type = "text", className, required, error, classes } = props;
  const maxLength = props.maxLength ? props.maxLength : "500";
  return (
    <div className="form-group">
      {required && <div className={classes.errorMessage}>{error}</div>}
      <input
        id={props.id}
        autoCorrect={props.autoCorrect}
        readOnly={props.readOnly}
        onFocus={props.onFocus}
        spellCheck={props.spellCheck}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
        data-cy={props.cy_id}
        className={classNames("form-control", className)}
        maxLength={maxLength}
        disabled={props.disabled}
        type={type}
        autoComplete={type === "password" ? "new-password" : "false"}
        name={props.name}
        value={
          props.arrangemang && props.arrangemang[props.name]
            ? props.arrangemang[props.name]
            : props.value
            ? props.value
            : ""
        }
        onChange={props.handleEventChange}
      />
    </div>
  );
}

const styles = {
  required: {
    marginTop: "7px",
  },
  requiredLabel: {
    marginBottom: "0px",
  },
  errorMessage: {
    color: "red",
    textAlign: "left",
    fontSize: "12px",
    minHeight: "15px",
  },
};

export default injectSheet(styles)(EditTextElement);
