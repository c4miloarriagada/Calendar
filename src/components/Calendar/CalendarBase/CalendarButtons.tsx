import { Match, Switch } from 'solid-js'
import { useCalendarContext } from './Provider'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'solid-icons/hi'
import style from './../Calendar.module.css'

type Direction = 'right' | 'left'

interface Props {
  iconDirection: Direction
}

export const CalendarButtons = (props: Props) => {
  const [state, { getDaysOfMonth }] = useCalendarContext()

  const handleClick = (iconDirection: Direction) => {
    if (iconDirection === 'left') {
      const yearValidator = (month: number, year: number) => {
        if (month === -1) {
          return [year - 1, 11]
        }
        return [year, month]
      }

      const [validYear, validMonth] = yearValidator(
        state.actualMonth?.actualMonth[0].getMonth()! - 1,
        state.actualMonth?.actualMonth[0].getFullYear()!
      )

      getDaysOfMonth(validMonth, validYear)
    }

    if (iconDirection === 'right') {
      const yearValidator = (month: number, year: number) => {
        if (month === 12 && state.yearHandler!.yearHandler > 0) {
          return [year + 1, 0]
        }
        return [year, month]
      }

      const [validYear, validMonth] = yearValidator(
        state.actualMonth?.actualMonth[0].getMonth()! + 1,
        state.actualMonth?.actualMonth[0].getFullYear()!
      )

      getDaysOfMonth(validMonth, validYear)
    }
  }

  return (
    <Switch>
      <Match when={props.iconDirection === 'left'}>
        <button
          onclick={() => handleClick(props.iconDirection)}
          class={style['calendar-container__button']}
        >
          <HiOutlineChevronLeft color='#858f96' size={17} />
        </button>
      </Match>
      <Match when={props.iconDirection === 'right'}>
        <button
          onclick={() => handleClick(props.iconDirection)}
          class={style['calendar-container__button']}
        >
          <HiOutlineChevronRight color='#858f96' size={17} />
        </button>
      </Match>
    </Switch>
  )
}
