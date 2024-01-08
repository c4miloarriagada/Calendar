import { ActiveDay, Day } from './interfaces/Provider'
import style from './Calendar.module.css'

interface Props extends Day {
  setActiveDate: (day: number, month: number, year: number) => void
  dateEnd: ActiveDay | null
  actualMonth: number
}

export const Cell = (props: Props) => {
  const handleClick = () => {
    const { setActiveDate } = props
    setActiveDate(props.day, props.month, props.year)
    activeDate()
  }

  const activeDate = () => {
    const { dateEnd } = props

    if (
      dateEnd?.day === props?.day &&
      dateEnd.month === props?.actualMonth &&
      dateEnd.year === props?.year
    ) {
      return true
    }
    return false
  }

  return (
    <td
      class={[
        style['day-btn'],
        props.today ? style['today'] : '',
        activeDate() ? style['active'] : ''
      ].join(' ')}
    >
      {' '}
      <button
        role='gridcell'
        aria-disabled={!props.activeMonth}
        onClick={handleClick}
      >
        {props.day}
      </button>
    </td>
  )
}
