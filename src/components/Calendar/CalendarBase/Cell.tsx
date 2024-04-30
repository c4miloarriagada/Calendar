import { Match, Switch } from 'solid-js'
import { setNewDate } from '../../../helpers/setNewDate'
import type {
  ActiveDay,
  CalendarType,
  Day
} from './interfaces/calendar.interface'
import style from './../Calendar.module.css'

interface Props extends Day {
  setActiveDate: (day: number, month: number, year: number) => void
  dateEnd: ActiveDay | null
  dateBegin: ActiveDay | null
  actualMonth: Date
  type: CalendarType
}

export const Cell = (props: Props) => {
  const currentDate = setNewDate(props.year, props.month, props.day)
  const handleClick = () => {
    const { setActiveDate } = props
    setActiveDate(props.day, props.month, props.year)
    dateEndValidator()
  }
  const validator = (date: ActiveDay | null) => {
    if (
      currentDate.getTime() ===
      setNewDate(date?.year!, date?.month!, date?.day!).getTime()
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
    const begin = setNewDate(
      dateBegin?.year!,
      dateBegin?.month!,
      dateBegin?.day!
    )
    const end = setNewDate(dateEnd?.year!, dateEnd?.month!, dateEnd?.day!)
    const actualDate = setNewDate(props.year, props.month, props.day)

    if (
      actualDate.getTime() >= begin.getTime() &&
      actualDate.getTime() <= end.getTime()
    ) {
      return true
    } else {
      return false
    }
  }

  const renderButton = () => {
    return (
      <button
        role='gridcell'
        class={
          props.today && !dateBeginValidator() && !dateEndValidator()
            ? style['calendar-t-body__table-data--today']
            : ''
        }
        aria-disabled={!props.activeMonth}
        aria-selected={rangeValidator()}
        disabled={props.disabled}
        onClick={handleClick}
      >
        {props.day}
      </button>
    )
  }
  return (
    <Switch>
      <Match when={props.type === 'range'}>
        <td
          role='presentation'
          class={[
            style['calendar-t-body__table-data'],
            rangeValidator() ? style['calendar-t-body__table-data--range'] : '',

            dateEndValidator()
              ? [
                  style['calendar-t-body__table-data--active'],
                  style['calendar-t-body__table-data--end']
                ].join(' ')
              : '',
            dateBeginValidator()
              ? [
                  style['calendar-t-body__table-data--active'],
                  style['calendar-t-body__table-data--begin']
                ].join(' ')
              : ''
          ].join(' ')}
        >
          {renderButton()}
        </td>
      </Match>
      <Match when={props.type !== 'range'}>
        <td
          role='presentation'
          class={[
            style['calendar-t-body__table-data'],
            !props.activeMonth
              ? style['calendar-t-body__table-data--deactive']
              : '',
            dateEndValidator()
              ? style['calendar-t-body__table-data--active']
              : ''
          ].join(' ')}
        >
          {renderButton()}
        </td>
      </Match>
    </Switch>
  )
}
