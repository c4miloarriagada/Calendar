import { Day } from './interfaces/Provider'
import style from './Calendar.module.css'

export const Cell = (props: Day) => {
  return (
    <td
      class={[
        style['day-btn'],
        props.today === true ? style['today'] : ''
      ].join(' ')}
    >
      {' '}
      <button disabled={!props.activeMonth}>{props.day}</button>
    </td>
  )
}
