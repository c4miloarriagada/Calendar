import { CalendarProvider } from './CalendarBase/Provider'
import { Calendar } from '.'
import type { CalendarType } from './CalendarBase/interfaces/calendar.interface'

export interface CalendarWrapper {
  type: CalendarType
}

export const CalendarWrapper = ({ type }: CalendarWrapper) => {
  const renderCalendar = () => {
    return (
      <CalendarProvider type={type}>
        <Calendar />
      </CalendarProvider>
    )
  }
  return <>{renderCalendar()}</>
}
