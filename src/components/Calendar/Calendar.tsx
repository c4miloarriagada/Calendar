import {  useCalendarContext } from './Provider'
import { CalendarButtons } from './CalendarButtons'
import style from './Calendar.module.css'



export const Calendar = () => {

  const [state,  ] = useCalendarContext()

  const  month = state.today?.toLocaleString('default',{ month: 'long'}).split(" ")[0]
  const year = state.today?.getFullYear()

  console.log(state)
  return (
   
    <div class={style['calendar-container']}>
        <div class={style['calendar-buttons']}>
          <span><CalendarButtons iconDirection='left' /> </span>
          <span> {month} { year}</span>
          <span><CalendarButtons iconDirection='right'  /> </span>
          
        </div>
    </div>
   
  )
}
