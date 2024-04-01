import { CalendarProvider } from './CalendarBase/Provider'
import { MainCalendar } from './CalendarBase/MainCalendar'
import type {
  CalendarType,
  TCalendar
} from './CalendarBase/interfaces/calendar.interface'
import { Match, Switch } from 'solid-js'

export type Calendar<T extends CalendarType> = {
  type: CalendarType
} & TCalendar

export const Calendar = <T extends CalendarType>({
  type,
  values,
  setValues
}: Calendar<T>) => {
  return (
    <Switch fallback={<p>Error</p>}>
      <Match when={type === 'form' || type === 'single'}>
        <CalendarProvider<'form'>
          date={values}
          setDate={setValues}
          type={'form'}
        >
          <MainCalendar />
        </CalendarProvider>
      </Match>
      <Match when={type === 'range'}>
        <CalendarProvider<'range'>
          dates={values}
          setDates={setValues}
          type={'range'}
        >
          <MainCalendar />
        </CalendarProvider>
      </Match>
    </Switch>
  )
}
