import { CalendarButtons } from '../CalendarBase/CalendarButtons'
import style from './../Calendar.module.css'

interface Props {
  actualMonth: Date[]
}

export const HandlerRange = (props: Props) => {
  return (
    <div class={style['calendar-handler-container']}>
      <div class={style['calendar-handler-container__buttons_container']}>
        <span>
          <CalendarButtons iconDirection='left' />{' '}
        </span>
        <span>
          <p class={style['calendar-container__title']}>
            {`${props.actualMonth[0]
              ?.toLocaleString('default', { month: 'long' })
              .split(' ')[0]}    ${props.actualMonth[0]?.getFullYear()}`}
          </p>
        </span>
      </div>
      <div class={style['calendar-handler-container__buttons_container']}>
        <span>
          <p class={style['calendar-container__title']}>
            {`${props.actualMonth[0] 
              ?.toLocaleString('default', { month: 'long' })
              .split(' ')[0]}    ${props.actualMonth[0]?.getFullYear()}`}
          </p>
        </span>
        <span>
          <CalendarButtons iconDirection='right' />{' '}
        </span>
      </div>
    </div>
  )
}
