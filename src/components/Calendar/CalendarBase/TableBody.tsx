import { For } from 'solid-js'
import { Cell } from './Cell'
import type { ActiveDay, Day } from './interfaces/calendar.interface'
import style from './../Calendar.module.css'

interface Props {
  actualMonth: Day[][]
  currentMonth: Date[]
  setActiveDate: (day: number, month: number, year: number) => void
  activeDay: ActiveDay | null
}

export const TableBody = (props: Props) => {
  return (
    <tbody class={style['calendar-t-body__table']}>
      <For each={props.actualMonth}>
        {(days) => (
          <tr>
            <For each={days}>
              {(day) => (
                <Cell
                  {...day}
                  setActiveDate={props.setActiveDate}
                  actualMonth={props.currentMonth[0]}
                  dateEnd={props.activeDay ?? null}
                />
              )}
            </For>
          </tr>
        )}
      </For>
    </tbody>
  )
}
