import { Show, createEffect } from 'solid-js'
import { useCalendarContext } from './Provider'
import { CalendarRange } from '../CalendarRange/CalendarRange'
import { CalendarBase } from './CalendarBase'

export const MainCalendar = () => {
  const [state, { setCalendarMonth }] = useCalendarContext()

  createEffect(() => {
    setCalendarMonth(state.type!)
  })

  return (
    <div class='calendar-wrapper'>
      <Show when={state.type !== 'range'}>
        <CalendarBase />
      </Show>
      <Show when={state.type === 'range'}>
        <CalendarRange />
      </Show>
    </div>
  )
}
