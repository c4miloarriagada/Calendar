import { CalendarProvider } from './CalendarBase/Provider'
import { Calendar } from '.'
import type { CalendarType } from './CalendarBase/interfaces/calendar.interface'

export interface CalendarWrapper {
  type: CalendarType
}

export const CalendarWrapper = ({ type }: CalendarWrapper) => {
  const renderCalendar = () => {
    if (type === 'range') {
      return (
        <>
          //!todo
          <CalendarProvider type='range'>
            <Calendar />
          </CalendarProvider>
          <CalendarProvider type='range'>
            <Calendar />
          </CalendarProvider>
        </>
      )
    } else {
      return (
        <CalendarProvider type={type}>
          <Calendar />
        </CalendarProvider>
      )
    }
  }
  return <>{renderCalendar()}</>
}
