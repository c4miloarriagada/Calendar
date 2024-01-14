import { ActiveDay, Day } from './interfaces/Provider'
import style from './Calendar.module.css'

interface Props extends Day {
  setActiveDate: (day: number, month: number, year: number) => void
  dateEnd: ActiveDay | null
  actualMonth: Date
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
      dateEnd?.day === props.day &&
      dateEnd.month === props.month &&
      dateEnd.year === props.year
    ) {
      return true
    }
    return false
  }

  return (
    <td
      class={[
        style['calendar-t-body__table-data'],
        props.today ? style['calendar-t-body__table-data--today'] : '',
        activeDate() ? style['calendar-t-body__table-data--active'] : ''
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
