import { createContext, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';
import type { ParentProps } from 'solid-js';
import type { Actions, Calendar } from './interfaces/Provider';

const initialState: Calendar = {
  today: new Date(),
  daysOfMonth: { daysOfMonth: [] },
  darkMode: false,
  daysOfWeek : {
    0:"Sunday",
    1: "Monday",
    2: "Tuesday",
    3:"Wednesday",
    4: "Thursday",
    5: "Friday",
    6:"Saturday"
  } 

};

const CalendarContext = createContext<[Calendar, Actions]>([initialState, {}]);

export const CalendarProvider = (props: ParentProps<Calendar>) => {
  const [state, setState] = createStore<Calendar>({
    today: initialState.today,
    darkMode: initialState.darkMode,
    daysOfMonth: initialState.daysOfMonth,
    daysOfWeek: initialState.daysOfWeek
  });

  const context: [Calendar, Actions] = [
    state,
    {
      getDaysOfMonth(month = state.today?.getMonth(), year = state.today?.getFullYear()): void {
        const date = new Date(year!, month!, 1);
        const daysInMonth: Date[] = [];
        while (date.getMonth() === month) {
          daysInMonth.push(new Date(date));
          date.setDate(date.getDate() + 1);
        }

        setState('daysOfMonth', () => ({ ['daysOfMonth']: daysInMonth }));
      }
    }
  ];

  return (
    <CalendarContext.Provider value={context}>
      {' '}
      <div class={`${state.darkMode ? 'darkmode' : ''}`}>{props.children}</div>{' '}
    </CalendarContext.Provider>
  );
};

export function useCalendarContext() {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error('Context not provider');
  }
  return context;
}
