import { createContext, onMount, useContext } from 'solid-js'
import { createStore } from 'solid-js/store'
import { daysOfTheMonthParse } from '../../helpers/daysOfTheMonthParse'
import { dayParser } from '../../helpers/dayParser'
import type { ParentProps } from 'solid-js'
import type { Actions, Calendar } from './interfaces/Provider'

const date = new Date()

const initialState: Calendar = {
  today: date,
  actualMonth: { actualMonth: [] },
  prevMonth: { prevMonth: [] },
  nextMonth: { nextMonth: [] },
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
        const datePrevValidator = (
          month: number,
          year: number
        ): [number, number] => {
          if (month === 0) {
            return [11, year - 1]
          }
          return [month, year]
        }

        const dateNexValidator = (
          month: number,
          year: number
        ): [number, number] => {
          if (month + 1 === 12) {
            return [0, year + 1]
          }
          return [month + 1, year]
        }

        const [monthValidated, prevYear] = datePrevValidator(month!, year!)
        const [monthNextValidated, nextYear] = dateNexValidator(month!, year!)
        const actualMonth = new Date(year!, month!, 1)
        const nextMonth = new Date(nextYear, monthNextValidated, 1)
        const prevMonth = new Date(prevYear!, monthValidated, 1)

        setState('yearHandler', () => ({
          ['yearHandler']: state.yearHandler.yearHandler + 1
        }))
        setState('actualMonth', () => ({
          ['actualMonth']: daysOfTheMonthParse(actualMonth, month!)
        }))
        setState('nextMonth', () => ({
          ['nextMonth']: daysOfTheMonthParse(nextMonth, monthNextValidated)
        }))
        setState('prevMonth', () => ({
          ['prevMonth']: daysOfTheMonthParse(prevMonth, monthValidated)
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
      {props.children}
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
