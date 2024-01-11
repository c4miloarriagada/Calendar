import { useCalendarContext } from './Provider'
import { For, createEffect } from 'solid-js'
import { CalendarButtons } from './CalendarButtons'
import { Cell } from './Cell'
import style from './Calendar.module.css'

export const Calendar = () => {
  const [state, { setCalendarMonth, setActiveDate }] = useCalendarContext()

  createEffect(() => {
    setCalendarMonth()
  })



  return (
    <div class={style['calendar-container']}>
      <div class={style['calendar-buttons']}>
        <span>
          <CalendarButtons iconDirection='left' />{' '}
        </span>
        <span class={style['month']}>
          {`${state.actualMonth?.actualMonth[0]
            ?.toLocaleString('default', { month: 'long' })
            .split(
              ' '
            )[0]}    ${state?.actualMonth?.actualMonth[0]?.getFullYear()}`}
        </span>
        <span>
          <CalendarButtons iconDirection='right' />{' '}
        </span>
      </div>
      <div>
        <table class={style['calendar-table']} role='grid'>
          <thead class={style['calendar-t-head']}>
            <For each={Object.values(state?.daysOfWeek!)}>
              {(header) => (
                <th class={style['calendar-days']}>{header.substring(0, 2)}</th>
              )}
            </For>
          </thead>
          <tbody class={style['fade-in']}>
            <For each={state.parsedActualMonth?.parsedActualMonth}>
              {(days) => (
                <tr>
                  <For each={days}>
                    {(day) => (
                      <Cell
                        {...day}
                        setActiveDate={setActiveDate}
                        actualMonth={state.actualMonth?.actualMonth[0]!}
                        dateEnd={state.activeDate?.activeDate.dateEnd ?? null}
                      />
                    )}
                  </For>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </div>
    </div>
  )
}
