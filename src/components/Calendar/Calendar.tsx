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
  setDate,
  format
}: Calendar<T>) => {
  console.log(format)
  return (
    <CalendarProvider date={date} format={format} setDate={setDate} type={type}>
      <MainCalendar />
    </CalendarProvider>
  )
}
