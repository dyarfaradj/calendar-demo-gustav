let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "All-day event",
    start: todayStr,
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: todayStr + "T12:00:00",
  },
];

export function createEventId() {
  return String(eventGuid++);
}

export const getInitialSchemas = () => {
  let schemaEvents = [];
  schemaList.map((x) =>
    schemaEvents.push({
      id: x.id.toString(),
      allDay: false,
      title: "Sammankomst - " + x?.ledare?.namn,
      start: new Date(x.datum + "T" + x.starttid),
      end: new Date(x.datum + "T2" + x.sluttid),
    })
  );
  console.log("schemaEvents: ", schemaEvents);
  return schemaEvents;
};

const schemaList = [
  {
    id: 5258388,
    starttid: "10:00",
    sluttid: "11:00",
    klar: true,
    datum: "2021-11-01",
    namn: "Söndag 1 november 2021",
    redigerbar: true,
    mittSchema: true,
    tid: "10:00-11:00",
    signeratAntalStudieTimmar: 1,
    slutligtAntalStudieTimmar: null,
    antalGodkandaDeltagare: 0,
    ledare: {
      id: 1015441,
      kod: null,
      namn: "Dyar Faradj",
    },
    huvudledare: {
      id: 1015441,
      kod: null,
      namn: "Dyar Faradj",
    },
    huvudledarens: true,
    arrangemangID: 774871,
    sal: {
      id: 12341,
      namn: "1an",
      lokalID: 0,
      lokalnamn: "Olof Testar en lokal",
      handikappanpassad: false,
      bokningshantering: true,
      webb: false,
      aktiv: false,
      antalPlatser: 0,
      notering: null,
      internTimPris: 0,
      externTimPris: 0,
      internTillfallePris: 0,
      externTillfallePris: 0,
    },
    narvaros: [427717, 969878, 1001001, 1011178, 1014289, 1015378, 1015441],
    aktiv: false,
    notering: null,
    signerad: false,
    action: 0,
  },
  {
    id: 5258389,
    starttid: "10:00",
    sluttid: "11:00",
    klar: false,
    datum: "2021-11-25",
    namn: "Söndag 25 november 2021",
    redigerbar: true,
    mittSchema: false,
    tid: "10:00-11:00",
    signeratAntalStudieTimmar: null,
    slutligtAntalStudieTimmar: null,
    antalGodkandaDeltagare: 0,
    ledare: {
      id: 1015378,
      kod: null,
      namn: "Maja Boman-Persson",
    },
    huvudledare: {
      id: 1015441,
      kod: null,
      namn: "Dyar Faradj",
    },
    huvudledarens: false,
    arrangemangID: 774871,
    sal: {
      id: 12341,
      namn: "1an",
      lokalID: 0,
      lokalnamn: "Olof Testar en lokal",
      handikappanpassad: false,
      bokningshantering: true,
      webb: false,
      aktiv: false,
      antalPlatser: 0,
      notering: null,
      internTimPris: 0,
      externTimPris: 0,
      internTillfallePris: 0,
      externTillfallePris: 0,
    },
    narvaros: [1001001],
    aktiv: true,
    notering: "s",
    signerad: false,
    action: 0,
  },
];
