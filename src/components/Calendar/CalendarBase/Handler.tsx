import { CalendarButtons } from './CalendarButtons'
import style from './../Calendar.module.css'

interface Props {
  actualMonth: Date[]
}

export const Handler = (props: Props) => {
  return (
    <div class={style['calendar-container__buttons']}>
      <span>
        <CalendarButtons iconDirection='left' />{' '}
      </span>
      <div>
        <p class={style['calendar-container__title']}>
          {`${props.actualMonth[0]
            ?.toLocaleString('default', { month: 'long' })
            .split(' ')[0]}    ${props.actualMonth[0]?.getFullYear()}`}
        </p>
      </div>
      <span>
        <CalendarButtons iconDirection='right' />{' '}
      </span>
    </div>
  )
}
