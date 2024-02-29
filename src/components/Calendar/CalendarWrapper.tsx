import { CalendarProvider } from './CalendarBase/Provider'
import { Calendar } from '.'
import type {
  CalendarType,
  RangeMode
} from './CalendarBase/interfaces/calendar.interface'

export interface CalendarWrapper {
  type: CalendarType
}

export const CalendarWrapper = ({ type, dates, setDates }: RangeMode) => {
  return (
    <CalendarProvider dates={dates} setDates={setDates} type={type}>
      <Calendar />
    </CalendarProvider>
  )
}
