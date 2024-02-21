import { Show, createEffect } from 'solid-js'
import { useCalendarContext } from './Provider'
import { CalendarRange } from '../CalendarRange/CalendarRange'
import { CalendarBase } from './CalendarBase'

export const Calendar = () => {
  const [state, { setCalendarMonth }] = useCalendarContext()

  createEffect(() => {
    setCalendarMonth(state.type!)
  })

  return (
    <>
      <Show when={state.type !== 'range'}>
        <CalendarBase />
      </Show>
      <Show when={state.type === 'range'}>
        <CalendarRange />
      </Show>
    </>
  )
}
