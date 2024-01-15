import { For } from 'solid-js'
import style from './../Calendar.module.css'
import type { DaysOfWeek } from './interfaces/provider'

interface Props {
  daysOfWeek: DaysOfWeek
}

export const TableHeader = (props: Props) => {
  return (
    <thead class={style['calendar-t-head']}>
      <For each={Object.values(props.daysOfWeek)}>
        {(header) => (
          <th class={style['calendar-t-head__header']}>
            {header.substring(0, 2)}
          </th>
        )}
      </For>
    </thead>
  )
}
