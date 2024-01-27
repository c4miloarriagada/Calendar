import { ActiveDay, Day } from './interfaces/calendar.interface'
import style from './../Calendar.module.css'

interface Props extends Day {
  setActiveDate: (day: number, month: number, year: number) => void
  dateEnd: ActiveDay | null
  dateBegin: ActiveDay | null
  actualMonth: Date
}

export const Cell = (props: Props) => {
  const handleClick = () => {
    const { setActiveDate } = props
    setActiveDate(props.day, props.month, props.year)
    dateEndValidator()
  }

  const validator = (date: ActiveDay | null) => {
    if (
      date?.day === props.day &&
      date.month === props.month &&
      date.year === props.year
    ) {
      return true
    }
    return false
  }

  const dateBeginValidator = () => {
    const { dateBegin } = props
    return validator(dateBegin)
  }
  const dateEndValidator = () => {
    const { dateEnd } = props
    return validator(dateEnd)
  }

  const rangeValidator = () => {
    const { dateBegin, dateEnd } = props
    const begin = new Date(dateBegin?.year!, dateBegin?.month!, dateBegin?.day)
    const end = new Date(dateEnd?.year!, dateEnd?.month!, dateEnd?.day)
    const actualDate = new Date(props.year, props.month, props.day)

    if (
      actualDate.getTime() >= begin.getTime() &&
      actualDate.getTime() <= end.getTime()
    ) {
      return true 
    } else {
      return false
    }
  }

  return (
    <td
      class={[
        style['calendar-t-body__table-data'],
        props.today ? style['calendar-t-body__table-data--today'] : '',
        dateEndValidator() ? style['calendar-t-body__table-data--active'] : '',
        dateBeginValidator() ? style['calendar-t-body__table-data--active'] : '',
        rangeValidator() ? style["calendar-t-body__table-data--range"] : ''
      ].join(' ')}
    >
      <button
        role='gridcell'
        aria-disabled={!props.activeMonth}
        disabled={props.disabled}
        onClick={handleClick}
      >
        {props.day}
      </button>
    </td>
  )
}
