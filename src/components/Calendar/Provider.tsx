import { createContext, onMount, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { daysOfTheMonthParse } from "../../helpers/daysOfTheMonthParse";
import { dayParser } from "../../helpers/dayParser";
import type { ParentProps } from "solid-js";
import type { Actions, Calendar, Months } from "./interfaces/Provider";

const initialState: Calendar = {
  today: new Date(),
  actualMonth: { actualMonth: [] },
  darkMode: false,
  daysOfWeek: {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
  },
  prevMonth: { prevMonth: [] },
  nextMonth: { nextMonth: [] },
  parsedActualMonth: { parsedActualMonth: [] }
};

const CalendarContext = createContext<[Calendar, Actions]>([
  initialState,
  { getDaysOfMonth: () => {} }
]);

export const CalendarProvider = (props: ParentProps<Calendar>) => {
  const [state, setState] = createStore<Calendar>({
    today: initialState.today,
    darkMode: initialState.darkMode,
    actualMonth: initialState.actualMonth,
    daysOfWeek: initialState.daysOfWeek,
    nextMonth: initialState.nextMonth,
    prevMonth: initialState.prevMonth
  });

  const context: [Calendar, Actions] = [
    state,
    {
      getDaysOfMonth(month = state.today?.getMonth(), year = state.today?.getFullYear()): void {
        const months: Months = {
          prev: month! - 1 < 0 ? 11 : month! - 1,
          actual: month!,
          next: month! + 1 === 12 ? 0 : month! + 1
        };
        const yearHandler = month === 0 ? year! - 1 : year;
        const actualMonth = new Date(year!, months.actual, 1);
        const nextMonth = new Date(year!, month! + 1, 1);
        const prevMonth = new Date(yearHandler!, months.prev, 1);
        setState("actualMonth", () => ({
          ["actualMonth"]: daysOfTheMonthParse(actualMonth, months.actual)
        }));
        setState("nextMonth", () => ({
          ["nextMonth"]: daysOfTheMonthParse(nextMonth, months.next)
        }));
        setState("prevMonth", () => ({
          ["prevMonth"]: daysOfTheMonthParse(prevMonth, months.prev)
        }));
      }
    }
  ];

  onMount(() => {
    context[1].getDaysOfMonth();
    setState("parsedActualMonth", () => ({
      ["parsedActualMonth"]: dayParser({
        actualMonth: state.actualMonth?.actualMonth!,
        nextMonth: state.nextMonth?.nextMonth!,
        prevMonth: state.prevMonth?.prevMonth!,
        daysOfWeek: state.daysOfWeek!
      })
    }));
  });

  return (
    <CalendarContext.Provider value={context}>
      {" "}
      <div class={`${state.darkMode ? "darkmode" : ""}`}>{props.children}</div>{" "}
    </CalendarContext.Provider>
  );
};

export function useCalendarContext() {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error("Context not provider");
  }
  return context;
}
