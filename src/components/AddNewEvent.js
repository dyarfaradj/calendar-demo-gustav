import React, { useState } from "react";
import GustavModal from "./GustavModal";
import injectSheet from "react-jss";
import ButtonContainer from "./ButtonContainer";
import BlueButton from "./BlueButton";
import { EditTextElement } from "./EditTextElement";

const AddNewEvent = ({
  classes,
  addEvent,
  setShowAddEventModal,
  showAddEventModal,
}) => {
  const [hasMadeChanges, setHasMadeChanges] = useState(false);
  const [formData, setFormData] = useState({
    startdatum: showAddEventModal.startStr,
    starttid: "",
    sluttid: "",
    ledare: "",
    allDay: false,
    sal: "",
  });

  useState(() => {
    if (showAddEventModal) {
      setFormData({
        startdatum: showAddEventModal.startStr,
        starttid: "",
        sluttid: "",
        ledare: "",
        allDay: false,
        sal: "",
      });
    }
  }, [showAddEventModal]);

  const onChangeField = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
    if (!hasMadeChanges) {
      setHasMadeChanges(true);
    }
  };

  const onClose = () => {
    setFormData({
      startdatum: showAddEventModal.startStr,
      starttid: "",
      sluttid: "",
      ledare: "",
      allDay: false,
      sal: "",
    });
    setShowAddEventModal(false);
  };

  const onCreate = () => {
    addEvent(formData, showAddEventModal);
    setShowAddEventModal(false);
  };

  return (
    <>
      {showAddEventModal && (
        <GustavModal
          dontAutoFocus
          onCloseRequest={onClose}
          dontCloseOnClickOutside
        >
          Skapa ny sammankomst - {showAddEventModal.startStr}
          <div className={classes.fieldContainer}>
            <div className={classes.field}>
              <EditTextElement
                value={formData.startdatum}
                label="Startdatum"
                placeholder="Startdatum"
                name="startdatum"
                handleEventChange={onChangeField("startdatum")}
              />
            </div>
            <div className={classes.field}>
              <EditTextElement
                value={formData.starttid}
                label="Starttid"
                placeholder="Starttid"
                name="starttid"
                handleEventChange={onChangeField("starttid")}
              />
            </div>
            <div className={classes.field}>
              <EditTextElement
                value={formData.sluttid}
                label="Sluttid"
                placeholder="Sluttid"
                name="sluttid"
                handleEventChange={onChangeField("sluttid")}
              />
            </div>
            <div className={classes.field}>
              <EditTextElement
                value={formData.ledare}
                label="Ledare"
                placeholder="Ledare"
                name="ledare"
                handleEventChange={onChangeField("ledare")}
              />
            </div>
          </div>
          <ButtonContainer padding="24px 0 0 0">
            <BlueButton onClick={onClose}>Avbryt</BlueButton>
            <div>&nbsp;</div>
            <BlueButton onClick={onCreate}>Skapa</BlueButton>
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
  field: {
    marginTop: "5px",
    marginBottom: "5px",
  },
};

export default injectSheet(styles)(AddNewEvent);
