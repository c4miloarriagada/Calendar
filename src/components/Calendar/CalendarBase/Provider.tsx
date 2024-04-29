import { createContext, onMount, useContext, type ParentProps } from 'solid-js'
import { createStore } from 'solid-js/store'
import { daysOfTheMonthParse } from '../../../helpers/daysOfTheMonthParse'
import { dayParser } from '../../../helpers/dayParser'
import { formParser } from '../../../helpers/formParser'
import {
  dateNexValidator,
  datePrevValidator
} from '../../../helpers/dateValidators'
import type {
  Actions,
  Calendar,
  TypeHandler,
  CalendarType,
  ActiveDate,
  TInitialState
} from './interfaces/calendar.interface'
import { setNewDate } from '../../../helpers/setNewDate'

const initialState: TInitialState = {
  today: new Date(),
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
  yearHandler: { yearHandler: 0 },
  type: 'single'
}

const CalendarContext = createContext<[TInitialState, Actions]>([
  initialState,
  {
    getDaysOfMonth: () => {},
    setCalendarMonth: () => {},
    setActiveDate: () => {}
  }
])

export const CalendarProvider = <T extends CalendarType>(
  props: ParentProps<Calendar<T>>
) => {
  const [state, setState] = createStore<TInitialState>({
    today: initialState.today,
    actualMonth: initialState.actualMonth,
    daysOfWeek: initialState.daysOfWeek,
    nextMonth: initialState.nextMonth,
    prevMonth: initialState.prevMonth,
    yearHandler: initialState.yearHandler,
    type: props.type,
    format: props.format
  })

  const context: [TInitialState | Calendar<T>, Actions] = [
    state,
    {
      getDaysOfMonth(
        month = state.today?.getMonth(),
        year = state.today?.getFullYear()
      ): void {
        const [monthValidated, prevYear] = datePrevValidator(month!, year!)
        const [monthNextValidated, nextYear] = dateNexValidator(month!, year!)
        const actualMonth = setNewDate(year!, month!, 1)
        const nextMonth = setNewDate(nextYear, monthNextValidated, 1)
        const prevMonth = setNewDate(prevYear!, monthValidated, 1)

        setState('yearHandler', () => ({
          yearHandler: state.yearHandler!.yearHandler + 1
        }))
        setState('actualMonth', () => ({
          actualMonth: daysOfTheMonthParse(actualMonth, month!)
        }))
        setState('nextMonth', () => ({
          nextMonth: daysOfTheMonthParse(nextMonth, monthNextValidated)
        }))
        setState('prevMonth', () => ({
          prevMonth: daysOfTheMonthParse(prevMonth, monthValidated)
        }))
      },
      setCalendarMonth(type: CalendarType): void {
        const calendarBase = dayParser({
          actualMonth: state.actualMonth?.actualMonth!,
          nextMonth: state.nextMonth?.nextMonth!,
          prevMonth: state.prevMonth?.prevMonth!,
          daysOfWeek: state.daysOfWeek!,
          today: state.today!
        })
        const typeHandler: TypeHandler = {
          single: () => {
            setState('parsedActualMonth', () => ({
              parsedActualMonth: calendarBase
            }))
          },
          range: () => {
            const [monthNextValidated, nextYear] = dateNexValidator(
              state.nextMonth?.nextMonth[0].getMonth()!,
              state.nextMonth?.nextMonth[0].getFullYear()!
            )

            const [monthValidated, prevYear] = datePrevValidator(
              state.nextMonth?.nextMonth[0].getMonth()!,
              state.nextMonth?.nextMonth[0].getFullYear()!
            )

            const nextMonth = dayParser({
              actualMonth: state.nextMonth?.nextMonth!,
              nextMonth: daysOfTheMonthParse(
                setNewDate(nextYear, monthNextValidated, 1),
                monthNextValidated
              ),
              prevMonth: daysOfTheMonthParse(
                setNewDate(prevYear, monthValidated, 1),
                monthValidated
              ),
              daysOfWeek: state.daysOfWeek!,
              today: state.today!
            })

            setState('parsedActualMonth', () => ({
              parsedActualMonth: calendarBase
            }))
            setState('rangeNextDays', nextMonth)
          },
          form: () => {
            setState('parsedActualMonth', () => ({
              parsedActualMonth: formParser(calendarBase, initialState.today!)
            }))
          }
        }
        typeHandler[type]()
      },
      setActiveDate(day: number, month: number, year: number): void {
        const newDate = setNewDate(year, month, day)
        const dateHandler = (key: keyof ActiveDate | undefined) => {
          if (!key) {
            setState('activeDate', () => ({
              ['activeDate']: {}
            }))
            return
          }
          setState('activeDate', () => ({
            ['activeDate']: {
              ...state.activeDate?.activeDate,
              [key]: { day, month, year }
            }
          }))

          if (props.type === 'single' || props.type === 'form') {
            const propsWithSetDate = props as ParentProps<Calendar<'form'>>
            propsWithSetDate.setDate &&
              propsWithSetDate.setDate({
                date: newDate,
                ...(props.format && {
                  ['formatedDate']: new Intl.DateTimeFormat(
                    props.format.locale,
                    props.format.options
                  ).format(newDate)
                })
              })
          }
          if (props.type === 'range') {
            const dateKey = key === 'dateBegin' ? 'dateTo' : 'dateFrom'

            const propsWithSetDates = props as ParentProps<Calendar<'range'>>
            propsWithSetDates.setDate &&
              propsWithSetDates.date() &&
              propsWithSetDates.setDate({
                ...propsWithSetDates.date(),
                [dateKey]: newDate,
                ...(props.format && {
                  ['formated']: {
                    ...propsWithSetDates.date()['formated'],
                    [dateKey]: new Intl.DateTimeFormat(
                      props.format.locale,
                      props.format.options
                    ).format(newDate)
                  }
                })
              })
          }
        }

        const rangeModeHandler = (
          day: number,
          month: number,
          year: number
        ): keyof ActiveDate | undefined => {
          const endDate = setNewDate(
            state.activeDate?.activeDate.dateEnd?.year!,
            state.activeDate?.activeDate.dateEnd?.month!,
            state.activeDate?.activeDate.dateEnd?.day!
          )

          const beginDate = setNewDate(
            state.activeDate?.activeDate.dateBegin?.year!,
            state.activeDate?.activeDate.dateBegin?.month!,
            state.activeDate?.activeDate.dateBegin?.day!
          )

          const dateToCompare = setNewDate(year, month, day)

          if (
            dateToCompare.getTime() === endDate.getTime() ||
            dateToCompare.getTime() === beginDate.getTime()
          ) {
            return undefined
          }
          if (dateToCompare > endDate && isNaN(beginDate.getDate())) {
            setState('activeDate', () => ({
              ['activeDate']: {
                ...state.activeDate?.activeDate,
                ['dateBegin']: state.activeDate?.activeDate['dateEnd']
              }
            }))
            return 'dateEnd'
          }

          if (!isNaN(endDate.getDate()) && isNaN(beginDate.getDate())) {
            return 'dateBegin'
          }
          if (isNaN(endDate.getDate())) {
            return 'dateEnd'
          }

          if (
            (beginDate < dateToCompare && dateToCompare < endDate) ||
            dateToCompare > endDate
          ) {
            return 'dateEnd'
          }

          if (dateToCompare < endDate) {
            return 'dateBegin'
          }

          return 'dateBegin'
        }

        switch (state.type) {
          case 'range':
            const rangeHandler = rangeModeHandler(day, month, year)
            dateHandler(rangeHandler)

            break
          default:
            dateHandler('dateEnd')
        }
      }
    }
  ]

  onMount(() => {
    context[1].getDaysOfMonth()
    context[1].setCalendarMonth(props.type ?? 'single')
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
