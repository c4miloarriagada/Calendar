import { CalendarProvider } from './CalendarBase/Provider'
import { MainCalendar } from './CalendarBase/MainCalendar'
import type {
  CalendarType,
  TCalendar
} from './CalendarBase/interfaces/calendar.interface'

export type Calendar<T extends CalendarType> = {
  type: CalendarType
} & TCalendar<T>

export const Calendar = <T extends CalendarType>({
  type,
  date,
  setDate
}: Calendar<T>) => {
  return (
    <CalendarProvider date={date} setDate={setDate} type={type}>
      <MainCalendar />
    </CalendarProvider>
  )
}
