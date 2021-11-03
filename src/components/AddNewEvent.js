import React, { useState } from "react";
import GustavModal from "./GustavModal";
import injectSheet from "react-jss";
import ButtonContainer from "./ButtonContainer";
import BlueButton from "./BlueButton";
import { EditTextElement } from "./EditTextElement";

const AddNewEvent = ({
  classes,
  setShowAddEventModal,
  showAddEventModal,
  selectInfo,
}) => {
  const [hasMadeChanges, setHasMadeChanges] = useState(false);
  const [formData, setFormData] = useState({
    startdatum: "",
    starttid: "",
    sluttid: "",
    ledare: "",
    sal: "",
  });
  console.log(":", selectInfo);

  const onChangeField = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
    if (!hasMadeChanges) {
      setHasMadeChanges(true);
    }
  };
  return (
    <>
      {showAddEventModal && (
        <GustavModal
          dontAutoFocus
          onCloseRequest={() => setShowAddEventModal(false)}
          dontCloseOnClickOutside
        >
          Skapa ny sammankomst - {selectInfo.startStr}
          <div className={classes.fieldContainer}>
            <EditTextElement
              value={formData.startdatum}
              label="Startdatum"
              placeholder="Startdatum"
              name="startdatum"
              handleEventChange={onChangeField("startdatum")}
            />
          </div>
          <ButtonContainer padding="24px 0 0 0">
            <BlueButton onClick={() => setShowAddEventModal(false)}>
              Avbryt
            </BlueButton>
            <div>&nbsp;</div>
            <BlueButton onClick={() => alert("s")}>Skapa</BlueButton>
          </ButtonContainer>
        </GustavModal>
      )}
    </>
  );
};

const styles = {
  fieldContainer: {
    marginTop: "20px",
  },
};

export default injectSheet(styles)(AddNewEvent);
