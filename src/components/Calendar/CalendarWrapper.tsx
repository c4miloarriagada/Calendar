import { CalendarProvider } from './CalendarBase/Provider'
import { Calendar } from '.'

interface CalendarWrapper {
  type: 'single' | 'range'
}

export const CalendarWrapper = ({ type }: CalendarWrapper) => {
  const renderCalendar = () => {
    if (type === 'single') {
      return (
        <>
          <CalendarProvider>
            <Calendar />
          </CalendarProvider>
        </>
      )
    }
    if (type === 'range') {
      return (
        <>
        //!todo
          <CalendarProvider>
            <Calendar />
          </CalendarProvider>
          <CalendarProvider>
            <Calendar />
          </CalendarProvider>
        </>
      )
    }
    ;<></>
  }
  return <>{renderCalendar()}</>
}
