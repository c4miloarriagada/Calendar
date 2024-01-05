import { createContext, onMount, useContext } from 'solid-js'
import { createStore } from 'solid-js/store'
import { daysOfTheMonthParse } from '../../helpers/daysOfTheMonthParse'
import { dayParser } from '../../helpers/dayParser'
import type { ParentProps } from 'solid-js'
import type { Actions, Calendar, Months } from './interfaces/Provider'

const date = new Date()

const initialState: Calendar = {
  today: date,
  actualMonth: { actualMonth: [] },
  prevMonth: { prevMonth: [] },
  nextMonth: { nextMonth: [] },
  darkMode: false,
  daysOfWeek: {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  },
  parsedActualMonth: { parsedActualMonth: [] },
  yearHandler: { yearHandler: 0 }
}

const CalendarContext = createContext<[Calendar, Actions]>([
  initialState,
  { getDaysOfMonth: () => {}, setCalendarMonth: () => {} }
])

export const CalendarProvider = (props: ParentProps<Calendar>) => {
  const [state, setState] = createStore<Calendar>({
    today: initialState.today,
    darkMode: initialState.darkMode,
    actualMonth: initialState.actualMonth,
    daysOfWeek: initialState.daysOfWeek,
    nextMonth: initialState.nextMonth,
    prevMonth: initialState.prevMonth,
    yearHandler: initialState.yearHandler
  })

  const context: [Calendar, Actions] = [
    state,
    {
      getDaysOfMonth(
        month = state.today?.getMonth(),
        year = state.today?.getFullYear()
      ): void {
        const months: Months = {
          prev: month! - 1,
          actual: month!,
          next: month! + 1
        }

        const actualMonth = new Date(year!, months.actual, 1)
        const nextMonth = new Date(year!, months.next, 1)
        const prevMonth = new Date(year!, months.prev, 1)

        setState('yearHandler', () => ({
          ['yearHandler']: state.yearHandler.yearHandler + 1
        }))
        setState('actualMonth', () => ({
          ['actualMonth']: daysOfTheMonthParse(actualMonth, months.actual)
        }))
        setState('nextMonth', () => ({
          ['nextMonth']: daysOfTheMonthParse(nextMonth, months.next)
        }))
        setState('prevMonth', () => ({
          ['prevMonth']: daysOfTheMonthParse(prevMonth, months.prev)
        }))
      },
      setCalendarMonth(): void {
        setState('parsedActualMonth', () => ({
          ['parsedActualMonth']: dayParser({
            actualMonth: state.actualMonth?.actualMonth!,
            nextMonth: state.nextMonth?.nextMonth!,
            prevMonth: state.prevMonth?.prevMonth!,
            daysOfWeek: state.daysOfWeek!,
            today: state.today!
          })
        }))
      }
    }
  ]

  onMount(() => {
    context[1].getDaysOfMonth()
    context[1].setCalendarMonth()
  })

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
