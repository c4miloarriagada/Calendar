import { createContext, useContext } from 'solid-js'
import { createStore } from 'solid-js/store'
import type { ParentProps } from 'solid-js'
import type { Actions, Calendar } from './interfaces/Provider'

const initialState: Calendar = {
  today: new Date(),
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  daysOfMonth: [],
  darkMode: false
}

const CalendarContext = createContext<[Calendar, Actions]>([initialState, {  }])

export const CalendarProvider = (props: ParentProps<Calendar>) => {
  const [state, setState] = createStore<Calendar>({
    today: initialState.today,
    month: initialState.month,
    year: initialState.year,
    darkMode: initialState.darkMode,
    daysOfMonth: initialState.daysOfMonth
  })

  const context: [Calendar, Actions] = [
    state,
    {
      getDaysOfMonth(): void {
        const month = state.today?.getMonth()!
        const date = new Date(state.today?.getFullYear()!, month, 1)
        const daysInMonth: Date[] = []
   
        while (date.getMonth() === month) {
          daysInMonth.push(new Date(date))
          date.setDate(date.getDate() + 1)
        }
        setState('daysOfMonth' , () => ({ ['daysOfMonth'] : daysInMonth  }))
      }
    }
  ] 

  return (
    <CalendarContext.Provider value={context}>
      {' '}
      <div class={`${state.darkMode ? 'darkmode' : ''}`}>
        {props.children}
      </div>{' '}
    </CalendarContext.Provider>
  )
}

export function useCalendarContext() {
  const context = useContext(CalendarContext)
  if (!context) {
    throw new Error('Context not provider')
  }
  return context
}
