import { Calendar } from ".";
import { CalendarProvider } from "./components/Calendar/Provider";

function App() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        "justify-content": "center",
        "align-items": "center"
      }}
    >
      <CalendarProvider daysOfMonth={{ daysOfMonth: [] }}>
        <Calendar />
      </CalendarProvider>
    </main>
  );
}

export default App;
