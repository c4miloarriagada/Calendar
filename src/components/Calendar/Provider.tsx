import { createContext, useContext } from 'solid-js'
import { createStore } from 'solid-js/store'
import type { ParentProps } from 'solid-js'
import type { Actions, Calendar } from './interfaces/Provider'

const initialState: Calendar = {
  today: new Date(),
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  darkMode: false


}

const CalendarContext = createContext<[Calendar, Actions]>([initialState, {}])

export const CalendarProvider = (props: ParentProps<Calendar>) => {
  const [state, ] = createStore<Calendar>({
    today: initialState.today,
    month: initialState.month,
    year: initialState.year,
    darkMode: initialState.darkMode
  })

  const context: [Calendar, Actions] = [
    state,
    {
      getDaysOfMonth(){

      }
    }
    
  ]



  return (
    <CalendarContext.Provider value={context}>
      {' '}
      <div class={`accordion-container ${state.darkMode ? 'darkmode' : ''}`}>
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
