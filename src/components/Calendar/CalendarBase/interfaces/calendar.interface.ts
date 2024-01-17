export interface Calendar {
  today?: Date
  actualMonth?: { actualMonth: Date[] }
  daysOfWeek?: DaysOfWeek
  prevMonth?: { prevMonth: Date[] }
  nextMonth?: { nextMonth: Date[] }
  parsedActualMonth?: { parsedActualMonth: Day[][] }
  yearHandler?: { yearHandler: number }
  activeDate?: { activeDate: ActiveDate }
  type: CalendarType
}

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
  setCalendarMonth: () => void
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
  deactivated: boolean
}

type ActiveDate = {
  dateEnd?: ActiveDay
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
