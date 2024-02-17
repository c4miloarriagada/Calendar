import { CalendarProvider } from './CalendarBase/Provider'
import { Calendar } from '.'
import type { CalendarType } from './CalendarBase/interfaces/calendar.interface'
import type { Accessor, Setter } from 'solid-js'

export interface CalendarWrapper {
  type: CalendarType
}

interface RangeMode extends CalendarWrapper {
  date: Accessor<Date>
  setDate: Setter<Date>
}

export type Date =
  | {
      dateTo: Date
      dateFrom: Date
    }
  | {}

export const CalendarWrapper = ({ type, date, setDate }: RangeMode) => {
  const renderCalendar = () => {
    return (
      <CalendarProvider type={type}>
        <Calendar />
      </CalendarProvider>
    )
  }
  return <>{renderCalendar()}</>
}
