import "./App.css";
import { ThemeProvider } from "react-jss";
import { useEffect, useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { createEventId, getInitialSchemas } from "./event-utils";
import svLocale from "@fullcalendar/core/locales/sv";
import AddNewEvent from "./components/AddNewEvent";
import EventItem from "./components/calendarItems/EventItem";
import { globalTheme } from "./styles/globalTheme";

function App() {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [schemaEvents, setSchemaEvents] = useState([]);

  useEffect(() => {
    setSchemaEvents(getInitialSchemas());
  }, []);

  const handleWeekendsToggle = () => {
    setWeekendsVisible((v) => !v);
  };

  const handleDateSelect = (selectInfo) => {
    setShowAddEventModal(selectInfo);
    // let title = prompt("Please enter a new title for your event");
    // let calendarApi = selectInfo.view.calendar;

    // calendarApi.unselect(); // clear date selection

    // if (title) {
    //   calendarApi.addEvent({
    //     id: createEventId(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay,
    //   });
    // }
  };

  const addEvent = (newSchema, selectInfo) => {
    console.log("newSchema: ", newSchema);
    console.log("selectInfo: ", selectInfo);
    //PostData(), skapa sammankomsten, få tillbaka sammankomst obj och skapa nytt event till kalendern
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
    calendarApi.addEvent({
      id: newSchema.startdatum, //Ta obj id från sammankomst obj från det som skapas i databasen
      title: "Sammankomst - " + newSchema?.ledare,
      start: new Date(newSchema.startdatum + "T" + newSchema.starttid),
      end: new Date(newSchema.startdatum + "T2" + newSchema.sluttid),
      allDay: false,
    });
    // setCurrentEvents([
    //   ...schemaEvents,
    //   {
    //     id: newSchema?.ledare,
    //     title: "Sammankomst - " + newSchema?.ledare?.namn,
    //     start: new Date(newSchema.startdatum + "T" + newSchema.starttid),
    //     end: new Date(newSchema.datum + "T2" + newSchema.sluttid),
    //   },
    // ]);
    // calendarApi.addEvent({
    //   id: newSchema?.ledare,
    //   title: "Sammankomst - " + newSchema?.ledare?.namn,
    //   start: new Date(newSchema.datum + "T" + newSchema.starttid),
    //   end: new Date(newSchema.datum + "T2" + newSchema.sluttid),
    // });
  };

  const handleEventClick = (clickInfo) => {
    //EditModal
  };

  const handleEvents = (events) => {
    setCurrentEvents(events);
  };

  return (
    <ThemeProvider theme={globalTheme}>
      <div className="App">
        <header className="App-header">
          <h1>Kalender demo - Sammankomster</h1>
        </header>
        <div className="demo-app">
          <div className="demo-app-sidebar">
            <div className="demo-app-sidebar-section">
              <h2>Instructions</h2>
              <ul>
                <li>
                  Select dates and you will be prompted to create a new event
                </li>
                <li>Drag, drop, and resize events</li>
                <li>Click an event to delete it</li>
              </ul>
            </div>
            <div className="demo-app-sidebar-section">
              <label>
                <input
                  type="checkbox"
                  checked={weekendsVisible}
                  onChange={handleWeekendsToggle}
                ></input>
                toggle weekends
              </label>
            </div>
            <div className="demo-app-sidebar-section">
              <h2>All Events ({currentEvents.length})</h2>
              <ul>{currentEvents.map(renderSidebarEvent)}</ul>
            </div>
          </div>
          <div className="demo-app-main">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={weekendsVisible}
              events={schemaEvents}
              select={handleDateSelect}
              eventContent={(eventInfo) => <EventItem eventInfo={eventInfo} />} // custom render function
              eventClick={handleEventClick}
              eventsSet={handleEvents} // called after events are initialized/added/changed/removed
              locale={svLocale}
              /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
            />
          </div>
        </div>
        <AddNewEvent
          addEvent={addEvent}
          showAddEventModal={showAddEventModal}
          setShowAddEventModal={setShowAddEventModal}
        />
      </div>
    </ThemeProvider>
  );
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i>{event.title}</i>
    </li>
  );
}
export default App;
