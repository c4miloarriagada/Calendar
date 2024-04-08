import type { Accessor, Setter } from 'solid-js'

export type Calendar<T extends CalendarType> = {
  today?: Date
  actualMonth?: { actualMonth: Date[] }
  daysOfWeek?: DaysOfWeek
  prevMonth?: { prevMonth: Date[] }
  nextMonth?: { nextMonth: Date[] }
  parsedActualMonth?: { parsedActualMonth: Day[][] }
  yearHandler?: { yearHandler: number }
  activeDate?: { activeDate: ActiveDate }
  rangeNextDays?: Day[][]
  rangeNextMonth?: Date
  // format: Format
  type: T
} & TCalendar<T>

export type TInitialState = {
  today?: Date
  actualMonth?: { actualMonth: Date[] }
  daysOfWeek?: DaysOfWeek
  prevMonth?: { prevMonth: Date[] }
  nextMonth?: { nextMonth: Date[] }
  parsedActualMonth?: { parsedActualMonth: Day[][] }
  yearHandler?: { yearHandler: number }
  activeDate?: { activeDate: ActiveDate }
  rangeNextDays?: Day[][]
  rangeNextMonth?: Date
  type: CalendarType
}

export type CalendarAccesor<T extends CalendarType> = T extends 'single'
  ? Accessor<SingleDate>
  : T extends 'range'
    ? Accessor<RangeDate>
    : T extends 'form'
      ? Accessor<SingleDate>
      : never

export type CalendarSetter<T extends CalendarType> = T extends 'single'
  ? Setter<SingleDate>
  : T extends 'range'
    ? Setter<RangeDate>
    : T extends 'form'
      ? Setter<SingleDate>
      : never

export type Months = {
  prev: number
  actual: number
  next: number
}

export type DaysOfWeek = {
  0: 'Sunday'
  1: 'Monday'
  2: 'Tuesday'
  3: 'Wednesday'
  4: 'Thursday'
  5: 'Friday'
  6: 'Saturday'
}
export interface Actions {
  getDaysOfMonth: (month?: number, year?: number) => void
  setCalendarMonth: (type: CalendarType) => void
  setActiveDate: (day: number, month: number, year: number) => void
}

export interface Day {
  nDay: number
  day: number
  date: number
  month: number
  year: number
  activeMonth: boolean
  today: boolean
  disabled: boolean
}

export type ActiveDate = {
  dateEnd?: ActiveDay
  dateBegin?: ActiveDay
}

export type ActiveDay = {
  day: number
  month: number
  year: number
}

export interface TypeHandler {
  single: () => void
  form: () => void
  range: () => void
}

export type CalendarType = 'single' | 'range' | 'form'

export type TCalendar<T extends CalendarType> = {
  date: CalendarAccesor<T>
  setDate: CalendarSetter<T>
}

export type SingleDate = {
  date: Date | {}
}

export type RangeDate = {
  dateTo: Date | {}
  dateFrom: Date | {}
}
